# frontendsupport: ECS → static S3/CloudFront cutover

Region `us-east-1`, account `313095418189`.

State reality: this terraform state tracks only the cert, DNS, ECR, and the new S3 resources. The CloudFront distribution, ALB, and ECS are **not** in state. So:

- The distribution must be imported before apply (else apply tries to create a duplicate → CNAME 409).
- The ALB/ECS are not managed here and must be deleted by hand (step 4).

## 0. Is the distribution already imported?

```
cd apps/frontendsupport/terraform
terraform state list | grep cloudfront_distribution
```

If it prints `aws_cloudfront_distribution.frontendsupport`, the import is done — skip to step 2. If it prints nothing, do step 1.

## 1. Find the distribution, then import it

List every distribution with its aliases and pick the frontendsupport one:

```
cd apps/frontendsupport/terraform
aws cloudfront list-distributions --query "DistributionList.Items[].{Id:Id,Aliases:Aliases.Items}" --output table
```

Take that ID and:

```
terraform import aws_cloudfront_distribution.frontendsupport E3H4YDK8TII931
```

## 2. Apply — repoints the distribution origin ALB → S3 (in place)

```
terraform plan
terraform apply
```

Plan should show only the distribution being modified (origin/behaviors), plus the S3 resources already created. Nothing about ALB/ECS (not tracked).

## 3. Build the static site and push it to the bucket

```
cd apps/frontendsupport
pnpm build
aws s3 sync dist/client "s3://$(cd terraform && terraform output -raw site_bucket)" --delete
aws cloudfront create-invalidation --distribution-id E3H4YDK8TII931 --paths "/*"
```

## 4. Delete the orphaned ALB + ECS by hand (the cost you're killing)

These are not in terraform. Delete in this order:

```
aws ecs update-service --cluster frontendsupport --service frontendsupport --desired-count 0
aws ecs delete-service --cluster frontendsupport --service frontendsupport --force
aws ecs delete-cluster --cluster frontendsupport
```

Then the ALB, its listener and target group, and the two security groups (`frontendsupport-alb`, `frontendsupport-task`) and log group `/ecs/frontendsupport` — delete from the EC2/CloudWatch consoles, or paste the ARNs here and I'll write the exact CLI deletes.

## 5. Verify

```
curl -I https://frontendrescue.com
curl -s https://frontendrescue.com/about | grep -o '<title>[^<]*</title>'
```

Both should return 200 / the prerendered page.
