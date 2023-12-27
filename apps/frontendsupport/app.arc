@app
frontend-rescue

@http
/*
  method any
  src server

@static

@aws
runtime nodejs18.x
profile default
region us-east-1
architecture x86_64

@plugins
set-env src plugin-remix.js