async function ssweb(url, fpage = false, darkmode = true) {
  async function getBrowser(opts = {}) {
    const chromeOptions = {
      headless: true,
      defaultViewport: {
        width: 1920,
        height: 1080,
      },
      args: ["--no-sandbox"],
      timeout: 120000,

      ...opts,
    };
    return await require("puppeteer").launch(chromeOptions);
  }
  const browser = await getBrowser();
  const page = await browser.newPage();
  try {
    if (darkmode)
      await page.emulateMediaFeatures([
        {
          name: "prefers-color-scheme",
          value: "dark",
        },
      ]);
    await page.goto(url, {
      waitUntil: "networkidle0",
      timeout: 300000,
    });
    const screenshot = await page.screenshot({
      type: "png",
      fullPage: fpage,
    });
    await browser.close();
    return screenshot;
  } catch (e) {
    await browser.close();
    throw e;
  }
}

module.exports = ssweb;
