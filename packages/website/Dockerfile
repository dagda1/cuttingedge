# production dockerfile
FROM node:9.2

RUN apt-get -qq update
RUN apt-get -qq -y install lsof

RUN rm -rf /cutting/

# add code
COPY ./packages/website/dist /cutting/

WORKDIR /cutting

COPY ./packages/website/package.json ./packages/website/yarn.lock /cutting/

RUN mkdir /cutting/node_modules
ADD node_modules /cutting/node_modules

RUN ls -a /cutting
RUN ls -a /cutting/node_modules

CMD yarn run serve