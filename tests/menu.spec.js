const { test, expect } = require('@playwright/test');

test('menu page loads with a visible navigation', async ({ page }) => {
  await page.goto('/menu.html');
  var nav = page.locator('nav');
  await expect(nav).toBeVisible();
});

test('menu page shows all filter buttons', async ({ page }) => {
  await page.goto('/menu.html');
  await expect(page.locator('.filter-buttons button', { hasText: 'All' })).toBeVisible();
  await expect(page.locator('.filter-buttons button', { hasText: 'Pizza' })).toBeVisible();
  await expect(page.locator('.filter-buttons button', { hasText: 'Swiss' })).toBeVisible();
  await expect(page.locator('.filter-buttons button', { hasText: 'Desserts' })).toBeVisible();
});

test('all 6 menu cards are visible on load', async ({ page }) => {
  await page.goto('/menu.html');
  var cards = page.locator('.menu-card');
  await expect(cards).toHaveCount(6);
});

test('clicking Pizza filter shows only pizza items', async ({ page }) => {
  await page.goto('/menu.html');
  await page.locator('.filter-buttons button', { hasText: 'Pizza' }).click();
  var pizzaCards = page.locator('.menu-card[data-category="pizza"]');
  await expect(pizzaCards).toHaveCount(2);
  var swissCard = page.locator('.menu-card[data-category="swiss"]').first();
  await expect(swissCard).toBeHidden();
});

test('clicking All filter after Pizza shows all cards again', async ({ page }) => {
  await page.goto('/menu.html');
  await page.locator('.filter-buttons button', { hasText: 'Pizza' }).click();
  await page.locator('.filter-buttons button', { hasText: 'All' }).click();
  var swissCard = page.locator('.menu-card[data-category="swiss"]').first();
  await expect(swissCard).toBeVisible();
});
