import { assert } from 'chai'
import { By, WebDriver } from 'selenium-webdriver'
import { webDriverBrowsers } from '../constants/webdriverConstants'
import { WebDriverGenerator } from '../core/webDriverCore'
import fs from 'fs'

describe('Selenium test', function () {
  let driver: WebDriver

  before(async function () {
    const driverGenerator = new WebDriverGenerator(webDriverBrowsers.edge)
    driver = await driverGenerator.driver
  })
  after(async () => await driver.quit())
  describe('#indexOf()', function () {
    it('First Selenium script', async function () {
      await driver.get('https://www.selenium.dev/selenium/web/web-form.html')
      const title = await driver.getTitle()
      assert.equal('Web form', title)

      await driver.manage().setTimeouts({ implicit: 500 })

      const textBox = await driver.findElement(By.name('my-text'))
      const submitButton = await driver.findElement(By.css('button'))

      await textBox.sendKeys('Selenium')
      await submitButton.click()

      const message = await driver.findElement(By.id('message'))
      const value = await message.getText()
      assert.equal('Received!', value)
    })
  })
})
