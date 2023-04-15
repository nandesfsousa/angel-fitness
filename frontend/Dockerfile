FROM node:16

RUN mkdir -p /app
WORKDIR /app

COPY . .

RUN yarn install && yarn build

EXPOSE 3000

ENTRYPOINT ["yarn", "start"]
