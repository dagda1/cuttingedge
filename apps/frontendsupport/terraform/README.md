# Frontendsupport Terraform Configuration

This Terraform configuration deploys the frontendsupport application to AWS App Runner.

## Prerequisites

- Terraform >= 1.5
- AWS CLI configured with appropriate credentials
- Docker image pushed to ECR at `313095418189.dkr.ecr.us-east-1.amazonaws.com/frontendsupport:latest`

## Usage

1. Initialize Terraform:

```bash
terraform init
```

2. Plan the deployment:

```bash
terraform plan -out=tfplan
```

3. Apply the configuration:

```bash
terraform apply tfplan
```

## Configuration

The main configurable options are:

- `cpu`: CPU units (0.25, 0.5, 1, 2, 4)
- `memory`: Memory allocation (0.5GB to 12GB)
- `environment_variables`: Environment variables for your application
- `image_tag`: Docker image tag (default: "latest")

## Outputs

After deployment, Terraform will output:

- `service_url`: The HTTPS URL for your App Runner service
- `service_id`: The service ID
- `service_arn`: The service ARN
- `service_status`: Current status of the service

## Updating the Service

To deploy a new version:

1. Build and push new Docker image to ECR
2. Run `terraform apply` (if using "latest" tag, App Runner will pull the new image)

For production, consider using specific version tags instead of "latest".

## Destroying the Service

To remove the App Runner service:

```bash
terraform destroy
```

## Notes

- App Runner automatically provides HTTPS endpoints
- Health checks are configured on the root path "/"
- Auto-deployment from ECR is disabled - you control when to update
- The IAM role is automatically created with ECR access permissions
