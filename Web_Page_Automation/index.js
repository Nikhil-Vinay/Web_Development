/* This script uses puppeteer library to automate my facebook page login */
/* install puppeteer : npm install puppeteer */ 
/* documentation of puppeteer library : https://pptr.dev/ */
/* document.querySelector("input[name='email']").value = 20 */

const puppeteer = require('puppeteer');
const data = require('./config.json');

(async function() {
    const browser = await puppeteer.launch ({headless : false});
    const page = await browser.newPage();
    await page.goto(data.url, {waitUntil: "networkidle2"});
    await page.type("input[name = 'email']", data.email, {delay : 100});
    await page.type("input[name = 'pass']", data.pwd, {delay : 100});
    await Promise.all([
        page.waitForNavigation({waitUntil : "networkidle2"}),
        page.click("button[type = 'submit']"),
    ]);

    await page.type("input[type='search']", data.friend);
    /*await page.waitForSelector(".j83agx80", {visible : true});
    await Promise.all([
        page.waitForNavigation({waitUntil : "networkidle2"}),
        page.click("button[type = 'submit']"),
    ]);*/
    

})();
