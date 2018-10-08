# production dockerfile
FROM node:9.2

RUN rm -rf /cutting/

RUN mkdir -p /cutting/dist

COPY ./packages/website/dist /cutting/dist

WORKDIR /cutting/dist

RUN rm -rf /node_modules/@cutting

COPY ./packages/website/package.json /cutting/dist

ADD ./packages/website/.npmrc-deploy /root/.npmrc

RUN yarn install --production --network-timeout 1000000

RUN mkdir /cutting/tmp
ADD node_modules /cutting/dist/tmp

RUN rm -rf /cutting/dist/tmp/@cutting

RUN cp -rf /cutting/dist/tmp/* /cutting/dist/node_modules

RUN rm -rf /cutting/dist/tmp

WORKDIR /cutting/