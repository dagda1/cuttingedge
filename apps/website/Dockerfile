# production dockerfile
FROM node:18.12.0

ARG NPM_TOKEN
ENV NPM_TOKEN $NPM_TOKEN

RUN echo $NPM_TOKEN

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    autoconf \
    automake \
    g++ \
    libpng-dev \
    make\
    nasm 

RUN npm install -g pnpm@8.6.5

RUN rm -rf /cutting/

WORKDIR /cutting/

COPY ./.npmrc .

COPY ./apps/website/pruned ./dist

RUN cat ./dist/package.json

RUN sed -i -e s/'..\/..\/package.json'/'..\/..\/..\/package.json'/g ./dist/package.json
RUN sed -i -e s/'..\/..\/tsconfig-base.json'/'..\/..\/..\/tsconfig-base.json'/g ./dist/tsconfig.json


RUN echo -n "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > .npmrc-deploy

WORKDIR /cutting/dist