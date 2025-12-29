output "service_url" {
  description = "The URL of the App Runner service"
  value       = aws_apprunner_service.frontendsupport.service_url
}

output "service_id" {
  description = "The ID of the App Runner service"
  value       = aws_apprunner_service.frontendsupport.id
}

output "service_arn" {
  description = "The ARN of the App Runner service"
  value       = aws_apprunner_service.frontendsupport.arn
}

output "service_status" {
  description = "The status of the App Runner service"
  value       = aws_apprunner_service.frontendsupport.status
}

output "custom_domain_status" {
  description = "The status of the custom domain association"
  value       = try(aws_apprunner_custom_domain_association.frontendsupport.status, "Not configured")
}

output "validation_records" {
  description = "DNS validation records for custom domain"
  value       = try(aws_apprunner_custom_domain_association.frontendsupport.certificate_validation_records, [])
}
