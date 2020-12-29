# production dockerfile
FROM node:14.15

RUN rm -rf /cutting/

RUN mkdir -p /cutting/dist

WORKDIR /cutting/dist

COPY ./packages/website/dist .

RUN rm -rf /node_modules/@cutting

COPY ./packages/website/package.json .

ADD ./packages/website/.npmrc-deploy /root/.npmrc

RUN npm cache clean --force

RUN npm install --production

RUN mkdir /cutting/tmp
ADD node_modules ./tmp

RUN rm -rf ./tmp/@cutting

RUN cp -rf ./tmp/* ./node_modules

RUN rm -rf ./tmp

WORKDIR /cutting/