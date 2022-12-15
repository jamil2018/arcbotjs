import { getErrorMessage } from '../utils'

const sendGETRequest = async (
  url: string,
  config?: RequestInit
): Promise<any> => {
  try {
    const response = await fetch(url, config)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(
      `Error occurred while fetching data. Request type: GET. Request url: ${url}. Error: ${getErrorMessage(
        error
      )}`
    )
  }
}

const sendPOSTRequest = async (
  url: string,
  body: object,
  config?: RequestInit
): Promise<any> => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      ...config,
    })
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(
      `Error occurred while fetching data. Request type: POST. Request url: ${url}. Error: ${getErrorMessage(
        error
      )}`
    )
  }
}

const sendPUTRequest = async (
  url: string,
  body: object,
  config?: RequestInit
): Promise<any> => {
  try {
    const response = await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(body),
      ...config,
    })
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(
      `Error occurred while fetching data. Request type: PUT. Request url: ${url}. Error: ${getErrorMessage(
        error
      )}`
    )
  }
}

const sendDELETERequest = async (
  url: string,
  config?: RequestInit
): Promise<any> => {
  try {
    const response = await fetch(url, {
      method: 'DELETE',
      ...config,
    })
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(
      `Error occurred while fetching data. Request type: DELETE. Request url: ${url}. Error: ${getErrorMessage(
        error
      )}`
    )
  }
}

export { sendGETRequest, sendPOSTRequest, sendPUTRequest, sendDELETERequest }
