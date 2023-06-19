variable "bucket_name" {
  type    = string
}

variable "allowed_origins" {
  type    = list(string)
}

variable "allowed_headers" {
  type    = list(string)
  default = ["*"]
}

variable "allowed_methods" {
  type    = list(string)
  default = ["GET", "HEAD"]
}

variable  "max_age_seconds" {
  type    = number
  default = 86400
}

variable "iam_arn" {
  type    = string
}