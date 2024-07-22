import { expect, Page } from "@playwright/test"

export const testTextField = async (page: Page, dataCy: string, input: string) => {
    // Obtain the selector
    const locator = page.locator(`[data-cy="${dataCy}"]`).locator("input");

    // Clear the text field
    await locator.fill('');

    // Expect the locator to be empty
    await expect(locator).toBeEmpty();

    // Adds the text to the text field
    await locator.fill(input);

    // Expect it to contain the text
    await expect(locator).toHaveValue(input);
}