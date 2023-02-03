import { ref } from 'vue';
import { defineStore } from 'pinia';
import API from '../utils/API';


export const useMemberStore = defineStore('member', () => {
  
  const members = ref([]);

  function fetchMember() {
    API.get('/members')
      .then((response) => {
        members.value = response.data.members;
        console.log('members')
        localStorage.setItem('members', JSON.stringify(members.value));
      })
      .catch(() => {

      });
  }

  function getMember(memberId) {
    const member = members.value.find(({ id }) => id === Number(memberId));
    return member ? member : null;
  }

  function addMember(member) {
    return new Promise((resolve, reject) => {
      try {
        API.post('/members', member)
          .then((response) => {
            members.value.push(response.data.member);
            localStorage.setItem('members', JSON.stringify(members.value));
            resolve();
          });
      }	catch (err) {
        reject(err);
      }
    });
  }

	return {
    members,
    addMember,
    fetchMember,
    getMember
	}
});