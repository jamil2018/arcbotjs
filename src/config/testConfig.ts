import { TestConfig } from '../types'

const testConfig: TestConfig = {
  testPath: 'src/specs',
  reportPath: 'src/reports',
  reporters: {
    mochaAwesome: true,
  },
}

export { testConfig }
