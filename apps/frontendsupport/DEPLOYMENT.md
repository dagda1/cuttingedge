# Frontendsupport Deployment Status

## ✅ Completed

- Docker container builds and runs locally
- Fixed Chrome/Puppeteer installation (needed `DOCKER_DEFAULT_PLATFORM=linux/amd64`)
- Fixed vite import error (needed `NODE_ENV=production`)
- Fixed server.mjs path issues
- Added fix-files script from website
- Container runs on port 3001

## 🔄 In Progress

- Push Docker image to ECR

## 📋 TODO

- Create Terraform configuration for AWS App Runner
- Configure App Runner service:
  - Point to ECR image: `313095418189.dkr.ecr.us-east-1.amazonaws.com/frontendsupport:latest`
  - Port: 3001
  - Environment variables:
    - `NODE_ENV=production`
    - `NPM_TOKEN` (if needed)
  - CPU: 0.25-1 vCPU
  - Memory: 0.5-2 GB
- Set up health checks
- Configure auto-scaling
- Add custom domain (optional)

## Commands

### Build and run locally

```bash
cd /Users/paulcowan/projects/cuttingedge/apps/frontendsupport
./bin/deploy.sh
```

### Push to ECR (uncomment in deploy.sh)

```bash
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 313095418189.dkr.ecr.us-east-1.amazonaws.com
docker tag frontendsupport:latest 313095418189.dkr.ecr.us-east-1.amazonaws.com/frontendsupport:latest
docker push 313095418189.dkr.ecr.us-east-1.amazonaws.com/frontendsupport:latest
```
