const { test, expect } = require('@playwright/test');
const { loginPagePO } = require('./pageObjects/loginPagePO');
//require('../pageobjects/loginPagePO')

const signUpEmail = "testSignUpEmail";
const signUpPassword = "testSignUpPassword";
const email = "testEmail";
const password = "testPassword";

test('authenticate', async({page}) => {

  const context = await browser.newContext();
  const page = await context.newPage();
  const loginpagepo = new loginPagePO(page)
  loginpagepo.goTo()
  loginpagepo.signUp(signUpEmail,signUpPassword)
  loginpagepo.loginAuth(email,password)
//signup
    // await page.goto("https:.......");
    // console.log(await page.title());
    // await expect(page.getByTitle('login')).toHaveText('skill');
    // await signUpEmailLoc.click();
    // await signUpEmailLoc.fill('');
    // await signUpEmailLoc.fill(signUpEmail);
    
    // await signUpPasswordLoc.click()
    // await signUpPasswordLoc.fill('');
    // await signUpPasswordLoc.fill(signUpPassword);
    // await confirmPasswordLoc.click()
    // await confirmPasswordLoc.fill('');
    // await confirmPasswordLoc.fill(signUpPassword);

    // await expect(page.locator('[data-cy="sign-up-button"]').withText('sign')).toBeVisible().click()
// Login
    // await expect(page.getByTitle('')).toHaveText('')

    // await loginEmail.click();
    // await loginEmail.fill('');
    // await loginEmail.fill(email);

    // await loginPassword.click()
    // await loginPassword.fill('');
    // await loginPassword.fill(password);

    // await expect(page.locator('[data-cy="login-button"]').withText('login')).toBeVisible().click()


    //write assertion for login fail and logi pass
//forgotten password
   await page.locator('[data-cy="forgot-password-link"]').click()
   await expect(page.getByTitle('Forgotten Password?')).toHaveText('Forgotten');
//reset password email
await page.locator('[data-cy="reset-password-email"]').click();
await page.locator('[data-cy="reset-password-email"]').fill('');
await page.locator('[data-cy="reset-password-email"]').fill(email);
//rest password button
await page.locator('[data-cy="reset-password-button"]').click();
// Confirmation code input: data-cy="confirmation-code"
// Confirm account button: data-cy="confirm-account-button"
// ?????

await page.fill('[data-cy="confirmation-code"]', '123456'); // Enter the confirmation code
await page.click('[data-cy="confirm-account-button"]');
})