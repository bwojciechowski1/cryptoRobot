const config = require('../config/config');

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

    async makeBuyOffer(amount, price) {
        try {
            await this.page.waitForSelector(config.PRICE, { visible: true})
            await this.page.type(config.PRICE, price);
            await this.page.type(config.AMOUNT, amount);
            await this.page.click(config.CONFIRM_BUY);

            console.log('> Buy offer - (units price):', amount, price)
        } catch (e) {
            console.error(e);
            process.exit();
        }
    }

    async makeSellOffer(amount, price) {
        try {
            await this.page.waitForSelector(config.PRICE, { visible: true})
            await this.page.type(config.PRICE, price);
            await this.page.type(config.AMOUNT, amount);
            await this.page.click(config.CONFIRM_SELL);

            console.log('> Sell offer - (units price):', amount, price)
        } catch (e) {
            console.error(e);
            process.exit();
        }
    }
}

module.exports = OffersPage;