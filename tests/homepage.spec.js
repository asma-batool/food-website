const { test, expect } = require('@playwright/test');

test('homepage has the correct title', async ({ page }) => {
  await page.goto('/index.html');
  await expect(page).toHaveTitle(/AISU/);
});

test('homepage shows the restaurant name in the header', async ({ page }) => {
  await page.goto('/index.html');
  var heading = page.locator('h1');
  await expect(heading).toHaveText('AISU');
});

test('homepage shows the hero tagline', async ({ page }) => {
  await page.goto('/index.html');
  var heroHeading = page.locator('.hero h2');
  await expect(heroHeading).toHaveText('Delicious Food, Cozy Atmosphere');
});

test('navigation has links to all four pages', async ({ page }) => {
  await page.goto('/index.html');
  var navLinks = page.locator('nav a');
  await expect(navLinks).toHaveCount(4);
});

test('clicking Menu link goes to the menu page', async ({ page }) => {
  await page.goto('/index.html');
  await page.locator('nav a', { hasText: 'Menu' }).click();
  await expect(page).toHaveURL(/menu\.html/);
});
