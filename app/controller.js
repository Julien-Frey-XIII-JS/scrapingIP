const puppeteer = require('puppeteer');

const Controller = {

    scrapingIP: (req, res, next) => {

        (async () => {
          const browser = await puppeteer.launch(
              {
                headless: false,
              }
          );

          // declare page with const browser
          const page = await browser.newPage();

          //go to the page
          await page.goto('https://www.mon-ip.com/');

          // wait for the page to load
          await page.waitForSelector('#ip4');

          // get the ip address
          let scrap = await page.$eval('#ip4', el => el.innerText);

          // close the browser
          await browser.close();

          // return the ip address
          res.send(scrap);
        })();
    }
}
module.exports = Controller;
