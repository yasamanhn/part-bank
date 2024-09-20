import axiosInstance from '@/plugins/axiosInstance.js'

const transactions = async () => {
  console.log('doneeee')

  const res = await axiosInstance.get('transactions')
  console.log(res)

  return res.data
}
export { transactions }
