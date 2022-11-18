import * as dotenv from 'dotenv'
import 'ts-mocha'
import Mocha = require('mocha')

import testConfig from './src/config/testConfig'
import { getAllTestFiles } from './src/utils'

dotenv.config()

// creating mocha instance and setting up reporter
const mocha = new Mocha({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: testConfig.reportPath,
  },
})

const testFiles = getAllTestFiles(testConfig.testPath)
testFiles.map((file) => mocha.addFile(file))

// starting tests
mocha.run((failures) => {
  process.on('exit', () => {
    process.exit(failures) // exit with non-zero status if there were failures
  })
})
