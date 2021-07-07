import puppeteer from 'puppeteer';

jest.setTimeout(30000);

describe('show/hide an event details', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            defaultViewport: null,
            args:['--start-maximized'],
            headless: false,
            slowMo: 250,
            ignoreDefaultArgs: ['--disable-extensions']
        });
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event-wrapper');
      });

    afterAll(() => {
        browser.close();
    });
    
    test('An event element is collapsed by default', async () => {

        const eventDetails = await page.$('.event-wrapper .show-more');
        expect(eventDetails).toBeNull();
    });

    test('User can expand an event to see its details', async () => {
        await page.click('.btn-wrapper button');

        const eventDetails = await page.$('.event-wrapper .show-more');
        expect(eventDetails).toBeDefined();
    });

    test('User can collapse an event to hide its details', async () => {
        await page.click('.btn-wrapper button');

        const eventDetails = await page.$('.event-wrapper .show-more');
        expect(eventDetails).toBeNull();
    });
})


describe('Filter events by city', () => {

    let browser;
    let page;

    beforeAll(async () => {  
        browser = await puppeteer.launch({
            defaultViewport: null,
            args:['--start-maximized'],
            headless: false,
            slowMo: 250,
            ignoreDefaultArgs: ['--disable-extensions']
        });
        page = await browser.newPage();
        await page.goto('http://localhost:3000/'); 
        await page.waitForSelector('.event-wrapper');
        await page.waitForSelector('.city');
        await page.waitForSelector('.suggestions');  
    });

    afterAll(() => {
        browser.close();
    });

    test('When user hasn\'t searched for a city, show upcoming events from all cities', async () => {    
        const events = await page.$$('.event-wrapper');
        expect(events).toBeDefined();

    });

    test('User should see a list of suggestions when they search for a city', async () => {   
        await page.type('.city', 'Berlin');
        const returnedSuggestions = await page.$eval('.suggestions > li:nth-child(1)', el => el.textContent);

        expect(returnedSuggestions).toBe('Berlin, Germany');    
    });

    test('User can select a city from the suggested list to see only events from that city', async () => {
        await page.click('.suggestions li:nth-child(1)')
        let locations = await page.$$eval('.event-wrapper > .location', eventLocations => {
            return eventLocations.every(location => location.textContent === "Berlin, Germany");
        });

        expect(locations).toBe(true)
    });
})