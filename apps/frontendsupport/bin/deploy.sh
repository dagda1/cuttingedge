#!/bin/bash

export DOCKER_DEFAULT_PLATFORM=linux/amd64

docker build --build-arg CPPFLAGS="-DPNG_ARM_NEON_OPT=0" -t frontendsupport:latest -f Dockerfile .

aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 313095418189.dkr.ecr.us-east-1.amazonaws.com

docker tag frontendsupport:latest 313095418189.dkr.ecr.us-east-1.amazonaws.com/frontendsupport:latest

docker push 313095418189.dkr.ecr.us-east-1.amazonaws.com/frontendsupport:latest

SERVICE_ARN=$(aws apprunner list-services --query "ServiceSummaryList[?ServiceName=='frontendsupport'].ServiceArn | [0]" --output text)
aws apprunner start-deployment --service-arn $SERVICE_ARN

rm -rf ./pruned
