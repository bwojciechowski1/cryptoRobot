const APP_URL = 'null';
const LOGIN_URL = APP_URL + 'auth/login';
const LOGIN = 'admin';
const PASSWORD = 'admin';
const BASE_PRICE = 3000;
const ITERATIONS = 4;
const OFFERS = 20;

const browser = {
    width: 1920,
    height: 1080,
    headless: true,
    slowMo: null
};



module.exports = {
    APP_URL,
    LOGIN_URL,
    LOGIN,
    PASSWORD,
    browser,
    BASE_PRICE,
    ITERATIONS,
    OFFERS
};
