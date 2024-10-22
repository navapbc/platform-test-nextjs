# Use the official Playwright image as a base
FROM mcr.microsoft.com/playwright:v1.48.1-noble

# Install make and any other necessary dependencies
RUN apt-get update && apt-get install -y make

# Set the working directory to the root of the project
WORKDIR /app

# Copy the entire project, including Makefile, into the Docker image
COPY . .

# Change directory to e2e for subsequent commands
WORKDIR /app/e2e

# Install the dependencies
RUN npm ci

# Install Playwright browsers and other necessary system dependencies
RUN npx playwright install --with-deps

# Change the working directory back to the root to run the Makefile
WORKDIR /app

# Define the default command to run the tests (you can override this in your CI or local runs)
CMD ["make", "e2e-test"]
