import { ref } from 'vue';
import { defineStore } from 'pinia';


export const useToDoStore = defineStore('todo', () => {
  const todo = ref([])


	return {
    todo
	};
});
