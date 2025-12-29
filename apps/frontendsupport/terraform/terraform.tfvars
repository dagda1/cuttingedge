aws_region = "us-east-1"
app_name   = "frontendsupport"

ecr_repository_url = "313095418189.dkr.ecr.us-east-1.amazonaws.com/frontendsupport"
image_tag          = "latest"

port   = 3001
cpu    = "1 vCPU"
memory = "2 GB"

environment_variables = {
  NODE_ENV = "production"
}

custom_domain     = "frontendrescue.com"
route53_zone_name = "frontendrescue.com"
