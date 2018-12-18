const APP_URL = 'null';
const LOGIN_URL = APP_URL + 'auth/login';
const LOGIN = 'paweł nowak';
const PASSWORD = 'admin';
const BASE_PRICE = 7000;
const ITERATIONS = 20;
const OFFERS = 2;

const browser = {
    width: 1920,
    height: 1080,
    headless: false,
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
