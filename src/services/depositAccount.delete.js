import axiosInstance from '@/plugins/axiosInstance.js'

const depositAccountDelete = async (params) => {
  return await axiosInstance.post('/auth/logout', params)
}
export { depositAccountDelete }
