# production dockerfile
FROM node:9.2

# add code
COPY ./packages/website/dist /cutting

WORKDIR /cutting

COPY package.json yarn.lock /cutting/
COPY ./node_modules /cutting/

CMD npm run serve