#!/bin/bash

rm -rf ./pruned

pnpm --filter @cutting/frontend-support deploy --prod pruned

find "./pruned" -type f -name '*.map' -exec rm {} +