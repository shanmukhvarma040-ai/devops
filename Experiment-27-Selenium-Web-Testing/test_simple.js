// Simplified Version for Quick Lab Exams
const { Builder, By } = require('selenium-webdriver');

async function test() {
    let driver = await new Builder().forBrowser('chrome').build();

    // Replace with your actual path or keep relative
    await driver.get('file:///' + __dirname.replace(/\\/g, '/') + '/registration.html');

    await driver.findElement(By.id('name')).sendKeys('Shanmukh');
    await driver.findElement(By.id('email')).sendKeys('test@gmail.com');
    await driver.findElement(By.id('phone')).sendKeys('9876543210');

    await driver.findElement(By.css('button')).click();

    console.log("Registration Test Successful");

    await driver.quit();
}

test();
