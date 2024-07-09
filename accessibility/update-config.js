const fs = require('fs');
const path = require('path');

// Path to the configuration file
const configPath = process.argv[2]; // Pass the config path as the first argument

// Load the configuration file
const config = require(configPath);

// Get the new service endpoint from environment variables or arguments
const newUrl = process.env.SERVICE_ENDPOINT || process.argv[3]; // Pass the service endpoint as the second argument

if (!newUrl) {
  console.error('SERVICE_ENDPOINT is not defined.');
  process.exit(1);
}

// Update the urls field
config.urls = [newUrl];

// Write the updated configuration back to the file
const configContent = 'module.exports = ' + JSON.stringify(config, null, 2) + ';\n';
fs.writeFileSync(configPath, configContent);

console.log('Configuration updated successfully.');
