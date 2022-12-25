import { Builder, WebDriver } from 'selenium-webdriver'
import { getErrorMessage } from '../utils'

const getDriver = async (browser: string): Promise<WebDriver> => {
  try {
    const driver = await new Builder().forBrowser(browser).build()
    return driver
  } catch (error) {
    throw new Error(
      `Error while creating webdriver. Error: ${getErrorMessage(error)}`
    )
  }
}

export { getDriver }
