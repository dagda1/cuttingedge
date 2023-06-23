output "cloudfront_access_identity_path" {
  value = aws_cloudfront_origin_access_identity.default.cloudfront_access_identity_path
}

output "iam_arn" {
  value = aws_cloudfront_origin_access_identity.default.iam_arn
}