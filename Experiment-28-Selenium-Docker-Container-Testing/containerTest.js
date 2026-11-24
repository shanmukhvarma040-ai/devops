const { Builder, By } = require('selenium-webdriver');

async function test() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('http://localhost:8084');

        let title = await driver.getTitle();
        console.log('Page Title: ' + title);

        await driver.findElement(By.id('name')).sendKeys('Shanmukh');
        await driver.findElement(By.id('email')).sendKeys('test@gmail.com');
        await driver.findElement(By.id('phone')).sendKeys('9876543210');
        await driver.findElement(By.id('gender')).sendKeys('Male');
        await driver.findElement(By.id('event')).sendKeys('Hackathon');

        await driver.findElement(By.css('button')).click();

        let msg = await driver.findElement(By.id('message')).getText();

        if (msg === 'Registration Successful!')
            console.log('Test Passed');
        else
            console.log('Test Failed');
    } finally {
        await driver.quit();
    }
}

test().catch(console.error);
