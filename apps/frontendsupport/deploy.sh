#!/bin/bash

rm -rf ./pruned

pnpm --filter @cutting/frontend-support deploy pruned

find "./pruned" -type f -name '*.map' -exec rm {} +