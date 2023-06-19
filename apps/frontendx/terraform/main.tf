provider "aws" {
  region                            = "eu-west-2"
}

terraform {
 backend "s3" {
   bucket                           = "frontenddx-state"
   key                              = "backend/terraform.tfstate"
   region                           = "eu-west-2"
   encrypt                          = true
   kms_key_id                       = "alias/frontenddx-state-bucket-key"
   dynamodb_table                   = "frontenddx-state-locks"
 }
}

locals {
  bucket_name = "frontenddx"
}

module "cloudfront_origin_access_identity" {
  source                            = "./modules/cloudfront_origin_access_identity" 
  comment                           = "media-origin-access-identity"
}

module "s3" {
  source                            = "./modules/s3"
  bucket_name                       = local.bucket_name
  allowed_origins                   = ["https://www.frontenddx.com", "https://frontenddx.com", "http://localhost:3000"]
  iam_arn                           = module.cloudfront_origin_access_identity.iam_arn
}

  resource "aws_s3_bucket_object" "default" {
  for_each                          = fileset("${path.module}/../../videos/", "*.mp4") # could use ** instead for a recursive search
    bucket                          = local.bucket_name
    key                             = "videos/${each.value}"
    source                          = "${path.module}/../../videos/${each.value}"
    etag                            = filemd5("${path.module}/../../videos/${each.value}")
}

module "waf" {
  source                            = "./modules/waf"
  name                              = "frontenddxwaf"
}

module "cloudfront" {
  source                            = "./modules/cloudfront"
  comment                           = "FrontendDX CDN"
  bucket_regional_domain_name       = module.s3.bucket_regional_domain_name
  cloudfront_access_identity_path   = module.cloudfront_origin_access_identity.cloudfront_access_identity_path
  bucket_id                         = module.s3.bucket_id
  waf_id                            = module.waf.waf_id
}