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

output "cloudfront_domain_name" {
  description = "Default CloudFront domain — test the new stack here before the DNS flip"
  value       = aws_cloudfront_distribution.frontendsupport.domain_name
}

output "alb_dns_name" {
  description = "ALB DNS name (CloudFront origin)"
  value       = aws_lb.frontendsupport.dns_name
}

output "ecs_cluster_name" {
  description = "ECS cluster name for force-new-deployment commands"
  value       = aws_ecs_cluster.frontendsupport.name
}

output "ecs_service_name" {
  description = "ECS service name for force-new-deployment commands"
  value       = aws_ecs_service.frontendsupport.name
}
