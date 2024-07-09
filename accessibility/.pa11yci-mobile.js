const baseConfig = require('./.pa11yci-base-config');

const mobileConfig = {
  ...baseConfig,
  "defaults": {
    ...baseConfig.defaults,
    // Configuration for the viewport size and type
    "viewport": {
      "width": 390,
      "height": 844,
      "mobile": true
    },
    "actions": [
      ...baseConfig.defaults.actions,
      "screen capture screenshots-output/mobile-view.png"
    ]
  }
};

module.exports = mobileConfig;
