#!/bin/bash

source ./bin/env.sh

echo "building backend"

dcprod build

./bin/stop_production.sh
./bin/start_production.sh

 aws ecr get-login-password --region us-east-1  | docker login --username AWS --password-stdin 313095418189.dkr.ecr.us-east-1.amazonaws.com

docker tag website_nginx:latest 313095418189.dkr.ecr.us-east-1.amazonaws.com/website_nginx:latest
docker tag website_server:latest 313095418189.dkr.ecr.us-east-1.amazonaws.com/website_server:latest

docker push 313095418189.dkr.ecr.us-east-1.amazonaws.com/website_server:latest
docker push 313095418189.dkr.ecr.us-east-1.amazonaws.com/website_nginx:latest