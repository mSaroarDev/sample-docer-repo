FROM node:22

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

EXPOSE 3002

CMD ["npm", "run", "start-watch"]
