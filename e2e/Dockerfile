# Use the official Playwright image as a base
FROM mcr.microsoft.com/playwright:v1.48.1-noble

# Install make and any other necessary dependencies
RUN apt-get update && apt-get install -y make

# Set the working directory to the root of the project inside the Docker container
WORKDIR /

# Copy the required files and directories from the root of the project into the Docker container
COPY Makefile /Makefile
COPY e2e /e2e

# Run the Makefile target to set up end-to-end tests for CI
RUN make e2e-setup-ci

# Change the working directory back to the root to run the Makefile
WORKDIR /

# Default command when running the container
CMD ["make", "e2e-test"]
