FROM mhart/alpine-node:16

RUN mkdir -p /app

WORKDIR /app

COPY . .

EXPOSE 3000

ENTRYPOINT ["yarn", "start"]
