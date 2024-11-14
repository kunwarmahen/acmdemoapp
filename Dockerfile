# Use the official Node.js image
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package and package-lock files (if any)
COPY package*.json ./

# Install dependencies (none needed for this simple app)
RUN npm install

# Copy the application code
COPY . .

# Expose the port that the app runs on
EXPOSE 3000

# Command to run the app
CMD [ "node", "app.js" ]
