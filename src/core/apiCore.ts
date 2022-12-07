import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const sendGetRequest = async (
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<any, any>> => {
  try {
    const res = await axios.get(url, config)
    return res
  } catch (error: any) {
    if (axios.isAxiosError(error) === true) throw new Error(error.message)
    throw new Error('An unexpected error occurred.')
  }
}

const sendPostRequest = async (
  url: string,
  payload: object,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<any, any>> => {
  try {
    const res = await axios.post(url, payload, config)
    return res
  } catch (error: any) {
    if (axios.isAxiosError(error) === true) throw new Error(error.message)
    throw new Error('An unexpected error occurred.')
  }
}

const sendPutRequest = async (
  url: string,
  payload: object,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<any, any>> => {
  try {
    const res = await axios.put(url, payload, config)
    return res
  } catch (error: any) {
    if (axios.isAxiosError(error) === true) throw new Error(error.message)
    throw new Error('An unexpected error occurred.')
  }
}

const sendDeleteRequest = async (
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<any, any>> => {
  try {
    const res = await axios.delete(url, config)
    return res
  } catch (error: any) {
    if (axios.isAxiosError(error) === true) throw new Error(error.message)
    throw new Error('An unexpected error occurred.')
  }
}

export { sendGetRequest, sendPostRequest, sendPutRequest, sendDeleteRequest }
