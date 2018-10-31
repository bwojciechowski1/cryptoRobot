const APP_URL = 'null';
const LOGIN_URL = APP_URL + 'auth/login';
const LOGIN = 'paweł nowak';
const PASSWORD = 'admin';
const BASE_PRICE = 3800;
const ITERATIONS = 1;
const OFFERS = 3;

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
