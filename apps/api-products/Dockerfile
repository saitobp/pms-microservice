FROM node:17-alpine AS build

WORKDIR /app/
COPY ./package.json /app/package.json
COPY ./turbo.json /app/turbo.json
COPY ./apps/api-products/package.json /app/apps/api-products/package.json

COPY ./packages/tsconfig/ /app/packages/tsconfig/

RUN yarn install

WORKDIR /app/apps/api-products
COPY ./apps/api-products /app/apps/api-products
RUN yarn build
RUN npm install pm2
CMD npx pm2-runtime ./dist/server.js