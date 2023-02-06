import { ref } from 'vue';
import { defineStore } from 'pinia';
import API from '../utils/API';


export const useTitleStore = defineStore('title', () => {
  
  const titles = ref([]);

  function fetchTitle() {
    API.get('/titles')
      .then((response) => {
        titles.value = response.data.titles;
        console.log('titles')
      })
      .catch(() => {

      });
  }

  function addTitle(title) {
    return new Promise((resolve, reject) => {
      try {
        API.post('/titles', title)
          .then((response) => {
            setTimeout(() => {
              titles.value.push(response.data.titles);
              resolve();
            }, 1000);
          });
      }	catch (err) {
        reject(err);
      }
    });
  }

  function deleteTitle(id) {
    return new Promise(async(resolve, reject) => {
      try {
        const response = await API.delete(`titles/${id}` );
        const index = titles.value.findIndex((title) => title.id === id);
        if(index !== -1) {
          setTimeout(() => {
            titles.value.splice(index, 1);
            resolve();
          }, 1000);
        } else {
          reject('error')
        }
      }	catch (err) {
        reject(err);
      }
    });
  }

  function updateTitle(title) {
    return new Promise(async(resolve, reject) => {
      try {
        const response = await  API.put(`titles/${title.id}`, title)
            const index = titles.value.findIndex((ttl) => ttl.id === title.id);
            if (index !== -1) {
              setTimeout(() => {
                titles.value.splice(index, 1, title);
                resolve();
              }, 1000);
            }
            else {
              reject('error')
            }
      }	catch (err) {
        reject(err);
      }
    });
  }
  
  

	return {
    titles, addTitle, deleteTitle, fetchTitle, updateTitle
	};
});