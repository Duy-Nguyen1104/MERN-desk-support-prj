FROM node:lts-alpine
WORKDIR /app
COPY ../package*.json ./
RUN npm install
# Copy backend files
COPY . .
EXPOSE 5000
CMD ["npm", "start"]