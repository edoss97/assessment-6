const {shuffleArray} = require('./utils')


// const {Builder, Capabilities, By} = require('selenium-webdriver')

// const driver = new Builder().withCapabilities(Capabilities.chrome()).build()
// require('chromedriver')

// beforeAll(async () => {
//     await driver.get('http://localhost:4000/')
// })

// afterAll(async () => {
//     await driver.quit()
// })

describe('shuffleArray should', () => {
    test('does shuffle array show all bots', async () => {
        
        expect(shuffleArray(['joe','steve','bob'])).toHaveLength(3)
    })

    test('does shuffle array show correct bots', async () => {
        
        expect(shuffleArray(['joe','steve','bob'])).toContain('joe')
    })
})