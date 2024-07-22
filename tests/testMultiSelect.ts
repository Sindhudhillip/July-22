import { expect, Page } from "@playwright/test";

const removeAllSelectedOptions = async (page: Page, dataCy: string) => {
    // Obtain the input box and expect it to be visible
    const multiSelectBox = page.locator(`[data-cy="${dataCy}"]`);
    await expect(multiSelectBox).toBeVisible();

    // Open the options dropdown
    await multiSelectBox.click();
    const options = page.getByRole("listbox", { name: "Multi-select" });
    await expect(options).toBeVisible();

    // Locate all the chip labels inside the multi-select box
    const chipLabels = multiSelectBox.locator('.MuiChip-label');
    const chipCount = await chipLabels.count();

    // Iterate over each chip label and remove it
    for (let i = 0; i < chipCount; i++) {
        // Locate the chip label again to handle dynamic changes in the DOM
        const chipText = await chipLabels.nth(0).innerText();

        // Find the option that matches the chip label's text and click on it
        const optionToDeselect = options.locator(`text=${chipText}`);
        await expect(optionToDeselect).toBeVisible();
        await optionToDeselect.click();
    }

    // Verify all chips are removed
    await expect(chipLabels).toHaveCount(0);
    await multiSelectBox.click({ force: true });
};

export const testMultiSelect = async (page: Page, dataCy: string) => {

    // Remove any selected options
    await removeAllSelectedOptions(page, dataCy);

    // Obtain the input box and expect it to be visible
    const multiSelectBox = page.locator(`[data-cy="${dataCy}"]`);
    await expect(multiSelectBox).toBeVisible();

    // Obtain the options
    await multiSelectBox.click();
    const options = page.getByRole("listbox", { name: "Multi-select" });
    await expect(options).toBeVisible();

    // Select the first option and get its text
    const firstOption = options.locator("li").first();
    const firstOptionInnerText = await firstOption.innerText();
    await firstOption.click();

    // Locate the chip labels and expect the first one to have the selected text
    const firstMuiChipLabel = multiSelectBox.locator('.MuiChip-label').first();
    await expect(firstMuiChipLabel).toContainText(firstOptionInnerText);

    // Add another option
    const lastMuiChipLabel = multiSelectBox.locator('.MuiChip-label').last();
    const secondOption = options.locator("li").last();
    const secondOptionInnerText = await secondOption.innerText();
    await secondOption.click();

    // Locate the chip labels and the last one to have the selected text
    await expect(lastMuiChipLabel).toContainText(secondOptionInnerText);

    //Close the options so it doesn't interfere with selecting other dropdowns
    await multiSelectBox.click({ force: true });
    await expect(options).toBeHidden();
};