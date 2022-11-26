import testConfig from '../config/testConfig'

const reporterConstants = {
  MOCHA_AWESOME: {
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: '../reports',
    },
  },
  ALLURE: {
    reporter: 'mocha-allure-reporter',
    reporterOptions: {
      targetDir: '../reports',
    },
  },
}
console.warn(testConfig)
export { reporterConstants }
