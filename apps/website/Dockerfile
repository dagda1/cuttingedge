# production dockerfile
FROM node:16.15.1

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

RUN npm install -g pnpm@7.10.0

RUN rm -rf /cutting/

RUN mkdir -p /cutting/dist

WORKDIR /cutting/dist

COPY ./apps/website/dist .

COPY ./apps/website/package.json .

RUN pnpx @pnpm/make-dedicated-lockfile@latest

RUN echo -n "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > .npmrc-deploy

RUN pnpm install --prod

WORKDIR /cutting/