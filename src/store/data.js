import { ref } from 'vue';
import { defineStore } from 'pinia';


export const useToDoStore = defineStore('todo', () => {
  
  const projects = ref([])

  function addProject(payload) {
    projects.value.push(payload);
    localStorage.setItem('projects', JSON.stringify(projects.value));
  }
  

	return {
    todo,addProject
	};
});