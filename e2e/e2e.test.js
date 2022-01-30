import puppetteer from 'puppeteer';

jest.setTimeout(30000); // тайм-аут кукловода по умолчанию

describe('INN/OGRN form', () => {
    let browser = null;
    let page = null;
    const baseUrl = 'http://localhost:9000';

    beforeAll(async() => {
        browser = await puppetteer.launch({
            headless: false, // показать графический интерфейс
            slowMo: 500,
            devtools: true, // показать инструменты разработки
        });
        page = await browser.newPage();
    });

    afterAll(async() => {
        await browser.close();
    });

    test('test1', async() => {
        await page.goto(baseUrl);
        const form = await page.$('#form');
        const input = await form.$('.form-control');
        await input.type('4766831970270199');
        const submit = await form.$('#submitform');
        submit.click();
        //await page.waitFor('.map');
        await page.waitForSelector(".map");
    });
});