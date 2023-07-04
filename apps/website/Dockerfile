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
    nasm \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libatspi2.0-0 \
    libcups2 \
    libdbus-1-3 \
    libdrm2 \
    libgbm1 \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    libwayland-client0 \
    libxcomposite1 \
    libxdamage1 \
    libxfixes3 \
    libxkbcommon0 \
    libxrandr2 \
    xdg-utils \
    libu2f-udev \
    libvulkan1

RUN curl -LO  https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
RUN apt-get install -y ./google-chrome-stable_current_amd64.deb
RUN rm google-chrome-stable_current_amd64.deb
# Check chrome version
RUN echo "Chrome: " && google-chrome --version

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