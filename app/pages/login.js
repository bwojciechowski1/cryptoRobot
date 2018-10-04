const config = require('../config/config');

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
            await this.page.waitForXPath(config.WAITING_OBJECT);
            await this.page.type(config.SELECTOR_USERNAME_INPUT, config.LOGIN);
            await this.page.type(config.SELECTOR_PASSWORD_INPUT, config.PASSWORD);
            await this.page.click(config.SELECTOR_SUBMIT_BTN);
            await this.page.waitForNavigation();
            console.log('Logged in.');

        } catch (e) {
            console.error(e);
            process.exit();
        }
    }
}

module.exports = LoginPage;