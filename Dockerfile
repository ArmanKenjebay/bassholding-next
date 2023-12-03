FROM node:latest
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install  --legacy-peer-deps 
RUN npm run build

EXPOSE 3000
CMD ["npm", "run","start"]
