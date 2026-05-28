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
