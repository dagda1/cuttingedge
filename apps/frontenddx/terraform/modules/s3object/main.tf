resource "aws_s3_bucket_object" "default" {
  bucket = var.bucket_id
  acl    = var.acl
  key    = var.key
  source = var.s3_source
}