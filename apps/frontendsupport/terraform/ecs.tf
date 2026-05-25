resource "aws_iam_role" "ecs_task_execution" {
  name = "${var.app_name}-ecs-task-execution"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "ecs-tasks.amazonaws.com"
        }
      }
    ]
  })

  tags = {
    Name        = "${var.app_name}-ecs-task-execution"
    Environment = "production"
    ManagedBy   = "terraform"
    App         = var.app_name
  }
}

resource "aws_iam_role_policy_attachment" "ecs_task_execution" {
  role       = aws_iam_role.ecs_task_execution.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

resource "aws_cloudwatch_log_group" "frontendsupport" {
  name              = "/ecs/${var.app_name}"
  retention_in_days = 30

  tags = {
    Name        = var.app_name
    Environment = "production"
    ManagedBy   = "terraform"
    App         = var.app_name
  }
}

resource "aws_ecs_cluster" "frontendsupport" {
  name = var.app_name

  setting {
    name  = "containerInsights"
    value = "enabled"
  }

  tags = {
    Name        = var.app_name
    Environment = "production"
    ManagedBy   = "terraform"
    App         = var.app_name
  }
}

resource "aws_ecs_task_definition" "frontendsupport" {
  family                   = var.app_name
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  cpu                      = "1024"
  memory                   = "2048"
  execution_role_arn       = aws_iam_role.ecs_task_execution.arn

  container_definitions = jsonencode([
    {
      name      = var.app_name
      image     = "${var.ecr_repository_url}:${var.image_tag}"
      essential = true

      portMappings = [
        {
          containerPort = var.port
          protocol      = "tcp"
        }
      ]

      environment = [
        for k, v in var.environment_variables : {
          name  = k
          value = v
        }
      ]

      logConfiguration = {
        logDriver = "awslogs"
        options = {
          "awslogs-group"         = aws_cloudwatch_log_group.frontendsupport.name
          "awslogs-region"        = var.aws_region
          "awslogs-stream-prefix" = "ecs"
        }
      }
    }
  ])

  tags = {
    Name        = var.app_name
    Environment = "production"
    ManagedBy   = "terraform"
    App         = var.app_name
  }
}

resource "aws_ecs_service" "frontendsupport" {
  name            = var.app_name
  cluster         = aws_ecs_cluster.frontendsupport.id
  task_definition = aws_ecs_task_definition.frontendsupport.arn
  desired_count   = 1
  launch_type     = "FARGATE"

  network_configuration {
    subnets          = data.aws_subnets.default.ids
    security_groups  = [aws_security_group.task.id]
    assign_public_ip = true
  }

  load_balancer {
    target_group_arn = aws_lb_target_group.frontendsupport.arn
    container_name   = var.app_name
    container_port   = var.port
  }

  depends_on = [aws_lb_listener.http]

  tags = {
    Name        = var.app_name
    Environment = "production"
    ManagedBy   = "terraform"
    App         = var.app_name
  }
}
