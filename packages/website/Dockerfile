# production dockerfile
FROM node:10.3

RUN rm -rf /cutting/

RUN mkdir -p /cutting/dist

WORKDIR /cutting/dist

COPY ./packages/website/dist .

RUN rm -rf /node_modules/@cutting

COPY ./packages/website/package.json .

ADD ./packages/website/.npmrc-deploy /root/.npmrc

RUN yarn install --production --network-timeout 1000000

RUN mkdir /cutting/tmp
ADD node_modules ./tmp

RUN rm -rf ./tmp/@cutting

RUN cp -rf ./tmp/* ./node_modules

RUN rm -rf ./tmp

WORKDIR /cutting/