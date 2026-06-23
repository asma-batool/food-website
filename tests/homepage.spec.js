const { test, expect } = require('@playwright/test');

test('homepage has title', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page).toHaveTitle(/Home/);
});

test('homepage has welcome message', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const welcomeMessage = await page.locator('h1');
    await expect(welcomeMessage).toHaveText('Welcome to Our Website!');
});