module.exports = {
    "defaults": {
      "timeout": 240000,
      "runners": ["axe"],
      "ignore": ["color-contrast"],
      "concurrency": 1,
      "chromeLaunchConfig": {
        "ignoreHTTPSErrors": true,
        "args": ["--disable-dev-shm-usage", "--no-sandbox"]
      }
    }
  };
