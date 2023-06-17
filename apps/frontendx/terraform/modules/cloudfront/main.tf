resource "aws_cloudfront_distribution" "default" {
  comment = var.comment
  enabled = true

  web_acl_id = var.waf_id
  is_ipv6_enabled = true

  origin {
    domain_name = var.bucket_regional_domain_name
    origin_id   = var.bucket_id

    s3_origin_config {
      origin_access_identity = var.cloudfront_access_identity_path
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  default_cache_behavior {
    allowed_methods = ["GET", "HEAD", "OPTIONS"]
    cached_methods  = ["GET", "HEAD", "OPTIONS"]
    compress        = true
    default_ttl     = 30 * 24 * 60 * 60

    forwarded_values {
      query_string = true
      headers      = ["Origin"]

      cookies {
        forward = "none"
      }
    }

    max_ttl                = 30 * 24 * 60 * 60 
    min_ttl                = 0
    target_origin_id       = var.bucket_id
    viewer_protocol_policy = var.viewer_protocol_policy

    # lambda_function_association {
    #   event_type   = "origin-request"
    #   lambda_arn   = aws_lambda_function.origin_request_lambda.qualified_arn
    #   include_body = false
    # }

    # lambda_function_association {
    #   event_type   = "origin-response"
    #   lambda_arn   = aws_lambda_function.origin_response_lambda.qualified_arn
    #   include_body = false
    # }

    # lambda_function_association {
    #   event_type   = "viewer-request"
    #   lambda_arn   = aws_lambda_function.viewer_request_lambda.qualified_arn
    #   include_body = false
    # }
  }

  provisioner "local-exec" {
    command = "aws cloudfront create-invalidation --distribution-id ${self.id} --paths '/*'"
  }
}
