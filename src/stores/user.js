import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  const userInfo = useStorage('userInfo', null)
  const isLoggedIn = computed(() => !!userInfo.value)

  function login(username) {
    userInfo.value = { username }
  }

  function logout() {
    userInfo.value = null
  }

  return { userInfo, isLoggedIn, login, logout }
})
