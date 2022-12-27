FROM node:17-alpine

WORKDIR /app

COPY . .

RUN npm install

COPY . .

EXPOSE 4000

CMD ["node", "app.js"]

