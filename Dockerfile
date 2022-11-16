FROM node:18-alpine as build

RUN apk add --no-cache bash

WORKDIR /app

ENV NODE_ENV production

COPY package.json /app/
COPY .yarn /app/.yarn
COPY .yarnrc.yml /app/
COPY yarn.lock /app/

RUN yarn workspaces focus -A --production

FROM gcr.io/distroless/nodejs:18 as runtime

WORKDIR /app

COPY --from=build /app/package.json /app/
COPY --from=build /app/node_modules /app/node_modules
COPY next.config.js /app/
COPY .next /app/.next/
COPY .env.production /app
COPY public /app/public/

EXPOSE 3000

CMD ["node_modules/next/dist/bin/next", "start"]
