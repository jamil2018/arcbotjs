const sendGETRequest = async (
  url: string,
  config?: RequestInit
): Promise<any> => {
  try {
    const response = await fetch(url, config)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error('Error occurred while fetching data')
  }
}

export { sendGETRequest }
