require('dotenv').config();
const fs = require('fs');
const path = require('path');

// Ensure the screenshots-output directory exists
const screenshotsDir = path.join(__dirname, 'screenshots-output');
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

const baseConfig = {
  "defaults": {
    // The maximum time allowed for the entire test run, in milliseconds
    "timeout": 240000,

    // WCAG 2.0 AA standard
    "standard": "WCAG2AA",

    // The accessibility testing runners to use; "axe" is a common choice
    "runners": ["axe"],

    // An array of rules to ignore during the accessibility test
    // pa11y reports false positive color-contrast issues https://github.com/pa11y/pa11y/issues/633
    "ignore": ["color-contrast"],

    // The number of tests to run concurrently
    "concurrency": 1,

    // Configuration for launching Chrome
    "chromeLaunchConfig": {
      // Ignore HTTPS errors (useful for testing environments with self-signed certificates)
      "ignoreHTTPSErrors": true,
      "args": [
        // Prevent chrome from crashing when using shared memory for large files/data
        "--disable-dev-shm-usage",
        // Disables Chrome's sandboxing for compatibility with environments where sandboxing might cause issues.
        "--no-sandbox"
      ]
    },

    // Actions to perform during the test
    "actions": [
      "wait for element body to be visible"
    ]
  },
  "urls": [process.env.BASE_URL]
};

module.exports = baseConfig;
