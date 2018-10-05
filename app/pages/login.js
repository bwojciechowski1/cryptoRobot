const config = require('../config/config');
const SELECTOR_USERNAME_INPUT = 'input[name="email"]';
const SELECTOR_PASSWORD_INPUT = 'input[name="password"]';
const SELECTOR_SUBMIT_BTN = 'body > app-root > div > app-auth > div > div.right > app-LOGIN > div > form > div > button';
const WAITING_OBJECT = '/html/body/app-root/div/app-auth/div/div[2]/app-LOGIN/div/form/div/app-custom-input[1]/div/input';

class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async navigateToLogin() {
        try {
            await this.page.goto(config.APP_URL);
            console.log('Navigated to login page.');
        } catch (e) {
            console.error(e);
            process.exit();
        }
    }

    async login () {
        try {
            await this.page.waitForXPath(WAITING_OBJECT);
            await this.page.type(SELECTOR_USERNAME_INPUT, config.LOGIN);
            await this.page.type(SELECTOR_PASSWORD_INPUT, config.PASSWORD);
            await this.page.click(SELECTOR_SUBMIT_BTN);
            await this.page.waitForNavigation();
            console.log('Logged in.');

        } catch (e) {
            console.error(e);
            process.exit();
        }
    }
}

module.exports = LoginPage;