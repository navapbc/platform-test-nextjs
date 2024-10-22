# Use the official Playwright image as a base
FROM mcr.microsoft.com/playwright:v1.48.1-noble

# Install make and any other necessary dependencies
RUN apt-get update && apt-get install -y make

# Set the working directory to the root of the project inside the Docker container
WORKDIR /app

# Copy the required files and directories from the root of the project
COPY ../Makefile /app/Makefile
COPY ../app /app/app
COPY ../e2e /app/e2e

# Install the dependencies inside the /e2e directory
WORKDIR /app/e2e
RUN npm ci

# Install Playwright browsers and other necessary system dependencies
RUN npx playwright install --with-deps

# Change the working directory back to the root to run the Makefile
WORKDIR /app

# Define the default command to run the tests
# CMD ["make", "e2e-test"]
