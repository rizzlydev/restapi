let { fakeua } = require("caliph-api")
async function ssweb(url, fpage = false, darkmode = false) {
async function getBrowser(opts = {}) {
    const chromeOptions = {
        headless: true,
       defaultViewport: {
            width: 1920,
            height: 1080
        },
        timeout: 120000,
        args: ["--no-sandbox"],
        ...opts
    }
    return await require('puppeteer').launch(chromeOptions)
}
const browser = await getBrowser()
                const page = await browser.newPage()
                if (darkmode) await page.emulateMediaFeatures([{
    name: 'prefers-color-scheme', value: 'dark' }]);
                await page.setUserAgent("Mozilla/5.0 (compatible; Caliphbot/2.1; +http://caliphapi.com)")
                await page.goto(url, {
                    waitUntil: 'networkidle0',
                    timeout: 300000
                })
const screenshot = await page.screenshot({
                    type: 'png',
                    fullPage: fpage
                })
await browser.close()
return screenshot 
}

module.exports = ssweb
