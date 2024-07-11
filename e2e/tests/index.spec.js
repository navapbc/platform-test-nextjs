const { test, expect } = require('@playwright/test');

test.describe('Generic Webpage Tests', () => {
  test('should load the webpage and verify title', async ({ page }) => {
    await page.goto('/');
    const title = await page.title();
    // Modify this expectation based on your actual page title
    await expect(response.status()).toBe(200);
  });

  test('should take a screenshot of the webpage', async ({ page }) => {
    await page.goto('/');
    await page.screenshot({ path: 'example-screenshot.png', fullPage: true });
  });

    // Example test of finding a an html element on the index/home page
//   test('should check for an element to be visible', async ({ page }) => {
//     await page.goto('/');
//     const element = page.locator('h1');
//     await expect(element).toBeVisible();
//   });


});
