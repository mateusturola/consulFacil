FROM node:alpine

WORKDIR /usr/src/app

COPY ./package.json ./

COPY prisma ./prisma/

COPY .env ./

RUN yarn install

RUN yarn prisma generate

COPY . .

EXPOSE 3001

CMD [ "yarn", "dev" ] 