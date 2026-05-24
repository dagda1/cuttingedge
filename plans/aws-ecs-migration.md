# AWS ECS Express Mode Migration

## Goal

Move `apps/website` off DigitalOcean and `apps/frontendsupport` off AWS App Runner. Both land on **Amazon ECS Express Mode** (Fargate) behind ALB + CloudFront. Single AWS account: `313095418189`, region `us-east-1`.

**Order: frontendsupport first (learning exercise), then website.**

Rationale for the order: frontendsupport is already in AWS, DNS already in Route53 (`frontendrescue.com`), single container, no cross-cloud DNS work, and the existing App Runner service can stay running as a fallback during cutover. Once the ECS Express Mode pattern is proven on the easy migration, website inherits it — with the harder pieces (DigitalOcean droplet decom, DNS provider move, paid-cert switch) tackled with confidence.

## Why ECS Express Mode (not App Runner)

App Runner entered maintenance mode on 2026-04-30. Existing `frontendsupport` service can keep running, but no new App Runner services can be created. AWS's recommended replacement is ECS Express Mode — preserves App Runner's simplicity, exposes full ECS feature set, supports multi-container if needed.

## Existing AWS state

- ECR repos already populated:
  - `313095418189.dkr.ecr.us-east-1.amazonaws.com/website_server`
  - `313095418189.dkr.ecr.us-east-1.amazonaws.com/website_nginx` _(to be deleted during Phase 2 cleanup)_
  - `313095418189.dkr.ecr.us-east-1.amazonaws.com/frontendsupport`
- `apps/frontendsupport/terraform/` — working App Runner config. Custom domain `frontendrescue.com`, Route53 zone `frontendrescue.com`, port 3001, 1 vCPU / 2 GB.
- `apps/website/bin/deploy.sh` already builds and pushes server + nginx images to ECR.

## Target architecture (both apps, same shape)

```
Route53 (frontendrescue.com / cutting.scot)
  → CloudFront (TLS via ACM, gzip/brotli, edge cache)
      ├─ /static/* and built assets → S3 bucket
      └─ everything else            → ALB (HTTPS) → ECS Fargate task (Node server, port 3000/3001)
```

- **nginx container is removed** (website only — frontendsupport never had one). TLS → CloudFront. HTTP→HTTPS → CloudFront. gzip → CloudFront. Static file serving → S3. Reverse proxy → ALB.
- Both Node servers do **SSR + puppeteer-driven OG images** — must stay as a real origin, not pre-rendered.
- ECS Express Mode runs Fargate under the hood; task def points at the existing ECR image.

## Phase 1 — apps/frontendsupport (learning exercise)

### Current state

- Live on AWS App Runner, image `313095418189.dkr.ecr.us-east-1.amazonaws.com/frontendsupport:latest`, port 3001.
- Custom domain `frontendrescue.com` via `aws_apprunner_custom_domain_association`.
- DNS already in Route53 (existing `data "aws_route53_zone" "main"` block).
- Single container, no nginx.

### Build target infra

1. **Create `apps/frontendsupport/terraform-ecs/`** as a new directory alongside the existing `terraform/` (keep the App Runner config intact until cutover succeeds — rollback path).
2. **Resources to declare:**
   - `aws_s3_bucket` for static assets + bucket policy for CloudFront OAC.
   - `aws_acm_certificate` (ACM-managed, `validation_method = "DNS"`) for `frontendrescue.com` + `www.frontendrescue.com`, validated via the existing Route53 zone. **Must be in `us-east-1` for CloudFront.** Reuse for ALB if ALB stays in `us-east-1`.
   - `aws_lb` (internal=false, application), `aws_lb_target_group` (ip target type for Fargate, port 3001), `aws_lb_listener` (HTTPS:443 with ACM cert ARN).
   - `aws_ecs_cluster`, `aws_ecs_task_definition` (Fargate, single container `frontendsupport`, port 3001, awslogs driver, 1 vCPU / 2 GB initially — bump if puppeteer struggles), `aws_ecs_service` (Express Mode, desired_count=1, attached to target group).
   - `aws_security_group` pair: ALB SG allows 443 from world; task SG allows 3001 from ALB SG only.
   - `aws_cloudfront_distribution` with two origins (S3 + ALB), default behaviour → ALB, `/static/*` behaviour → S3, viewer protocol policy `redirect-to-https`, `aliases = ["frontendrescue.com"]`.
   - `aws_route53_record` ALIAS for `frontendrescue.com` → CloudFront _(only added at cutover — see runbook)_.
   - IAM: task execution role (ECR pull + CloudWatch logs), task role (whatever the app needs at runtime — check `apps/frontendsupport/server.mts` for AWS SDK calls).
3. **Add static asset sync to `apps/frontendsupport/bin/deploy.sh`:** `aws s3 sync ./dist/client/static s3://<bucket>/static --delete` after the ECR push.

