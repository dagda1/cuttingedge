#!/bin/bash

cp ../../package.jsom.lock .

source ./bin/env.sh

echo "building backend"

dcprod build

rm ./package.jsom.lock

./bin/stop_production.sh
./bin/start_production.sh

$(aws ecr get-login --no-include-email --region us-east-1)

docker tag website_nginx:latest 313095418189.dkr.ecr.us-east-1.amazonaws.com/website_nginx:latest
docker tag website_server:latest 313095418189.dkr.ecr.us-east-1.amazonaws.com/website_server:latest

docker push 313095418189.dkr.ecr.us-east-1.amazonaws.com/website_server:latest
docker push 313095418189.dkr.ecr.us-east-1.amazonaws.com/website_nginx:latest