FROM node:18-alpine3.17

WORKDIR /app*

RUN npm i --only=production