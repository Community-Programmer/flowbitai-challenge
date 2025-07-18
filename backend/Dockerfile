
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 5000
CMD ["sh", "-c", "node seed.js && npm run dev"]
