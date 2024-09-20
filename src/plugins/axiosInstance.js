import axios from 'axios'
const BASE_URL = 'https://college.apipart.ir'
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 6_000,
  headers: {
    'gateway-system': 'turboFront',
    'Content-Type': 'application/json'
  }
})

axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers['gateway-token'] = token
      }
    } catch (error) {
      console.log('this is error', error)
    }
    return config
  },
  (error) => {
    if (error.response.status === 401) {
      console.log('not auth')
    }
    if (error.response.status === 404) {
      console.log('not found')
    }
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosInstance
