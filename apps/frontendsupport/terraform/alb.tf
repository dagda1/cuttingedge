resource "aws_lb" "frontendsupport" {
  name               = var.app_name
  internal           = false
  load_balancer_type = "application"
  security_groups    = [aws_security_group.alb.id]
  subnets            = data.aws_subnets.default.ids

  tags = {
    Name        = var.app_name
    Environment = "production"
    ManagedBy   = "terraform"
    App         = var.app_name
  }
}

resource "aws_lb_target_group" "frontendsupport" {
  name        = var.app_name
  port        = var.port
  protocol    = "HTTP"
  target_type = "ip"
  vpc_id      = data.aws_vpc.default.id

  health_check {
    path                = "/"
    protocol            = "HTTP"
    interval            = 30
    timeout             = 5
    healthy_threshold   = 2
    unhealthy_threshold = 3
    matcher             = "200-399"
  }

  tags = {
    Name        = var.app_name
    Environment = "production"
    ManagedBy   = "terraform"
    App         = var.app_name
  }
}

resource "aws_lb_listener" "http" {
  load_balancer_arn = aws_lb.frontendsupport.arn
  port              = 80
  protocol          = "HTTP"

  default_action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.frontendsupport.arn
  }
}