### Cutover runbook

The Route53 ALIAS swap is the only step that affects real users. Everything before it must be verified.

1. `terraform apply` in `terraform-ecs/` — everything **except** the ALIAS record. CloudFront comes up on its default `*.cloudfront.net` hostname.
2. Push image to ECR (already wired). Sync static assets to S3.
3. Force ECS to pick up the image (`aws ecs update-service --force-new-deployment`). Wait for steady state.
4. Smoke-test against the new stack via `Host` header + `/etc/hosts` override pointing `frontendrescue.com` at a CloudFront edge IP. SSR + puppeteer OG images must work. Do NOT proceed until this passes.
5. **THE FLIP:** in the App Runner terraform, comment out `aws_apprunner_custom_domain_association`. In `terraform-ecs/`, add the Route53 ALIAS. `terraform apply` both.
6. Watch CloudWatch logs + ALB target metrics. App Runner still serving stragglers behind stale resolver caches.
7. Once 24h of zero traffic on App Runner: `terraform destroy` against the old `terraform/` directory (deletes App Runner service + IAM role).
8. Rename `terraform-ecs/` → `terraform/`. Delete the old App Runner-specific tfvars entries.

### What we learn here (carries to Phase 2)

- Concrete ECS Express Mode resource shape (cluster, task def, service, autoscaling defaults).
- ALB + Fargate `ip` target type wiring.
- CloudFront with dual origins (S3 + ALB), behaviour ordering, OAC bucket policy.
- ACM DNS validation flow with an existing Route53 zone.
- Fargate task size that keeps puppeteer happy.

## Phase 2 — apps/website

### Current DigitalOcean state

- Single droplet, running `docker-compose-in-production.yml`: two containers (`website_server` on 3000, `website_nginx` on 80/443), both pulled from ECR.
- TLS cert + key mounted from droplet host at `/root/ssl/` (`ssl-bundle.crt`, `cutting.scot.key`). **Paid cert, expires 2026-08-11 — being dropped in favour of free ACM-managed cert. Cutover must complete before expiry.** Today is 2026-05-24, so ~11 weeks runway; target cutover by end of July for safe buffer.
- **DNS hosted by DigitalOcean** (`ns1/ns2/ns3.digitalocean.com`). Domain registered at **34SP.com** (Ascio is their upstream registrar). Nameserver changes happen in the 34SP control panel — domain registration does NOT need to move, only the NS records.
- Downtime during cutover is acceptable.

### Phase 2a — DNS migration to Route53 (prerequisite for everything else)

ACM DNS validation writes TXT records to the authoritative zone, so the zone must be in Route53 before the website `terraform apply`.

1. Create `aws_route53_zone "cutting_scot"` in terraform (separate apply, or first apply of the website stack).
2. Inventory current records from the DigitalOcean DNS panel: A/AAAA for apex + www, MX (if email runs on this domain), TXT (SPF/DKIM/DMARC), any CNAMEs (e.g. for subdomains).
3. Recreate every record verbatim in Route53, **TTL=60 from the start** (so the final cutover swap propagates fast without a separate "lower TTL" step later). Apex A still points at the DO droplet IP at this stage — only DNS hosting moves, not traffic.
4. In the 34SP.com control panel, change nameservers from `ns1/ns2/ns3.digitalocean.com` to the 4 Route53 NS records output by `aws_route53_zone`. (Domain stays registered at 34SP — no transfer needed.)
5. Wait 24–48h for TLD-level NS propagation. Verify with `dig +trace cutting.scot`.
6. Once propagation confirmed: delete the DO DNS zone.

Only after this is done can ACM issue the cert.

### Build target infra

1. **Copy `apps/frontendsupport/terraform/`** (the new ECS Express Mode one, post-rename) to `apps/website/terraform/`. Adjust:
   - Container `website_server`, port 3000.
   - Hostnames `cutting.scot` + `www.cutting.scot`.
   - Route53 zone is the new `cutting_scot` zone from Phase 2a.
   - Aliases on CloudFront include both apex and www.
2. **Update `apps/website/bin/deploy.sh`:** drop the `website_nginx` build/tag/push lines. Add the S3 sync.

### Cutover runbook (downtime OK)

The Route53 ALIAS swap is the only step that affects real users.

