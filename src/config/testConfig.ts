import { defineTestConfig } from '../utils'

export default defineTestConfig({
  testPath: 'src/specs',
  reportPath: 'src/reports',
  reporters: {
    mochaAwesome: true,
  },
})
