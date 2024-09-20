import axiosInstance from '@/plugins/axiosInstance.js'

const requestPostDeposit = async (params) => {
  try {
    const response = await axiosInstance.post('/deposit-account', params)
    console.log('kamdkdjjkdfjdkj', response.data)
    return response.data
  } catch (error) {
    console.error(
      'Error during account creation:',
      error.response ? error.response.data : error.message
    )
    throw error
  }
}

export { requestPostDeposit }
