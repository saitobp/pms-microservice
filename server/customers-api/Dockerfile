FROM node:16-alpine AS build

# Monorepo setup
WORKDIR /app/
COPY ./package.json /app/package.json
COPY ./turbo.json /app/turbo.json

# Packages dependencies
COPY ./packages/api-tsconfig/package.json /app/packages/api-tsconfig/package.json
COPY ./packages/babel-config-api/package.json /app/packages/babel-config-api/package.json
COPY ./packages/base-prettierrc/package.json /app/packages/base-prettierrc/package.json
COPY ./packages/base-tsconfig/package.json /app/packages/base-tsconfig/package.json
COPY ./packages/eslint-config-base/package.json /app/packages/eslint-config-base/package.json

# Application dependency
COPY ./server/customers-api/package.json /app/server/customers-api/package.json

# Install all dependencies
RUN yarn install

# Packages
COPY ./packages/api-tsconfig /app/packages/api-tsconfig
COPY ./packages/babel-config-api /app/packages/babel-config-api
COPY ./packages/base-prettierrc /app/packages/base-prettierrc
COPY ./packages/base-tsconfig /app/packages/base-tsconfig
COPY ./packages/eslint-config-base /app/packages/eslint-config-base

# Application
WORKDIR /app/server/customers-api
COPY ./server/customers-api /app/server/customers-api

# Run server
RUN yarn build
RUN yarn add pm2
CMD npx pm2-runtime ./dist/server.js