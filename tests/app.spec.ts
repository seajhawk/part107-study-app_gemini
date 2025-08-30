
import { test, expect } from '@playwright/test';

test.describe('Part 107 Study App', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('should load the main page', async ({ page }) => {
    await expect(page).toHaveTitle(/React App/);
    await expect(page.locator('h1')).toHaveText('Welcome to the Part 107 Study App!');
  });

  test('should navigate to the study modules page', async ({ page }) => {
    await page.click('text=Study Modules');
    await expect(page).toHaveURL('/study');
    await expect(page.locator('h1')).toHaveText('Study Modules');
  });

  test('should flip a flashcard', async ({ page }) => {
    await page.click('text=Flashcards');
    const flashcard = page.locator('.flashcard');
    await flashcard.click();
    await expect(flashcard).toHaveClass(/flipped/);
  });

  test('should navigate through the practice quiz', async ({ page }) => {
    await page.click('text=Practice Test');
    await page.locator('.list-group-item').first().click();
    await page.click('text=Next Question');
    await expect(page.locator('.card-title')).not.toHaveText('According to 14 CFR part 107, an sUAS is a unmanned aircraft system weighing:');
  });
});
