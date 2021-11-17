import { TestScheduler } from "@jest/core";
import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
    await driver.get(' http://localhost:5500/movieList/index.html')
})

test('Adds movie to page', async () => {
    let testMovie = 'The Master Part 2';
    let inputField = await driver.findElement(By.xpath('//input'));
    let button = await driver.findElement(By.xpath('//button'));

    inputField.sendKeys(testMovie);

    await driver.sleep(3000)

    button.click()

    let movieId = testMovie.replace(/ /g, '');

    await driver.sleep(3000)

    await driver.findElement(By.id(movieId)).click();

    await driver.sleep(3000)

})

afterAll(async () => {
    await driver.quit()
})