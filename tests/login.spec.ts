import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const usernameInput = page.getByPlaceholder('Username');
  const passwordInput = page.getByPlaceholder('Password');
  const loginButton = page.getByRole('button', { name: 'Login'});
  
});