import axiosInstance from '@/plugins/axiosInstance.js'

const requestPostLogin = async (params) => {
  return await axiosInstance.post('auth/login', params)
}
export { requestPostLogin }
