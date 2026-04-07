FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Azure utilise le port 8080 pour les conteneurs
EXPOSE 8080

CMD ["node", "index.js"]