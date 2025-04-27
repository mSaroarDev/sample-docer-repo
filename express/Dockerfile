
FROM node:22

WORKDIR /app

RUN npm install nodemon

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]