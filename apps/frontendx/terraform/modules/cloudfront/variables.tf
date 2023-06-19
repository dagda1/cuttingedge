variable "comment" {
  type    = string
}

variable "bucket_regional_domain_name" {
  type    = string
}

variable "cloudfront_access_identity_path" {
  type    = string
}

variable "bucket_id" {
  type    = string
}

variable "viewer_protocol_policy" {
  type    = string
  default = "redirect-to-https"
}

variable "default_certificate" {
  default = true
}

variable "waf_id" {
  type    = string
}