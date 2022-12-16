
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')


const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

// test('can you add bot to team', async () =>{
//     await driver.findElement(By.id("bot-btn")).click()
//     expect()
// })

test('draw button displays options', async () =>{
    const bots= await driver.findElement(By.id('choices'))
    const displayed = await bots.isDisplayed()
    await driver.findElement(By.id('draw')).click()
    expect(displayed).toBe(true)
})

test('see all bots', async ()  =>{
    let botClass = await driver.findElement(By.className('bot-card outline'))
    await driver.findElement(By.id('see-all')).click()
    await driver.sleep(2000)
    expect(botClass.isDisplayed()).toBe(true)
})
