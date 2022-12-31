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

RUN npm install -g pnpm@7.21.0

RUN rm -rf /cutting/

RUN mkdir -p /cutting/dist

WORKDIR /cutting/dist

COPY ./.npmrc .

COPY ./apps/website/dist .

COPY ./apps/website/package.json .

RUN pnpm --filter @cutting/website --prod deploy pruned

RUN sed -i -e s/'..\/..\/package.json'/'..\/..\/..\/package.json'/g ./pruned/package.json
RUN sed -i -e s/'..\/..\/tsconfig-base.json'/'..\/..\/..\/tsconfig-base.json'/g ./pruned/tsconfig.json

COPY ./apps/website/pruned .

RUN echo -n "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > .npmrc-deploy

WORKDIR /cutting/