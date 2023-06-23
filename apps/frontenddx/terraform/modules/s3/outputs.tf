output "bucket_id" {
  value = aws_s3_bucket.default.id
}

output "bucket_regional_domain_name" {
  value = aws_s3_bucket.default.bucket_regional_domain_name
}