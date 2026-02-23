import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Read A Book');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Test Meeting');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Boo Boo');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'Read A Book' }).getByLabel('Toggle Todo').check();
  await page.getByRole('listitem').filter({ hasText: 'Test Meeting' }).getByLabel('Toggle Todo').check();
  await page.getByRole('listitem').filter({ hasText: 'Boo Boo' }).getByLabel('Toggle Todo').check();
  await page.getByRole('button', { name: 'Clear completed' }).click();
});