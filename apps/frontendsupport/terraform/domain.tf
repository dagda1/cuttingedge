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

resource "aws_acm_certificate" "frontendsupport" {
  domain_name       = var.custom_domain
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }

  tags = {
    Name        = var.app_name
    Environment = "production"
    ManagedBy   = "terraform"
    App         = var.app_name
  }
}

resource "aws_route53_record" "cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.frontendsupport.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = data.aws_route53_zone.main.zone_id
}

resource "aws_acm_certificate_validation" "frontendsupport" {
  certificate_arn         = aws_acm_certificate.frontendsupport.arn
  validation_record_fqdns = [for r in aws_route53_record.cert_validation : r.fqdn]
}
