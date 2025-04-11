# Support Desk Application

A full-stack support ticket management system built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

### User Authentication
- Registration and login with JWT authentication
- Protected routes for authenticated users

### Ticket Management
- Create support tickets for various Apple products
- View ticket listings and details
- Add notes to existing tickets
- Close tickets when issues are resolved

### Staff Notes
- Support for staff and user notes with different styling
- Timestamps for tracking conversation history

## Getting Started

### Prerequisites
- Node.js & npm
- MongoDB
- Docker & Docker Compose (for production)

### Local Development
1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd support-desk-proj
   ```

2. **Install dependencies:**
   ```sh
   npm install
   cd frontend && npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory with:
   ```env
   NODE_ENV=development
   PORT=5000
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret>
   ```

4. **Run the development server:**
   ```sh
   npm run dev
   ```

## Production Deployment

### Build and deploy with Docker Compose
```sh
docker-compose up -d
