import { expect, Page } from "@playwright/test"

export const testAutoComplete = async (page: Page, dataCy: string, input: string) => {

    // Obtain the input box and expect it to be visible
    const inputBox = page.locator(`[data-cy="${dataCy}"]`).locator("input");
    await expect(inputBox).toBeVisible();

    // Add the input to the box 
    await inputBox.fill("");
    await inputBox.fill(input);

    // Find all options that contain the input text
    const options = page.locator('role=option');
    await expect(options).toContainText(input);

    // Select the first option that matches the input text
    const option = options.filter({ hasText: input }).first();
    await expect(option).toBeVisible();
    await option.click();

    // Expect the option that is clicked on, to be in the input box
    await expect(inputBox).toHaveValue(input);

};