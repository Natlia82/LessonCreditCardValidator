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

    test('test VisaMasterCard', async() => {
        await page.goto(baseUrl);
        const form = await page.$('#form');
        const input = await form.$('.form-control');
        await input.type('4766831970270199');
        const submit = await form.$('#submitform');
        submit.click();

        //await page.waitForSelector(".map");
        const element = await page.waitForSelector(".map");
        const value = await element.evaluate(el => el.textContent);
        expect(value).toBe("VisaMasterCard");

    });
    test('test MaestroCard', async() => {
        await page.goto(baseUrl);
        const form = await page.$('#form');
        const input = await form.$('.form-control');
        await input.type('5038740577003946');
        const submit = await form.$('#submitform');
        submit.click();

        //await page.waitForSelector(".map");
        const element = await page.waitForSelector(".map");
        const value = await element.evaluate(el => el.textContent);
        expect(value).toBe("MaestroCard");

    });

    test('test DiscoverCard', async() => {
        await page.goto(baseUrl);
        const form = await page.$('#form');
        const input = await form.$('.form-control');
        await input.type('6011782763842553');
        const submit = await form.$('#submitform');
        submit.click();

        //await page.waitForSelector(".map");
        const element = await page.waitForSelector(".map");
        const value = await element.evaluate(el => el.textContent);
        expect(value).toBe("DiscoverCard");

    });
});