output "cloudfront_domain_name" {
  value = aws_cloudfront_distribution.default.domain_name
}
