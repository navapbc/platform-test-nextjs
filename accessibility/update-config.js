const fs = require('fs');
const path = require('path');

/**
 * Update the URLs in the pa11y-ci configuration file.
 *
 * This script takes two parameters:
 * 1. The path to the pa11y-ci configuration file (relative to the script).
 * 2. The new service endpoint URL to be added to the configuration.
 *
 * Example usage:
 * node update-config.js ./path/to/config.js http://example.com
 */

// Path to the configuration file
const configPath = path.resolve(__dirname, process.argv[2]);

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
