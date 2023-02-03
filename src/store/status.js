import { ref } from 'vue';
import { defineStore } from 'pinia';
import API from '../utils/API';


export const useStatusStore = defineStore('status', () => {
  
  const statuses = ref([]);

  function fetchStatus() {
    API.get('/statuses')
      .then((response) => {
        statuses.value = response.data.statuses;
      })
      .catch(() => {

      });
  }

  function getStatus(statusId) {
    return statuses.value.find(({ id }) => id === Number(statusId));
  }

	return {
    statuses, fetchStatus, getStatus
	};
});