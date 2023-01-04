FROM node:17-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

COPY . .

EXPOSE 55623

CMD ["node", "https_server.js"]

