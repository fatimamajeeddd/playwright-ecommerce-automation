// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
test('my first test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveURL(/playwright.dev/);
});
test('page has a heading', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(
    page.getByRole('heading', {
      name: /Playwright enables reliable web automation/
    })
  ).toBeVisible();
});

test('user can add product to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('button', { name: 'Add to cart' }).first().click();

  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  await page.locator('.shopping_cart_link').click();

  await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
});
test('user can login successfully', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/inventory/);
});

test('user cannot login with wrong password', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('wrong_password');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Username and password do not match')).toBeVisible();
});

test('user can remove product from cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('button', { name: 'Add to cart' }).first().click();
  await page.locator('.shopping_cart_link').click();

  await page.getByRole('button', { name: 'Remove' }).click();

  await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
});

test('user can complete checkout', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('button', { name: 'Add to cart' }).first().click();
  await page.locator('.shopping_cart_link').click();
  await page.getByRole('button', { name: 'Checkout' }).click();

  await page.getByPlaceholder('First Name').fill('Ahmad');
  await page.getByPlaceholder('Last Name').fill('Khan');
  await page.getByPlaceholder('Zip/Postal Code').fill('54000');

  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Finish' }).click();

  await expect(page.getByText('Thank you for your order!')).toBeVisible();
});
