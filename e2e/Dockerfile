# Use the official Playwright image as a base
FROM mcr.microsoft.com/playwright:v1.48.1-noble

# Install make and any other necessary dependencies
RUN apt-get update && apt-get install -y make

# Set the working directory to the root of the project inside the Docker container
WORKDIR /

# Setup npm install layer that can be cached
COPY Makefile /Makefile
COPY e2e/package.json e2e/package-lock.json /e2e/

RUN make e2e-setup-ci
# Copy entire e2e folder over
COPY e2e /e2e

# Change the working directory back to the root to run Makefile commands
WORKDIR /

COPY e2e/run-e2e-container-test /e2e/run-e2e-container-test

RUN chmod +x /run-e2e-container-test

# Default command when running the container
CMD ["/e2e/run-e2e-container-test"]
