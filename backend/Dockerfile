FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN apt-get update && apt-get install -y curl
COPY . .

FROM node:18-alpine
WORKDIR /app
COPY --from=build /app /app
CMD ["node", "app.js"]
