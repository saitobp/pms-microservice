FROM node:16-alpine AS build

WORKDIR /app/
COPY ./package.json /app/package.json
COPY ./turbo.json /app/turbo.json
COPY ./apps/api-customers/package.json /app/apps/api-customers/package.json

RUN yarn install

WORKDIR /app/apps/api-customers
COPY ./apps/api-customers /app/apps/api-customers

RUN yarn build

FROM node:16-alpine AS prod

WORKDIR /app/
COPY --from=build /app/apps/api-customers/package.json /app/package.json

RUN npm install --only=prod --force
RUN npm install pm2

COPY --from=build /app/apps/api-customers/dist /app/src

CMD npx pm2-runtime ./src/server.js
