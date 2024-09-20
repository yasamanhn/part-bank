import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('userStore', () => {
  const firstName = ref('')
  const lastName = ref('')
  const address = ref('')
  const postalCode = ref('')
  const idCardImgs = ref({ front: '', back: '' })
  const idNumber = ref('')

  const getUserData = () => {
    return {
      firstName: firstName.value,
      lastName: lastName.value,
      address: address.value,
      postalCode: postalCode.value,
      idCardImgs: idCardImgs.value,
      idNumber: idNumber.value
    }
  }

  const setUserData = (data) => {
    firstName.value = data.firstName || ''
    lastName.value = data.lastName || ''
    address.value = data.address || ''
    postalCode.value = data.postalCode || ''
    idCardImgs.value = data.idCardImgs || { front: '', back: '' }
    idNumber.value = data.idNumber || ''
  }

  const saveToLocalStorage = () => {
    const userData = getUserData()
    localStorage.setItem('user-data', JSON.stringify(userData))
  }

  const loadUserData = () => {
    const savedData = JSON.parse(localStorage.getItem('user-data'))
    if (savedData) {
      setUserData(savedData)
    }
  }

  function deleteAccount() {
    firstName.value = null
    lastName.value = null
    address.value = null
    postalCode.value = null
    idCardImgs.value = ref({ front: null, back: null })
    idNumber.value = null

    const savedData = JSON.parse(localStorage.getItem('user-data'))
    if (savedData) {
      localStorage.removeItem('user-data')
    }
  }
  return {
    firstName,
    lastName,
    address,
    postalCode,
    idCardImgs,
    getUserData,
    setUserData,
    saveToLocalStorage,
    loadUserData,
    deleteAccount
  }
})
