@app
frontend-rescue

@aws
runtime nodejs18.x
profile default
region us-east-1
architecture x86_64

@http
/*
  method any
  src server

@plugins
plugin-remix
  src plugin-remix.js

@static
prune true
