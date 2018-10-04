const appURL = 'null';
const loginURL = appURL + 'auth/login';
const login = 'admin';
const password = 'admin';
const BASE_PRICE = 3000;

const SELECTOR_USERNAME_INPUT = 'input[name="email"]';
const SELECTOR_PASSWORD_INPUT = 'input[name="password"]';
const SELECTOR_SUBMIT_BTN = 'body > app-root > div > app-auth > div > div.right > app-login > div > form > div > button';
const WAITING_OBJECT = '/html/body/app-root/div/app-auth/div/div[2]/app-login/div/form/div/app-custom-input[1]/div/input';

const AMOUNT = '#gridster-cont > div > gridster > gridster-item:nth-child(63) > app-transactions > div > div.inputs.ng-invalid.ng-touched.ng-dirty > div:nth-child(2) > app-custom-input.ng-untouched.ng-pristine.ng-invalid > div > input';
const PRICE = '#gridster-cont > div > gridster > gridster-item:nth-child(63) > app-transactions > div > div.inputs.ng-untouched.ng-pristine.ng-invalid > div:nth-child(2) > app-custom-input:nth-child(1) > div > input';
const CONFIRM_BUY = '#gridster-cont > div > gridster > gridster-item:nth-child(63) > app-transactions > div > div.inputs.ng-touched.ng-dirty.ng-valid > div.action-buttons > button.buy';
const CONFIRM_SELL = '#gridster-cont > div > gridster > gridster-item:nth-child(63) > app-transactions > div > div.inputs.ng-touched.ng-dirty.ng-valid > div.action-buttons > button.sell';

const browser = {
    width: 1920,
    height: 1080,
    headless: false,
    slowMo: null
};



module.exports = {
    appURL,
    loginURL,
    login,
    password,
    browser,
    SELECTOR_SUBMIT_BTN,
    SELECTOR_PASSWORD_INPUT,
    SELECTOR_USERNAME_INPUT,
    WAITING_OBJECT,
    PRICE,
    AMOUNT,
    CONFIRM_BUY,
    CONFIRM_SELL,
    BASE_PRICE
};
