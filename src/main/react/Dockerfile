# Dockerfile
FROM node:18.18.2
WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . ./
RUN yarn run build
