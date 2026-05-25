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
  → CloudFront (TLS via ACM, gzip/brotli, edge cache, aggressive cache on /assets/*)
      → ALB (HTTPS) → ECS Fargate task (Node server, port 3000/3001)
```

- **Single origin (ALB).** Node already serves its own static files; CloudFront handles edge cache + TLS + compression. No S3 bucket, no OAC. Drop in later if origin load becomes a problem.
- **nginx container is removed** (website only — frontendsupport never had one). TLS → CloudFront. HTTP→HTTPS → CloudFront. gzip → CloudFront.
- Both Node servers do **SSR + puppeteer-driven OG images** — must stay as a real origin, not pre-rendered.
- ECS Express Mode runs Fargate under the hood; task def points at the existing ECR image.

## Phase 1 — apps/frontendsupport (learning exercise)

### Current state

- Live on AWS App Runner, image `313095418189.dkr.ecr.us-east-1.amazonaws.com/frontendsupport:latest`, port 3001.
- Custom domain `frontendrescue.com` via `aws_apprunner_custom_domain_association`.
- DNS already in Route53 (existing `data "aws_route53_zone" "main"` block).
- Single container, no nginx. Node serves its own static files from `dist/client/`.
- Server source `apps/frontendsupport/server.mts` has zero `@aws-sdk/*` imports — task role only needs the AWS-managed permissions on the execution role (ECR pull + CloudWatch Logs). No custom task role policy needed.

### Build target infra (in the existing `apps/frontendsupport/terraform/` directory)

Add the new resources alongside the existing App Runner ones in the same files. App Runner keeps running and serving `frontendrescue.com` throughout — it stays as the rollback path until the new stack is verified.

New resources to add:

**TLS terminates at CloudFront, not the ALB.** CloudFront can't do HTTPS to the ALB by its `*.elb.amazonaws.com` hostname (cert is for `frontendrescue.com` → hostname mismatch → 502). So CloudFront → ALB is plain HTTP, and the ALB is locked to CloudFront's IP ranges via the `com.amazonaws.global.cloudfront.origin-facing` managed prefix list. The ACM cert is the CloudFront _viewer_ cert.

Files written in `apps/frontendsupport/terraform/` (one concern per file):

- `domain.tf` — `aws_acm_certificate` (`validation_method = "DNS"`, region `us-east-1`) + `aws_route53_record.cert_validation` + `aws_acm_certificate_validation`, all using the existing `data.aws_route53_zone.main`. App Runner resources still here, untouched.
- `network.tf` — `data.aws_vpc.default`, `data.aws_subnets.default`, `data.aws_ec2_managed_prefix_list.cloudfront`. ALB SG allows **HTTP:80 from the CloudFront prefix list only**; task SG allows 3001 from ALB SG only.
- `alb.tf` — `aws_lb` (internet-facing), `aws_lb_target_group` (target_type `ip`, port 3001, health check `/`), `aws_lb_listener` **HTTP:80** → target group (no cert on the ALB).
- `ecs.tf` — `aws_iam_role.ecs_task_execution` + `AmazonECSTaskExecutionRolePolicy`; `aws_cloudwatch_log_group` `/ecs/frontendsupport`; `aws_ecs_cluster` (Container Insights on); `aws_ecs_task_definition` (Fargate, 1024/2048, container port 3001, env from `var.environment_variables`, awslogs); `aws_ecs_service` (Fargate, desired_count=1, default subnets, task SG, `assign_public_ip=true`, attached to target group, `depends_on` the HTTP listener).
- `cloudfront.tf` — `aws_cloudfront_distribution`, single ALB origin over HTTP (`origin_protocol_policy = "http-only"`); default behaviour uses `Managed-CachingDisabled` + `Managed-AllViewer` (SSR, nothing cached); `/assets/*` behaviour uses `Managed-CachingOptimized` (Vite hashed assets); viewer cert = validated ACM cert; `aliases = ["frontendrescue.com"]`; `PriceClass_100`.

NOT added yet (deferred to cutover step):

- `aws_route53_record` ALIAS `frontendrescue.com` → CloudFront. Apex still resolves to App Runner until this is added.

### Cutover runbook

The Route53 ALIAS swap is the only step that affects real users. Everything before it must be verified. Treat the cutover as a professional change: tag every new resource (`Name`, `Environment=production`, `ManagedBy=terraform`, `App=frontendsupport`); gate the flip on health-check + smoke-test signals; stay watching for 30 min after the flip before walking away.

1. `terraform apply` — adds the new stack (ALB, ECS, CloudFront, etc.) alongside the still-running App Runner service. CloudFront comes up on its default `*.cloudfront.net` hostname. Apex DNS unchanged.
2. Push image to ECR (existing `bin/deploy.sh` already does this — no changes needed).
3. Force ECS to pick up the image: `aws ecs update-service --cluster <c> --service <s> --force-new-deployment`. Wait for steady state.
4. **Pre-flip gate — all three must pass:**
   - `aws elbv2 describe-target-health --target-group-arn <arn> --query 'TargetHealthDescriptions[*].TargetHealth.State'` → `["healthy"]`.
   - `aws ecs describe-services --cluster <c> --services <s> --query 'services[0].deployments[0].rolloutState'` → `"COMPLETED"`.
   - Smoke test: `/etc/hosts` override pointing `frontendrescue.com` at a CloudFront edge IP — render home page in browser, exercise the puppeteer OG image route, confirm any client-side routing works.
5. **THE FLIP (the only user-visible step):** remove `aws_apprunner_custom_domain_association` from the terraform files, add `aws_route53_record` ALIAS for `frontendrescue.com` → CloudFront. `terraform apply`.
6. **Post-flip watch (30 min, do not walk away):**
   - `dig +short frontendrescue.com` returns CloudFront IPs within 60s.
   - `curl -I https://frontendrescue.com` returns 200, `via:` header names CloudFront.
   - CloudWatch: ALB `HTTPCode_Target_5XX_Count` stays 0; `TargetResponseTime` p95 stays under historical App Runner baseline.
   - Tail ECS task logs: `aws logs tail /ecs/frontendsupport --follow`. Look for unhandled exceptions or repeated 5xx.
7. App Runner still receives some traffic from stale resolver caches — that's fine. Once 24h of zero traffic on App Runner (verify via `AWS/AppRunner RequestCount` in CloudWatch), proceed to the deletion checklist below.

### Deletion checklist (zero billing residue)

After cutover succeeds, remove every App Runner-era resource from `apps/frontendsupport/terraform/` and `terraform apply` to destroy them. Each must be verified gone.

- [ ] Remove `aws_apprunner_service.frontendsupport`, then apply.
  - Verify: `aws apprunner list-services --query "ServiceSummaryList[?ServiceName=='frontendsupport']"` → `[]`.
- [ ] Remove `aws_iam_role.apprunner_role` + `aws_iam_role_policy_attachment.apprunner_ecr_policy`, then apply.
  - Verify: `aws iam get-role --role-name frontendsupport-apprunner-role` → `NoSuchEntity`.
- [ ] Sweep for orphaned App Runner extras the terraform never owned:
  - `aws apprunner list-auto-scaling-configurations` — delete anything mentioning `frontendsupport`.
  - `aws apprunner list-vpc-connectors` — delete any referencing this service.
- [ ] Clean up `variables.tf` / `terraform.tfvars`: drop `cpu`, `memory`, `custom_domain`, `route53_zone_name` defaults that were App Runner-specific. Keep `port`, `app_name`, `ecr_repository_url`, `image_tag` (still used by ECS).
- [ ] Final billing sanity: `aws ce get-cost-and-usage --service "AWS App Runner"` after 48h should return `$0.00` for the new period.
- [ ] Commit the cleaned-up terraform.

### What we learn here (carries to Phase 2)

- Concrete ECS Express Mode terraform resource shape end-to-end.
- ALB + Fargate `ip` target type wiring.
- CloudFront → ALB origin pattern.
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

### Build target infra (new `apps/website/terraform/` directory — none exists yet)

Website has no AWS infra today (lives entirely on DigitalOcean), so the terraform directory is being created fresh. Use the post-cutover `apps/frontendsupport/terraform/` (App Runner resources removed, ECS+CF resources kept) as the template. Copy and adjust:

- Container `website_server`, port 3000.
- Hostnames `cutting.scot` + `www.cutting.scot` (CloudFront aliases both).
- Route53 zone is `cutting_scot` from Phase 2a.
- ACM cert covers both apex and www.
- Drop the `aws_s3_bucket` and any nginx-related thinking — Node serves its own static.

Update `apps/website/bin/deploy.sh`: drop the `website_nginx` build/tag/push lines. No S3 sync needed.

### Cutover runbook (downtime OK, professional treatment)

The Route53 ALIAS swap is the only step that affects real users. Tag every new resource; gate the flip on health + smoke signals; watch for 30 min post-flip.

1. `terraform apply` — builds the full new stack. No DNS records added yet for apex/www. Droplet still serving.
2. Push `website_server` image to ECR (existing `bin/deploy.sh`, minus nginx).
3. Force ECS service to pick up the new image. Wait for steady state.
4. **Pre-flip gate — all three must pass:**
   - ALB target group health → `["healthy"]`.
   - ECS service rollout → `"COMPLETED"`.
   - Smoke test: `/etc/hosts` override for `cutting.scot` + `www.cutting.scot` → CloudFront edge IP. SSR + puppeteer OG image generation must work in a real browser.
5. **THE FLIP:** add the `aws_route53_record` ALIAS records for apex + www → CloudFront and `terraform apply`. TTL=60s from Phase 2a so propagation is fast.
6. **Post-flip watch (30 min):** `dig`, `curl`, ALB 5xx rate, ECS task logs (`aws logs tail /ecs/website --follow`). No anomalies before walking away.
7. DO droplet still serving stragglers — fine. Once 24h of zero traffic to droplet, proceed to deletion checklist below.

### Deletion checklist (zero billing residue)

- [ ] `doctl compute droplet delete <id> --force`.
  - Verify: `doctl compute droplet list` does not list it.
- [ ] Cancel any DigitalOcean reserved IPs / volumes / snapshots attached to the droplet.
  - Verify: `doctl compute reserved-ip list`, `doctl compute volume list`, `doctl compute snapshot list` — nothing referencing the droplet.
- [ ] Confirm DO DNS zone for `cutting.scot` already deleted (in Phase 2a). Verify in DO control panel.
- [ ] Final DigitalOcean billing sanity: log into DO control panel, confirm next invoice estimate is `$0` (or matches whatever else still runs there).
- [ ] Delete ECR repo `website_nginx`: `aws ecr delete-repository --repository-name website_nginx --force`.
  - Verify: `aws ecr describe-repositories --query "repositories[?repositoryName=='website_nginx']"` → `[]`.
- [ ] **Cleanup commit** (after droplet gone):
  - Delete `apps/website/nginx/`, `docker-compose-in-production.yml`, `docker-compose-prod.yml`.
  - Strip nginx build/push from `bin/deploy.sh` (formalise the build-step change).
  - The paid TLS cert + key on the old droplet die with it — no separate action needed.

## Things to verify before writing terraform

- Puppeteer + Chrome inside Fargate: confirm the Dockerfile's Chrome install survives the move (already runs on App Runner for frontendsupport, so likely fine, but task size must be generous — start 1 vCPU / 2 GB, bump if needed).

## Out of scope

- Local dev workflow (`docker-compose.yml`) — not part of production path, leave alone.
- CI/CD automation of deploys — manual `bin/deploy.sh` + `terraform apply` is fine for v1.
- Multi-AZ / autoscaling — single task, single AZ to start. Add later if needed.

## Step-by-step checklist with verification

Each step: action + how to prove it worked. Resume from first unchecked.

### Phase 1 — frontendsupport

**P1.1 — Scaffold terraform-ecs/**

- [ ] `mkdir apps/frontendsupport/terraform-ecs && cd $_ && terraform init` (with same provider versions as `terraform/`).
  - Verify: `terraform validate` passes on an empty `main.tf`.

**P1.2 — Networking (VPC + SGs)**

- [ ] Define VPC (or `data "aws_vpc" "default"` to reuse default VPC for v1), public subnets, ALB SG (443 from world), task SG (3001 from ALB SG).
  - Verify: `terraform plan` shows 2 SGs + ingress/egress rules; no unintended public ingress on task SG.

**P1.3 — ACM cert**

- [ ] `aws_acm_certificate` for `frontendrescue.com`, DNS validation, + `aws_route53_record` validation records + `aws_acm_certificate_validation`. Region `us-east-1`.
  - Verify after apply: `aws acm describe-certificate --certificate-arn <arn> --region us-east-1 --query 'Certificate.Status'` → `"ISSUED"`.

**P1.5 — ALB**

- [ ] `aws_lb` (internet-facing, application), `aws_lb_target_group` (port 3001, target_type `ip`, health check path `/`), `aws_lb_listener` HTTPS:443 with cert ARN.
  - Verify after apply: `aws elbv2 describe-load-balancers --names <name> --query 'LoadBalancers[0].State.Code'` → `"active"`.

**P1.6 — ECS cluster + task + service**

- [ ] `aws_ecs_cluster`, `aws_ecs_task_definition` (Fargate, container `frontendsupport`, port 3001, awslogs driver, 1024 CPU / 2048 MB), `aws_ecs_service` (launch type Fargate, desired_count=1, attached to target group, assigned public IP for default VPC).
  - Verify after apply:
    - `aws ecs describe-services --cluster <name> --services <name> --query 'services[0].runningCount'` → `1`.
    - `aws elbv2 describe-target-health --target-group-arn <arn> --query 'TargetHealthDescriptions[*].TargetHealth.State'` → `["healthy"]` (may take 60-90s).

**P1.7 — CloudFront**

- [ ] `aws_cloudfront_distribution` with single ALB origin (HTTPS), default cache behaviour passes through, additional cache behaviour for `/assets/*` with `min_ttl=31536000, default_ttl=31536000` (Vite hashed assets are immutable), viewer protocol policy `redirect-to-https`, `aliases = ["frontendrescue.com"]`, cert ARN.
  - Verify after apply (takes 5-10 min):
    - `aws cloudfront get-distribution --id <id> --query 'Distribution.Status'` → `"Deployed"`.
    - `curl -I https://<cloudfront-domain>/` returns 200 + `via:` header naming CloudFront.

**P1.8 — Deploy app**

- [ ] Push image: existing `apps/frontendsupport/bin/deploy.sh`.
  - Verify: `aws ecr describe-images --repository-name frontendsupport --image-ids imageTag=latest --query 'imageDetails[0].imagePushedAt'` shows a fresh timestamp.
- [ ] Force ECS deployment: `aws ecs update-service --cluster <c> --service <s> --force-new-deployment`.
  - Verify: `aws ecs describe-services ... --query 'services[0].deployments[0].rolloutState'` → `"COMPLETED"`.

**P1.9 — Smoke test (before DNS flip)**

- [ ] `curl -H "Host: frontendrescue.com" https://<cloudfront-domain>/` returns 200 with HTML containing expected app shell.
- [ ] Add line to `/etc/hosts`: `<cloudfront-edge-ip> frontendrescue.com` (resolve `<cloudfront-domain>` with `dig`).
  - Verify in browser: home page renders, navigation works, OG image generation endpoint returns a PNG (test the specific puppeteer route).
- [ ] Remove `/etc/hosts` line.

**P1.10 — DNS flip (the only user-visible step)**

- [ ] In old `terraform/`, comment out `aws_apprunner_custom_domain_association` and `apply`.
- [ ] In `terraform-ecs/`, add `aws_route53_record` ALIAS for `frontendrescue.com` → CloudFront, `apply`.
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
