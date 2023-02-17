import { ref } from 'vue'
import { defineStore } from 'pinia'

import API from '../utils/API';

export const useUserStore = defineStore('user', () => {
  const isAuth = ref(false);

  function loginUser(a) {
    return new Promise((resolve, reject) => {
      API.post('/login', a)
        .then((response) => {
          console.log('girdi', response)
          API.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
          localStorage.setItem('token', response.data.token);
          isAuth.value = true;
          resolve();
        })
        .catch((error) => {
          console.log(error);
          reject();
        });
    })
  }

  function logout() {
    return new Promise((resolve, reject) => {
      localStorage.removeItem('token');
      API.defaults.headers.common['Authorization'] = null;
      isAuth.value = false;
      resolve();
    });
  }

  return { isAuth, loginUser, logout }
})