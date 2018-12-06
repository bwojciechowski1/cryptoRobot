const APP_URL = 'null';
const LOGIN_URL = APP_URL + 'auth/login';
const LOGIN = 'null';
const PASSWORD = 'null';
const BASE_PRICE = 4800;
const ITERATIONS = 3;
const OFFERS = 10;

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
