import { reporterConstants } from '../constants'
import { TestConfig } from '../types'
import { ReporterConfig } from '../types/configUtilTypes'

const defineTestConfig = (opts: TestConfig): TestConfig => {
  return opts
}

const getReporterConfig = (reporter: {
  allure?: boolean
  mochaAwesome?: boolean
}): ReporterConfig => {
  let reporterConfig: ReporterConfig = {
    reporter: '',
    reporterOptions: { reportDir: undefined, targetDir: undefined },
  }

  if (reporter.allure === undefined || reporter.mochaAwesome === undefined)
    reporterConfig = reporterConstants.ALLURE
  if (reporter.allure === true) reporterConfig = reporterConstants.ALLURE
  if (reporter.mochaAwesome === true)
    reporterConfig = reporterConstants.MOCHA_AWESOME
  return reporterConfig
}

export { defineTestConfig, getReporterConfig }
