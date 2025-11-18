# Use the latest Node.js LTS on Alpine (small, stable, secure)
FROM node:22-alpine

# Set work directory inside container
WORKDIR /usr/src/app

# Copy only dependency manifests first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Set environment (prod by default)
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

# Expose application port
EXPOSE 3000

# Build only in production mode
RUN if [ "$NODE_ENV" = "production" ]; then npm run build; fi

# Default command:
# prod → npm start
# dev  → npm run dev
CMD if [ "$NODE_ENV" = "production" ]; then npm start; else npm run dev; fi