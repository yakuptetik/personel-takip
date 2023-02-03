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
        localStorage.setItem('titles', JSON.stringify(titles.value));
      })
      .catch(() => {

      });
  }

  function addMember(member) {
    return new Promise((resolve, reject) => {
      try {
        API.post('/titles', member)
          .then((response) => {
            titles.value.push(response.data.member);
            localStorage.setItem('titles', JSON.stringify(titles.value));
            resolve();
          });
      }	catch (err) {
        reject(err);
      }
    });
  }

	return {
    titles,addMember,fetchTitle
	};
});