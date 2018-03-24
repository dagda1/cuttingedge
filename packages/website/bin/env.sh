export DOCKER_CONFIG_PROD=${DOCKER_CONFIG_PROD:-docker-compose.yml}
export DOCKER_CONFIG_DEV=${DOCKER_CONFIG_DEV:-docker-compose.development.yml}


dcdev() {
    NODE_ENV=production docker-compose -f $DOCKER_CONFIG_DEV "$@"
}

dcprod() {
    NODE_ENV=production docker-compose -f $DOCKER_CONFIG_PROD "$@"
}