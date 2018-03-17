# production dockerfile
FROM node:9.2

RUN apt-get -qq update
RUN apt-get -qq -y install lsof

RUN rm -rf /cutting/

COPY ./packages/website/dist /cutting/

WORKDIR /cutting

RUN rm -rf /node_modules/@cutting

COPY ./packages/website/package.json ./packages/website/yarn.lock /cutting/

ADD ./packages/website/.npmrc-deploy /root/.npmrc

RUN yarn install --production

RUN mkdir /cutting/tmp
ADD node_modules /cutting/tmp

RUN rm -rf /cutting/tmp/@cutting

RUN cp -rf /cutting/tmp/* /cutting/node_modules

RUN rm -rf /cutting/tmp

#CMD yarn run serve