import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Svelte Icon Webkit' })).toBeVisible();
});

test('svelte-4/getting-started page has expected h1', async ({ page }) => {
  await page.goto('/guide/svelte-4/getting-started');
  await expect(page.getByRole('heading', { name: 'Svelte Icon Webkit: v1 (EXAMPLE)' })).toBeVisible();
});

test('three-tabs page has expected h1', async ({ page }) => {
  await page.goto('/three-tabs');
  await expect(page.getByRole('heading', { name: 'Three Tabs' })).toBeVisible();
});

test('three-tabs-sizebytailwind page has expected h1', async ({ page }) => {
  await page.goto('/three-tabs-sizebytailwind');
  await expect(page.getByRole('heading', { name: 'Three Tabs: Size by Tailwind' })).toBeVisible();
});

test('no-tabs page has expected h1', async ({ page }) => {
  await page.goto('/no-tabs');
  await expect(page.getByRole('heading', { name: 'No Tabs' })).toBeVisible();
});

test('how to use page has expected h1', async ({ page }) => {
  await page.goto('/how-to-use');
  await expect(page.getByRole('heading', { name: 'Documentation' })).toBeVisible();
});
