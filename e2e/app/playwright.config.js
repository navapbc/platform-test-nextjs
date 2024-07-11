import baseConfig from '../playwright.config';
import { defineConfig } from '@playwright/test';

export default defineConfig({
  ...baseConfig,

  // app specific overrides can go here
  testDir: "./tests",
  use: {
    baseURL: process.env.BASE_URL,
  }
//   projects: [
//     ...baseConfig.projects,
//     {
//         name: "webkit",
//         use: { ...devices["Desktop Safari"] },
//       },
//   ]
});
