const config = require('../config/config')
const LoginPage = require('../pages/login');
const OffersPage = require('../pages/offers')
const puppeteerOptions = require('../puppeteer-conf');

let login;
let offers;

(async () => {
    let { browser, page } = await puppeteerOptions.initialize();
    let base = config.BASE_PRICE;
    let prices = [base+100, base+150, base+200, base+250, base+300, base+350, base+400];

    async function setupPage(page) {
        login = new LoginPage(page);
        offers = new OffersPage(page);
    }

    function closeBrowser() {
        browser.close();
        return 'All done!';
    }


    await setupPage(page);
    await login.navigateToLogin();
    await login.login();
    await offers.navigateToMarketPage()

    for (let y=0; y<=config.ITERATIONS; y++) {
        var x = Math.floor(Math.random() * (6 - 0) + 0);
        console.log(prices[x])
        for (let i=0; i<=config.OFFERS; i++) {
            await offers.makeBuyOffer(`${Math.round((Math.random()* (20 - 0.01) + 0.01)*100)/100}`, `${Math.round(Math.random() * (prices[x] - (prices[x]-50)) + (prices[x]-50))}`)
            await offers.makeSellOffer(`${Math.round((Math.random()* (20 - 0.01) + 0.01)*100)/100}`, `${Math.round(Math.random() * (prices[x] - (prices[x]-50)) + (prices[x]-50))}`)
        }
    }

    return closeBrowser();
})();