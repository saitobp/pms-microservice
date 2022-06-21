FROM node:16-alpine AS build

# Monorepo setup
WORKDIR /app/
COPY ./package.json /app/package.json
COPY ./turbo.json /app/turbo.json

# Packages dependencies
COPY ./packages/api-tsconfig/package.json /app/packages/api-tsconfig/package.json
COPY ./packages/base-tsconfig/package.json /app/packages/base-tsconfig/package.json
COPY ./packages/base-prettierrc/package.json /app/packages/base-prettierrc/package.json

# Application dependency
COPY ./server/orders-api/package.json /app/server/orders-api/package.json

# Install all dependencies
RUN yarn install

# Packages
COPY ./packages/api-tsconfig /app/packages/api-tsconfig
COPY ./packages/base-tsconfig /app/packages/base-tsconfig
COPY ./packages/base-prettierrc /app/packages/base-prettierrc

# Application
WORKDIR /app/server/orders-api
COPY ./server/orders-api /app/server/orders-api

CMD yarn dev