const puppeteer = require('puppeteer');
const config = require('../app/config/config');

module.exports = {
    async initialize() {
        const browser = await setupBrowser();
        const page = await setupPage(browser);
        await setupClient(page);

        return {browser, page};
    },
};


async function setupBrowser() {
    return puppeteer.launch({
        headless: config.browser.headless,
        slowMo: config.browser.slowMo,
        args: [
            `--window-size=${config.browser.width},${config.browser.height}`,
            '--no-sandbox',
            '--disable-setuid-sandbox',

            // debug logging
            '--enable-logging',
            '--v=1'
        ]
    });
}

async function setupPage(browser) {
    let page = await browser.newPage();
    await page.setViewport({
        width: config.browser.width,
        height: config.browser.height
    });
    return page;
}


async function setupClient(page) {
    await page._client.send('Animation.setPlaybackRate', {playbackRate: 300});
    const client = await page.target().createCDPSession();
    await client.send('Network.enable');
    await client.send('Network.emulateNetworkConditions', {
        offline: false,
        latency: 200, // ms
        downloadThroughput: 780 * 1024 / 8, // 780 kb/s
        uploadThroughput: 330 * 1024 / 8 // 330 kb/s
    });
    await client.send('Emulation.setCPUThrottlingRate', {rate: 1});
    console.log('Browser setup finished.');
}
