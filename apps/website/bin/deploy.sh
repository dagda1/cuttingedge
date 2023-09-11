#!/bin/bash

source ./bin/env.sh

echo "building backend"

export DOCKER_DEFAULT_PLATFORM=linux/amd64

dcprod build --build-arg CPPFLAGS="-DPNG_ARM_NEON_OPT=0"

./bin/stop_production.sh
./bin/start_production.sh

aws ecr get-login-password --region us-east-1  | docker login --username AWS --password-stdin 313095418189.dkr.ecr.us-east-1.amazonaws.com

docker tag website-nginx:latest 313095418189.dkr.ecr.us-east-1.amazonaws.com/website_nginx:latest
docker tag website-server:latest 313095418189.dkr.ecr.us-east-1.amazonaws.com/website_server:latest

docker push 313095418189.dkr.ecr.us-east-1.amazonaws.com/website_server:latest
docker push 313095418189.dkr.ecr.us-east-1.amazonaws.com/website_nginx:latest

rm -rf ./pruned