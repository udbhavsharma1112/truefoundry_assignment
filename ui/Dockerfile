# Use an official Node.js runtime as a base image
FROM node:lts-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the application code to the working directory
COPY . .

# Expose the port on which the application will run (default is 3000 for React)
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "start"]
