import puppetteer from 'puppeteer';

(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://zen.yandex.ru/media/lapretty/modnye-sapogi-na-osen-2021-6123273233b2222d5d075aed?&utm_campaign=dbr', {
        waitUntil: 'networkidle2',
    });
    await page.pdf({ path: 'd:\hn.pdf', format: 'a4' });

    await browser.close();
})();