# Use an official Node.js runtime as a base image
FROM node:20.3.1
# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

COPY .env ./
# Copy the application code to the working directory
COPY . .


# Expose the port on which the application will run
EXPOSE 7000

# Define the command to run the application
CMD ["npm", "start"]
