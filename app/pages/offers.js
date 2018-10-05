const config = require('../config/config');
const AMOUNT = '#gridster-cont > div > gridster > gridster-item:nth-child(63) > app-transactions > div > div.inputs.ng-invalid.ng-touched.ng-dirty > div:nth-child(2) > app-custom-input.ng-untouched.ng-pristine.ng-invalid > div > input';
const PRICE = '#gridster-cont > div > gridster > gridster-item:nth-child(63) > app-transactions > div > div.inputs.ng-untouched.ng-pristine.ng-invalid > div:nth-child(2) > app-custom-input:nth-child(1) > div > input';
const CONFIRM_BUY = '#gridster-cont > div > gridster > gridster-item:nth-child(63) > app-transactions > div > div.inputs.ng-touched.ng-dirty.ng-valid > div.action-buttons > button.buy';
const CONFIRM_SELL = '#gridster-cont > div > gridster > gridster-item:nth-child(63) > app-transactions > div > div.inputs.ng-touched.ng-dirty.ng-valid > div.action-buttons > button.sell';

class OffersPage {
    constructor(page) {
        this.page = page;
    }

    async navigateToMarketPage() {
        try {
            await this.page.goto(config.APP_URL + 'main/market')
        } catch (e) {
            console.error(e);
            process.exit();

        }
    }

    async makeOffer(amount, price) {
        try {
            await this.page.waitForSelector(PRICE, { visible: true})
            await this.page.type(PRICE, price);
            await this.page.type(AMOUNT, amount);
        } catch (e) {
            console.error(e);
            process.exit();

        }
    }

    async makeBuyOffer(amount, price) {
        try {
            await this.makeOffer(amount, price);
            await this.page.click(CONFIRM_BUY);

            console.log('> Buy offer - (units price):', amount, price)
        } catch (e) {
            console.error(e);
            process.exit();
        }
    }

    async makeSellOffer(amount, price) {
        try {
            await this.makeOffer(amount, price);
            await this.page.click(CONFIRM_SELL);

            console.log('> Sell offer - (units price):', amount, price)
        } catch (e) {
            console.error(e);
            process.exit();
        }
    }
}

module.exports = OffersPage;