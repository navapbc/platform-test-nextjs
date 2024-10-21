# Use the official Playwright image as a base
FROM mcr.microsoft.com/playwright:v1.48.1-noble

# Install make and any other necessary dependencies
RUN apt-get update && apt-get install -y make

# Set the working directory
WORKDIR /app

# Copy your package.json and lock files to install dependencies
COPY package.json package-lock.json ./

# Install only the dependencies from package.json (ensure lock file exists for npm ci)
RUN npm ci

# Copy the rest of your application code
COPY . .

# Define the command to run the tests (you can override this in your CI or local runs)
CMD ["make", "e2e-test"]
