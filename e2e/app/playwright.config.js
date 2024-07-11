import baseConfig from '../playwright.config';
import { defineConfig } from '@playwright/test';

export default defineConfig({
  ...baseConfig,
  // app specific overrides can go here
});
