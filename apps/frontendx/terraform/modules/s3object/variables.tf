variable "bucket_id" {
  type    = string
}

variable "key" {
  type    = string
}

variable "acl" {
  type    = string
  default = "private"
}

variable "s3_source" {
  type    = string
  default  = "/dev/null"
}