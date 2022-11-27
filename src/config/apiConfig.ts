import { APIConfig } from '../types/configUtilTypes'

const apiConfig: APIConfig = {
  baseURL: '/api/v2',
  routes: {
    users: {
      index: 'test',
    },
  },
}

export { apiConfig }
