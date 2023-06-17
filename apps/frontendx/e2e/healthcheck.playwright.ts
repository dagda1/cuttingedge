import { test, expect } from '@playwright/test';

test.describe('/productivity-test/1', () => {
  test('should run healthcheck', async ({ page }) => {

    await page.goto(`/productivity-test/1`);

    await page.click('text=START');

    expect(page.url()).toContain(`/productivity-test/2`);

    expect(await page.waitForSelector('form a:has-text("PREVIOUS")', { timeout: 200 })).toBeTruthy();

    expect(await page.waitForSelector('form button:has-text("NEXT")', { timeout: 200 })).toBeTruthy();
  });
});
