interface TestConfig {
  baseURL?: string
  testPath?: string
  reportPath?: string
  reporters: {
    mochaAwesome?: boolean
    allure?: boolean
  }
}

interface ReporterConfig {
  reporter: string
  reporterOptions: { reportDir?: string; targetDir?: string }
}

export { TestConfig, ReporterConfig }
