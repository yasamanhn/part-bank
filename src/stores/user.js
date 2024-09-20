import { reactive } from 'vue'

export const useUserStore = () => {
  const state = reactive({
    firstName: localStorage.getItem('firstName') || '',
    lastName: localStorage.getItem('lastName') || '',
    idNumber: localStorage.getItem('idNumber') || '',
    postalCode: localStorage.getItem('postalCode') || ''
  })

  const loadUserData = () => {
    state.firstName = localStorage.getItem('firstName') || ''
    state.lastName = localStorage.getItem('lastName') || ''
    state.idNumber = localStorage.getItem('idNumber') || ''
    state.postalCode = localStorage.getItem('postalCode') || ''
  }

  return {
    ...state,
    loadUserData
  }
}
