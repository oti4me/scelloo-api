FROM node:12-alpine
LABEL maintainer="oti4me@gmail.com"

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

RUN chown -R node:node .

USER node

COPY --chown=node:node . .

RUN node_modules/.bin/tsc

EXPOSE 3001

CMD [ "node", "./dist/src/server.js" ]