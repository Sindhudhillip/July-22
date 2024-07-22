class LoginPage {
    constructor(page)
    {
    this.page = page
    this.signUpEmailLoc = page.locator('[data-cy="sign-up-email"]')
    this.signUpPasswordLoc = page.locator('[data-cy="sign-up-password"]')
    this.confirmPasswordLoc = page.locator('[data-cy="confirm-password"]')
    this.loginEmail = page.locator('[data-cy="login-email"]')
    this.loginPassword = page.locator('[data-cy="login-password"]')
    }

    async goTo()
    {
        await this.page.goto("https:.......");
        console.log(await page.title());
    }
    async signUp(signUpEmail,signUpPassword)
        {
            await expect(page.getByTitle('login')).toHaveText('skill');
            await this.signUpEmailLoc.click();
            await this.signUpEmailLoc.fill('');
            await expect(this.signUpEmailLoc).toHaveValue('');
            await this.signUpEmailLoc.fill(signUpEmail);
            await expect(this.signUpEmailLoc).toHaveValue(signUpEmail);
            
            await this.signUpPasswordLoc.click()
            await this.signUpPasswordLoc.fill('');
            await this.signUpPasswordLoc.fill(signUpPassword);
            await this.confirmPasswordLoc.click()
            await this.confirmPasswordLoc.fill('');
            await this.confirmPasswordLoc.fill(signUpPassword);
            await expect(page.locator('[data-cy="sign-up-button"]').withText('sign')).toBeVisible().click()
        }
    async loginAuth(email,password)
        {
            await expect(page.getByTitle('')).toHaveText('');

            await loginEmail.click();
            await loginEmail.fill('');
            await loginEmail.fill(email);
        
            await loginPassword.click()
            await loginPassword.fill('');
            await loginPassword.fill(password);
            await expect(page.locator('[data-cy="login-button"]').withText('login')).toBeVisible().click()
        }
    
    
}
module.exports = {loginPagePO}