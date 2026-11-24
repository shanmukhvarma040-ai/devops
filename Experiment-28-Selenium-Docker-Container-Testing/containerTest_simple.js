// Simplified Version for Quick Practical Exams
const { Builder, By } = require('selenium-webdriver');

async function test() {
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('http://localhost:8084');

    await driver.findElement(By.id('name')).sendKeys('Shanmukh');
    await driver.findElement(By.id('email')).sendKeys('test@gmail.com');
    await driver.findElement(By.id('phone')).sendKeys('9876543210');

    await driver.findElement(By.css('button')).click();

    console.log("Container Test Successful");

    await driver.quit();
}

test();
