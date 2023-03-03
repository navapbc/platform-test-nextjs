# Use the Active LTS version of Node.
# See https://nodejs.org/en/about/releases/
FROM node:16-alpine
# Keep container packages up-to-date.
# -U runs both apk update and apk upgrade.
RUN apk -U upgrade


# setup user stuff
ARG RUN_UID
ARG RUN_USER

# The following logic creates the RUN_USER home directory and the directory where
# we will be storing the application in the image. This runs when the user is not root
RUN : "${RUN_USER:?RUN_USER and RUN_UID need to be set and non-empty.}" && \
  [ "${RUN_USER}" = "root" ] || \
  (useradd -mU --home "/home/${RUN_USER}" --uid ${RUN_UID} "${RUN_USER}" \
  && mkdir /app \
  && chown -R ${RUN_UID} "/home/${RUN_USER}" /app)

USER ${RUN_USER}


# Copy just the package data to the working directory.
COPY package-lock.json /srv
COPY package.json /srv
WORKDIR /srv
# Copy all the remaining application files (ignoring files in .dockerignore) to the working directory.
COPY . /srv
# Install application dependencies.
RUN npm ci
# Build the application.
RUN npm run build
# Run the application.
CMD ["npm", "run", "start"]
