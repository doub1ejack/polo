# Build a Docker image for JSON Server
# - not really necessary because it is so simple to run JSON Server locally
# - but it was a good, quick docker refresher


# Use Node.js LTS version as the base image
FROM node:lts

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install JSON Server and any other dependencies
RUN npm install -g json-server

# Copy the JSON file with mock data to the working directory
COPY db.json ./

# Expose the port JSON Server will run on
EXPOSE 4000

# Command to run JSON Server with file watching enabled
CMD ["json-server", "--watch", "db.json", "--host", "0.0.0.0", "--port", "4000", "--watch"]
