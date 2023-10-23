#!/bin/bash

NPM_TOKEN=$1
GSAP_TOKEN=$2

cat << EOF > "$HOME/.npmrc"
always-auth=true
email=paul.cowan@cutting.scot
//registry.npmjs.org/:_authToken=$NPM_TOKEN
//npm.greensock.com/:_authToken=$GSAP_TOKEN
@gsap:registry=https://npm.greensock.com
EOF