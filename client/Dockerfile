FROM node:alpine

WORKDIR /usr/src/app

COPY ./package.json ./

RUN yarn install

COPY . .

EXPOSE 5000

CMD [ "yarn", "dev" ]