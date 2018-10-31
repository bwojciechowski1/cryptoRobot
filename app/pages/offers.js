const config = require('../config/config');

class OffersPage {
    constructor(page) {
        this.page = page;
    }

    async navigateToMarketPage() {
        try {
            await this.page.goto(config.APP_URL + 'main/market')
            await this.page.waitForSelector('input[name=pricePerUnit]', { visible: true})
        } catch (e) {
            console.error(e);
            process.exit();

        }
    }

    async makeOffer(amount, price) {
        try {
            await this.page.waitFor(100);
            await this.page.type('input[name=pricePerUnit]', price);
            await this.page.type('input[name=amount]', amount);
        } catch (e) {
            console.error(e);
            process.exit();

        }
    }

    async makeBuyOffer(amount, price) {
        try {
            await this.makeOffer(amount, price);
            await this.page.click('button.buy');

            console.log('> Buy offer - (units price):', amount, price)
        } catch (e) {
            console.error(e);
            process.exit();
        }
    }

    async makeSellOffer(amount, price) {
        try {
            await this.makeOffer(amount, price);
            await this.page.click('button.sell');

            console.log('> Sell offer - (units price):', amount, price)
        } catch (e) {
            console.error(e);
            process.exit();
        }
    }

    async selectMarket() {
        try {
            await this.page.evaluate(() => {
                let elements = document.getElementsByClassName('ticker');
                    elements[1].click();
            });

            console.log('Changed market')
        } catch (e) {
            console.error(e);
            process.exit();
        }
    }
}

module.exports = OffersPage;