output "cloudfront_domain_name" {
  description = "Default CloudFront domain"
  value       = aws_cloudfront_distribution.frontendsupport.domain_name
}

output "site_bucket" {
  description = "S3 bucket the static site is deployed to (s3 sync target)"
  value       = aws_s3_bucket.site.bucket
}
