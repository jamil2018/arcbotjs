import { Builder, By, WebDriver, WebElement } from 'selenium-webdriver'
import { getErrorMessage } from '../utils'

class WebDriverGenerator {
  // properties
  private readonly _driver: Promise<WebDriver>

  // constructor
  constructor(browser: string) {
    this._driver = this.generateDriver(browser)
  }

  // getters
  get driver(): Promise<WebDriver> {
    return this._driver
  }

  // methods
  private async generateDriver(browser: string): Promise<WebDriver> {
    try {
      const driver = await new Builder().forBrowser(browser).build()
      return driver
    } catch (error) {
      throw new Error(
        `Error occurred while generating browser driver. Error: ${getErrorMessage(
          error
        )}`
      )
    }
  }
}

class WebElementFinder {
  private readonly _driver: WebDriver

  /**
   *
   * @constructor
   */
  constructor(driver: WebDriver) {
    this._driver = driver
  }

  /**
   *
   * @method
   */
  // find elements by id
  async getElementById(locator: string): Promise<WebElement> {
    return await this._driver.findElement(By.id(locator))
  }

  async getElementsById(locator: string): Promise<WebElement[]> {
    return await this._driver.findElements(By.id(locator))
  }

  // find elements by css
  async getElementByCss(locator: string): Promise<WebElement> {
    return await this._driver.findElement(By.css(locator))
  }

  async getElementsByCss(locator: string): Promise<WebElement[]> {
    return await this._driver.findElements(By.css(locator))
  }

  // find elements by class name
  async getElementByClassName(locator: string): Promise<WebElement> {
    return await this._driver.findElement(By.className(locator))
  }

  async getElementsByClassName(locator: string): Promise<WebElement[]> {
    return await this._driver.findElements(By.className(locator))
  }
}

export { WebDriverGenerator, WebElementFinder }
