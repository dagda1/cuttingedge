#!/bin/bash

cp ../../yarn.lock .

source ./bin/env.sh

echo "building backend"

dcprod build

rm ./yarn.lock

./bin/stop_production.sh
./bin/start_production.sh
