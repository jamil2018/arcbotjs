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

interface APIConfig {
  baseURL?: string
  routes?: {
    [key: string]: {
      index: string
      [key: string]: string
    }
  }
}

interface DBConfig {
  mongoDb?: boolean
  postgres?: boolean
}

export { TestConfig, ReporterConfig, APIConfig, DBConfig }
