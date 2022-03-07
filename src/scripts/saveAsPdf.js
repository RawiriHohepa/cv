const puppeteer = require('puppeteer');
(async () => {
 // launch and create a new page
 const browser = await puppeteer.launch();
 const page = await browser.newPage();
 // go to page in cvonly mode, wait for any network events to settle
 await page.goto("http://localhost:3000?cvonly=true", {
  waitUntil: "networkidle2"
 });
 // output to a local file
 await page.pdf({
  path: "cv.pdf",
  format: "A4",
  printBackground: true
 });
 // close
 await browser.close();
})();
