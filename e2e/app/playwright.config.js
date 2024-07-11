import { defineConfig, devices } from '@playwright/test';

import baseConfig from '../playwright.config';

export default defineConfig({
  ...baseConfig,

  projects: [
    ...baseConfig.projects,
    // add Safari for derived app config
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
