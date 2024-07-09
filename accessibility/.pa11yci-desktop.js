const baseConfig = require('./.pa11yci-base-config');

const desktopConfig = {
  ...baseConfig,
  "defaults": {
    ...baseConfig.defaults,
    "actions": [
      ...baseConfig.defaults.actions,
      "screen capture screenshots-output/desktop-view.png"
    ]
  }
};

module.exports = desktopConfig;
