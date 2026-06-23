const { test, expect } = require('@playwright/test');

test('menu should be visible', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const menu = await page.locator('nav');
    await expect(menu).toBeVisible();
});

test('menu items should be clickable', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const menuItem = await page.locator('nav a').first();
    await menuItem.click();
    await expect(page).toHaveURL(/.*desired-url/);
});