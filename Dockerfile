# Base image
FROM node:16-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose port 
EXPOSE 3000

# Start app on container startup
CMD ["node","index"]