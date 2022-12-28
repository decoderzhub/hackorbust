FROM node:17-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . .

EXPOSE 4000

CMD ["node", "app.js"]

