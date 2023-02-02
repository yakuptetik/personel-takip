import { ref } from 'vue'
import { defineStore } from 'pinia'

import API from '../utils/API';



export const useUserStore = defineStore('user', () => {

  const users = ref({
    loggedIn: false,
    data: null
  });
  
  const token = ref('')


  function loginUser(a) {
    API.post('/login', a)
      .then((response) => {
        console.log(response.data.token)
          API.defaults.headers.common['Authorization'] = `Bearer ${token}`
          localStorage.setItem('token', response.data.token);
        
      })
      .catch(() => {
      });
  }
  return { users, loginUser, }
})