1. `terraform apply` everything **except** the apex/www ALIAS records.
2. Push `website_server` image to ECR. Sync static assets to S3.
3. Force ECS service to pick up the new image. Wait for steady state.
4. Smoke-test via `Host` header + `/etc/hosts` override pointing `cutting.scot` at a CloudFront edge IP. SSR + puppeteer OG images must work. Do NOT proceed until this passes.
5. **THE FLIP:** apply the Route53 ALIAS records for apex + www → CloudFront. TTL=60s from Phase 2a so propagation is fast.
6. Watch CloudWatch logs + ALB target metrics. DO droplet still serving stragglers — fine.
7. Once 24h of zero traffic to droplet: `doctl compute droplet delete <id>`, cancel the droplet, remove the DO billing entry.
8. **Cleanup commits** (separate PR, after droplet is gone):
   - Delete `apps/website/nginx/`, `docker-compose-in-production.yml`, `docker-compose-prod.yml`.
   - Strip nginx build/push from `bin/deploy.sh` (already done in build step, formalise it).
   - Delete ECR repo `website_nginx`.
   - Delete `/root/ssl/` cert + key — the paid CA is being abandoned.

## Things to verify before writing terraform

- Vite build output path for static assets (confirms what gets synced to S3). Same for both apps.
- Does either Node server need outbound access to anything specific (RDS, Secrets Manager, third-party APIs)? Drives task role IAM policy and VPC routing.
- Puppeteer + Chrome inside Fargate: confirm the Dockerfile's Chrome install survives the move (already runs on App Runner for frontendsupport, so likely fine, but task size must be generous — start 1 vCPU / 2 GB, bump if needed).

## Out of scope

- Local dev workflow (`docker-compose.yml`) — not part of production path, leave alone.
- CI/CD automation of deploys — manual `bin/deploy.sh` + `terraform apply` is fine for v1.
- Multi-AZ / autoscaling — single task, single AZ to start. Add later if needed.

## Step-by-step checklist with verification

Each step: action + how to prove it worked. Resume from first unchecked.

### Phase 1 — frontendsupport

**P1.0 — Discovery**

- [ ] Confirm App Runner service is currently serving traffic.
  - Verify: `curl -I https://frontendrescue.com` returns `200` or `301`.
- [ ] Locate Vite client build output directory (likely `dist/client/`).
  - Verify: `pnpm --filter @cutting/frontendsupport build && ls apps/frontendsupport/dist/client/` shows hashed JS/CSS assets.
- [ ] Grep `apps/frontendsupport/server.mts` for AWS SDK imports / external service calls.
  - Verify: list every `@aws-sdk/*` import and any third-party fetch — drives task-role IAM policy.

