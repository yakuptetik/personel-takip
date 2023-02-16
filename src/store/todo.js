import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useProjectStore } from './project';
import API from '../utils/API';

const projectStore = useProjectStore()
export const useTodoStore = defineStore('mission', () => {
  const missions = ref([])


  function filteredTodos(search) {
		if (missions.value && search) {
			return missions.value.filter((mission) => projectStore.getProject(mission?.project)?.name.toLowerCase().includes(search.toLowerCase())
				|| mission.member.name.toLowerCase().includes(search.toLowerCase()));
		}

		return missions.value;
	}

  function sortTodo(sortValues) {
		if (!sortValues.desc) {
			missions.value.sort((a, b) => (a[sortValues.type] > b[sortValues.type] ? 1 : -1));
		} else {
			missions.value.sort((a, b) => (a[sortValues.type] > b[sortValues.type] ? -1 : 1));
		}
	}

  function fetchTodo() {
    API.get('/missions')
      .then((response) => {
        missions.value = response.data.missions;
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

  function deleteTodo(id) {
    return new Promise(async(resolve, reject) => {
      try {
        const response = await API.delete(`missions/${id}` );
        const index = missions.value.findIndex((mission) => mission.id === id);
        if(index !== -1) {
          setTimeout(() => {
            missions.value.splice(index, 1);
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

function updateTodo(mission) {
    return new Promise(async(resolve, reject) => {
      try {
        const response = await  API.put(`/missions/${mission.id}`, mission)
            const index = missions.value.findIndex((msn) => msn.id === mission.id);
            if (index !== -1) {
              missions.value.splice(index, 1, response.data.mission);
              resolve();
            }
            resolve();
      }	catch (err) {
        reject(err);
      }
    });
  }

	return {
    missions, 
    fetchTodo, 
    addTodo, 
    updateTodo, 
    deleteTodo,
    filteredTodos,
    sortTodo
	};
});
