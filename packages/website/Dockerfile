# production dockerfile
FROM node:9.2

# add code
COPY ./dist /cutting

WORKDIR /cutting

COPY package.json yarn.lock /cutting/
RUN BUILD_ONLY=true yarn install --pure-lockfile && yarn cache clean --production

CMD npm run serve