**P1.1 — Scaffold terraform-ecs/**

- [ ] `mkdir apps/frontendsupport/terraform-ecs && cd $_ && terraform init` (with same provider versions as `terraform/`).
  - Verify: `terraform validate` passes on an empty `main.tf`.

**P1.2 — Networking (VPC + SGs)**

- [ ] Define VPC (or `data "aws_vpc" "default"` to reuse default VPC for v1), public subnets, ALB SG (443 from world), task SG (3001 from ALB SG).
  - Verify: `terraform plan` shows 2 SGs + ingress/egress rules; no unintended public ingress on task SG.

**P1.3 — ACM cert**

- [ ] `aws_acm_certificate` for `frontendrescue.com` + `www.frontendrescue.com`, DNS validation, + `aws_route53_record` validation records + `aws_acm_certificate_validation`. Region `us-east-1`.
  - Verify after apply: `aws acm describe-certificate --certificate-arn <arn> --region us-east-1 --query 'Certificate.Status'` → `"ISSUED"`.

**P1.4 — S3 static bucket**

- [ ] `aws_s3_bucket` + block-public-access + bucket policy granting CloudFront OAC `s3:GetObject`.
  - Verify: `aws s3api get-public-access-block --bucket <name>` shows all four flags `true`.

**P1.5 — ALB**

- [ ] `aws_lb` (internet-facing, application), `aws_lb_target_group` (port 3001, target_type `ip`, health check path `/`), `aws_lb_listener` HTTPS:443 with cert ARN.
  - Verify after apply: `aws elbv2 describe-load-balancers --names <name> --query 'LoadBalancers[0].State.Code'` → `"active"`.

**P1.6 — ECS cluster + task + service**

- [ ] `aws_ecs_cluster`, `aws_ecs_task_definition` (Fargate, container `frontendsupport`, port 3001, awslogs driver, 1024 CPU / 2048 MB), `aws_ecs_service` (launch type Fargate, desired_count=1, attached to target group, assigned public IP for default VPC).
  - Verify after apply:
    - `aws ecs describe-services --cluster <name> --services <name> --query 'services[0].runningCount'` → `1`.
    - `aws elbv2 describe-target-health --target-group-arn <arn> --query 'TargetHealthDescriptions[*].TargetHealth.State'` → `["healthy"]` (may take 60-90s).

**P1.7 — CloudFront**

- [ ] `aws_cloudfront_distribution` with two origins (S3 with OAC, ALB with HTTPS), default behaviour → ALB, `/static/*` → S3, viewer protocol policy `redirect-to-https`, `aliases = ["frontendrescue.com", "www.frontendrescue.com"]`, cert ARN.
  - Verify after apply (takes 5-10 min):
    - `aws cloudfront get-distribution --id <id> --query 'Distribution.Status'` → `"Deployed"`.
    - `curl -I https://<cloudfront-domain>/` returns 200 + `via:` header naming CloudFront.

**P1.8 — Deploy app**

- [ ] Push image: existing `apps/frontendsupport/bin/deploy.sh`.
  - Verify: `aws ecr describe-images --repository-name frontendsupport --image-ids imageTag=latest --query 'imageDetails[0].imagePushedAt'` shows a fresh timestamp.
- [ ] Sync static assets: `aws s3 sync apps/frontendsupport/dist/client/static s3://<bucket>/static --delete`.
  - Verify: `aws s3 ls s3://<bucket>/static/` lists hashed asset filenames.
- [ ] Force ECS deployment: `aws ecs update-service --cluster <c> --service <s> --force-new-deployment`.
  - Verify: `aws ecs describe-services ... --query 'services[0].deployments[0].rolloutState'` → `"COMPLETED"`.

**P1.9 — Smoke test (before DNS flip)**

- [ ] `curl -H "Host: frontendrescue.com" https://<cloudfront-domain>/` returns 200 with HTML containing expected app shell.
- [ ] Add line to `/etc/hosts`: `<cloudfront-edge-ip> frontendrescue.com` (resolve `<cloudfront-domain>` with `dig`).
  - Verify in browser: home page renders, navigation works, OG image generation endpoint returns a PNG (test the specific puppeteer route).
- [ ] Remove `/etc/hosts` line.

**P1.10 — DNS flip (the only user-visible step)**

- [ ] In old `terraform/`, comment out `aws_apprunner_custom_domain_association` and `apply`.
- [ ] In `terraform-ecs/`, add `aws_route53_record` ALIAS for apex + www → CloudFront, `apply`.
  - Verify: `dig +short frontendrescue.com` returns CloudFront IPs (not App Runner IPs) within 60s.
  - Verify: `curl -I https://frontendrescue.com` returns 200, `via:` header names CloudFront.

**P1.11 — Watch + decommission**

- [ ] CloudWatch: confirm ECS task is receiving requests (`AWS/ApplicationELB RequestCount` > 0 on the new target group).
- [ ] After 24h with zero `AppRunner/RequestCount` on the old service: `terraform destroy` in old `terraform/`.
  - Verify: `aws apprunner list-services --query 'ServiceSummaryList[?ServiceName==\`frontendsupport\`]'`returns`[]`.
- [ ] `mv apps/frontendsupport/terraform-ecs apps/frontendsupport/terraform` and commit.

### Phase 2 — website

**P2.0 — Discovery**

- [ ] Snapshot the current DigitalOcean DNS zone: every record, type, value, TTL.
  - Verify: written to `plans/dns-snapshot-cutting-scot.txt` (or wherever — out-of-repo is fine).
- [ ] Confirm droplet hostname/IP and SSH access (needed for final teardown).

**P2.1 — Route53 zone**

- [ ] `aws_route53_zone "cutting_scot"` + recreate every record from snapshot with TTL=60. Apex A still points at DO droplet IP.
  - Verify: `dig @ns-XXX.awsdns-XX.com cutting.scot` (querying Route53 directly) returns the droplet IP.

**P2.2 — Nameserver swap at 34SP**

- [ ] In 34SP control panel: change NS to the 4 from `aws_route53_zone.cutting_scot.name_servers`.
  - Verify: `dig +trace cutting.scot` shows the TLD delegation pointing at `awsdns` nameservers (may take 24-48h).
- [ ] Once propagated: delete the DO DNS zone in DigitalOcean control panel.

**P2.3 — Repeat P1.1 through P1.10** for website, swapping:

- Domain `cutting.scot` (+ `www.cutting.scot`).
- Port 3000.
- Image `website_server`.
- ECR repo `website_server`.
- Each verification step uses the website hostnames.

**P2.4 — Decommission droplet**

- [ ] After 24h with zero traffic to droplet: `doctl compute droplet delete <id> --force`.
  - Verify: `doctl compute droplet list` no longer lists it.
- [ ] Cancel DO billing line if it's separately metered.

**P2.5 — Cleanup PR**

- [ ] Delete `apps/website/nginx/`, `apps/website/docker-compose-in-production.yml`, `apps/website/docker-compose-prod.yml`.
- [ ] Strip nginx steps from `apps/website/bin/deploy.sh`.
- [ ] `aws ecr delete-repository --repository-name website_nginx --force`.
  - Verify: `aws ecr describe-repositories --query 'repositories[?repositoryName==\`website_nginx\`]'`returns`[]`.
- [ ] Confirm pipeline still green; CHANGELOG entry written.
