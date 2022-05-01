# production dockerfile
FROM node:14.19.1

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

RUN npm install -g pnpm

RUN echo ---------
RUN echo $CPPFLAGS
RUN echo ---------
RUN npm install optipng-bin

RUN rm -rf /cutting/

RUN mkdir -p /cutting/dist

WORKDIR /cutting/dist

COPY ./apps/website/dist .

COPY ./apps/website/package.json .
COPY ./pnpm-lock.yaml ./

RUN pnpm fetch --loglevel=debug --aggregate-output --use-stderr

RUN echo -n "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > .npmrc-deploy

RUN pnpm install -r --offline --prod

WORKDIR /cutting/