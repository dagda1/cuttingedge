#!/bin/bash
set -euo pipefail

export DOCKER_DEFAULT_PLATFORM=linux/amd64

REGISTRY="$(aws sts get-caller-identity --query Account --output text).dkr.ecr.us-east-1.amazonaws.com"

docker build --build-arg CPPFLAGS="-DPNG_ARM_NEON_OPT=0" -t website_server:latest -f Dockerfile .

aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin "$REGISTRY"

docker tag website_server:latest "$REGISTRY/website_server:latest"

docker push "$REGISTRY/website_server:latest"

aws ecs update-service --cluster website --service website --region us-east-1 --force-new-deployment

rm -rf ./pruned
