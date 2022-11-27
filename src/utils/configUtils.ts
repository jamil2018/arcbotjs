import { reporterConstants } from '../constants'
import { TestConfig } from '../types'
import { ReporterConfig } from '../types/configUtilTypes'

const defineTestConfig = (opts: TestConfig): TestConfig => {
  return opts
}

const getReporterConfig = (
  reporter: {
    allure?: boolean
    mochaAwesome?: boolean
  },
  reportPath: string = 'src/reports'
): ReporterConfig => {
  let reporterConfig: ReporterConfig = {
    reporter: '',
    reporterOptions: { reportDir: undefined, targetDir: undefined },
  }

  if (reporter.allure === undefined || reporter.mochaAwesome === undefined)
    reporterConfig = {
      reporter: reporterConstants.MOCHA_AWESOME,
      reporterOptions: {
        reportDir: reportPath,
      },
    }
  if (reporter.allure === true)
    reporterConfig = {
      reporter: reporterConstants.ALLURE,
      reporterOptions: {
        targetDir: reportPath,
      },
    }
  if (reporter.mochaAwesome === true)
    reporterConfig = {
      reporter: reporterConstants.MOCHA_AWESOME,
      reporterOptions: {
        reportDir: reportPath,
      },
    }
  return reporterConfig
}

export { defineTestConfig, getReporterConfig }
