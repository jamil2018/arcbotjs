import { defineTestConfig } from '../utils'

const testConfig = defineTestConfig({
  testPath: 'src/specs',
  reportPath: 'src/reports',
  reporters: {
    mochaAwesome: true,
  },
})

export { testConfig }
