variable "aws_region" {
  description = "AWS region for deployment"
  type        = string
  default     = "us-east-1"
}

variable "app_name" {
  description = "Name of the App Runner service"
  type        = string
  default     = "frontendsupport"
}

variable "ecr_repository_url" {
  description = "ECR repository URL"
  type        = string
  default     = "313095418189.dkr.ecr.us-east-1.amazonaws.com/frontendsupport"
}

variable "image_tag" {
  description = "Docker image tag"
  type        = string
  default     = "latest"
}

variable "port" {
  description = "Port the application listens on"
  type        = number
  default     = 3001
}

variable "cpu" {
  description = "CPU units for the service (0.25, 0.5, 1, 2, 4)"
  type        = string
  default     = "1"
}

variable "memory" {
  description = "Memory for the service (0.5GB, 1GB, 2GB, 3GB, 4GB, 6GB, 8GB, 10GB, 12GB)"
  type        = string
  default     = "2GB"
}

variable "environment_variables" {
  description = "Environment variables for the application"
  type        = map(string)
  default = {
    NODE_ENV = "production"
  }
  sensitive = true
}

variable "custom_domain" {
  description = "Custom domain for the App Runner service"
  type        = string
  default     = "frontendrescue.com"
}

variable "route53_zone_name" {
  description = "Route 53 hosted zone name"
  type        = string
  default     = "frontendrescue.com"
}
