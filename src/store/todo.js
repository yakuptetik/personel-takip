import { ref } from 'vue';
import { defineStore } from 'pinia';
import API from '../utils/API';


export const useTodoStore = defineStore('mission', () => {
  const missions = ref([])


  function fetchTodo() {
    API.get('/missions')
      .then((response) => {
        missions.value = response.data.missions;
        console.log('missions')
      })
      .catch(() => {

      });
  }

  function addTodo(mission) {
    return new Promise((resolve, reject) => {
      try {
        API.post('/missions', mission)
          .then((response) => {
            missions.value.push(response.data.mission);
            localStorage.setItem('missions', JSON.stringify(missions.value));
            resolve();
          });
      }	catch (err) {
        reject(err);
      }
    });
  }

	return {
    missions, fetchTodo, addTodo
	};
});
