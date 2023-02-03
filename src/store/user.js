import { ref } from 'vue'
import { defineStore } from 'pinia'

import API from '../utils/API';



export const useUserStore = defineStore('user', () => {
  const isAuth = ref(false)

  function loginUser(a) {
    API.post('/login', a)
      .then((response) => {
        API.defaults.headers.common['Authorization'] = `Bearer ${token}`
        localStorage.setItem('token', response.data.token);
        isAuth.value = true;
      })
      .catch(() => {
      });
  }
  return { isAuth, loginUser, }
})