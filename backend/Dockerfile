FROM node:16

RUN mkdir -p /app
WORKDIR /app

COPY . .

RUN yarn install

EXPOSE 3333

ENTRYPOINT ["yarn", "dev"]