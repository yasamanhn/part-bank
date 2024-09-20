import axiosInstance from '@/plugins/axiosInstance.js'

const requestGetDashboard = async () => {
  const res = await axiosInstance.get('deposit-account')
  return res.data
}
export { requestGetDashboard }
