// @ts-check
import { testAutoComplete } from "./testAutocomplete";
import { testMultiSelect } from "./testMultiSelect";
import { testTextField } from "./testTextField"
const { test, expect } = require('@playwright/test');


test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await testTextField(page, 'text-input', 'Test Input Value');
  await testTextField(page, 'text-input', 'testuserA');
  await testTextField(page, 'text-input', 'B');
  await testTextField(page, 'text-input', '1');

  await testAutoComplete(page, 'autocomplete-input', 'Option 4');
  await testMultiSelect(page, 'multi-select');
});