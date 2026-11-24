const { Builder, By } = require('selenium-webdriver');
const path = require('path');

async function test() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        const filePath = 'file:///' + path.resolve(__dirname, 'registration.html').replace(/\\/g, '/');
        await driver.get(filePath);

        await driver.findElement(By.id('name')).sendKeys('Shanmukh');
        await driver.findElement(By.id('email')).sendKeys('test@gmail.com');
        await driver.findElement(By.id('phone')).sendKeys('9876543210');
        await driver.findElement(By.id('gender')).sendKeys('Male');
        await driver.findElement(By.id('event')).sendKeys('Hackathon');

        await driver.findElement(By.css('button')).click();

        let msg = await driver.findElement(By.id('message')).getText();
        console.log(msg);
    } finally {
        await driver.quit();
    }
}

test().catch(console.error);
