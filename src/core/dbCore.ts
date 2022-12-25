import { Client } from 'pg'
import { pgConfig } from '../types/configUtilTypes'
import { getErrorMessage } from '../utils'

const connectToDb = async (config: pgConfig): Promise<Client> => {
  try {
    const client = new Client(config)
    await client.connect(() => {
      console.log('Connected to db')
    })
    return client
  } catch (error) {
    throw new Error(
      `Error occurred while connecting to db.Error: ${getErrorMessage(error)}`
    )
  }
}

export { connectToDb }
