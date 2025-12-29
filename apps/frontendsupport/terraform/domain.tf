resource "aws_apprunner_custom_domain_association" "frontendsupport" {
  domain_name = var.custom_domain
  service_arn = aws_apprunner_service.frontendsupport.arn

  enable_www_subdomain = false
}

data "aws_route53_zone" "main" {
  name = var.route53_zone_name
}

# Validation records need to be added manually after custom domain association is created
# Check the AWS App Runner console for the validation CNAME records

# App Runner custom domain will handle the DNS after validation
# The service URL will be automatically configured once validation completes
