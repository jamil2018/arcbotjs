import * as dotenv from 'dotenv'
import 'ts-mocha'
import Mocha = require('mocha')

import testConfig from './src/config/testConfig'
import { getAllTestFiles } from './src/utils'

if (process.env.NODE_ENV !== 'Production') {
  dotenv.config()
}

// creating mocha instance and setting up reporter
const mocha = new Mocha({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: testConfig.reportPath,
  },
})

// fetching all test files
/**
 * @todo: create a GUI to select which test files to run and feed only the selected test files to mocha
 */
const testFiles = getAllTestFiles(testConfig.testPath)

// feeding test file paths to run to mocha
testFiles.map((file) => mocha.addFile(file))

// starting tests
mocha.run((failures) => {
  process.on('exit', () => {
    process.exit(failures) // exit with non-zero status if there were failures
  })
})
