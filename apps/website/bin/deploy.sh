#!/bin/bash

source ./bin/env.sh

echo "building backend"

export DOCKER_DEFAULT_PLATFORM=linux/amd64

dcprod build --build-arg CPPFLAGS="-DPNG_ARM_NEON_OPT=0"

./bin/stop_production.sh
./bin/start_production.sh

# aws ecr get-login-password --region us-east-1  | docker login --username AWS --password-stdin 313095418189.dkr.ecr.us-east-1.amazonaws.com

# docker tag website_nginx:upgrade 313095418189.dkr.ecr.us-east-1.amazonaws.com/website_nginx:upgrade
# docker tag website_server:upgrade 313095418189.dkr.ecr.us-east-1.amazonaws.com/website_server:upgrade

# docker push 313095418189.dkr.ecr.us-east-1.amazonaws.com/website_server:upgrade
# docker push 313095418189.dkr.ecr.us-east-1.amazonaws.com/website_nginx:upgrade