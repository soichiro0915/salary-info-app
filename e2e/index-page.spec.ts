import { test, expect } from '@playwright/test'

test('Shall render hello world', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle('Salary info app')
  await expect(page.getByRole('heading')).toHaveText('Hello World')
})
