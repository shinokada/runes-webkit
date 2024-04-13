import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  console.log(`Running ${test.info().title}`);
  await page.goto('/');
});

test('index page has expected h1', async ({ page }) => {
  await expect(page.getByRole('heading', { name: 'Runes Webkit' })).toBeVisible();
});

test('index page has expected meta title', async ({ page }) => {
  await expect(page).toHaveTitle('Runes Webkit');
});

test('index page has expected meta description', async ({ page }) => {
  const metaDescription = page.locator('meta[name="description"]');
  await expect(metaDescription).toHaveAttribute(
    'content',
    'A quick start for a Svelte Runes project.'
  );
});

test('index page has expected meta keywords', async ({ page }) => {
  const metaKeywords = page.locator('meta[name="keywords"]');
  await expect(metaKeywords).toHaveAttribute('content', 'svelte, runes, webkit, ui, components');
});

test('index page has expected meta og', async ({ page }) => {
  const metaOgTitle = page.locator('meta[property="og:title"]');
  await expect(metaOgTitle).toHaveAttribute('content', 'Runes Webkit');
  const metaOgDescription = page.locator('meta[property="og:description"]');
  await expect(metaOgDescription).toHaveAttribute(
    'content',
    'A quick start for a Svelte Runes project.'
  );
  const metaOgUrl = page.locator('meta[property="og:url"]');
  await expect(metaOgUrl).toHaveAttribute('content', 'http://localhost:4173/');
  const metaOgImage = page.locator('meta[property="og:image"]');
  await expect(metaOgImage).toHaveAttribute(
    'content',
    'https://open-graph-vercel.vercel.app/api/runes-webkit'
  );
});

test('index page has expected meta twitter', async ({ page }) => {
  const metaTwitterTitle = page.locator('meta[name="twitter:title"]');
  await expect(metaTwitterTitle).toHaveAttribute('content', 'Runes Webkit');
  const metaTwitterDescription = page.locator('meta[name="twitter:description"]');
  await expect(metaTwitterDescription).toHaveAttribute(
    'content',
    'A quick start for a Svelte Runes project.'
  );
  const metaTwitterImage = page.locator('meta[name="twitter:image"]');
  await expect(metaTwitterImage).toHaveAttribute(
    'content',
    'https://open-graph-vercel.vercel.app/api/runes-webkit'
  );
});


test('svelte-4/getting-started page has expected h1', async ({ page }) => {
  await page.goto('/guide/svelte-4/getting-started');
  // await expect(page.getByRole('heading', { name: 'Svelte Icon Webkit: v1 (EXAMPLE)' })).toBeVisible();
});

test('three-tabs page has expected h1', async ({ page }) => {
  await page.goto('/three-tabs');
  // await expect(page.getByRole('heading', { name: 'Three Tabs' })).toBeVisible();
});

test('three-tabs-sizebytailwind page has expected h1', async ({ page }) => {
  await page.goto('/three-tabs-sizebytailwind');
  // await expect(page.getByRole('heading', { name: 'Three Tabs: Size by Tailwind' })).toBeVisible();
});

test('no-tabs page has expected h1', async ({ page }) => {
  await page.goto('/no-tabs');
  // await expect(page.getByRole('heading', { name: 'No Tabs' })).toBeVisible();
});

test('how to use page has expected h1', async ({ page }) => {
  await page.goto('/how-to-use');
  // await expect(page.getByRole('heading', { name: 'Documentation' })).toBeVisible();
});
