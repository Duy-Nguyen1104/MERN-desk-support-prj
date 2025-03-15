# Frontend Build stage
FROM node:lts-alpine as builder
ENV NODE_ENV=production
WORKDIR /app
COPY frontend/package*.json ./
RUN npm install 
COPY frontend/ ./
RUN npm run build

# Production stage with Nginx
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
