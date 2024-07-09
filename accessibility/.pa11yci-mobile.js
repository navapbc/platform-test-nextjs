module.exports = {
    "defaults": {
      // The maximum time allowed for the entire test run, in milliseconds
      "timeout": 240000,

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

      // Configuration for the viewport size and type
      "viewport": {
        "width": 390,
        "height": 844,
        "mobile": true ,

      // Actions to perform during the test
      "actions": [
        "wait for element body to be visible",
        "wait for document to be ready",
        "screen capture screenshots-output/mobile-view.png",
      ]
    }
  }
}
