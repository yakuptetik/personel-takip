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
  
            resolve();
          });
      }	catch (err) {
        reject(err);
      }
    });
  }
    function deleteMember(id) {
    return new Promise(async(resolve, reject) => {
      try {
        const response = await API.delete(`members/${id}` );
        const index = members.value.findIndex((member) => member.id === id);
        if(index !== -1) {
          setTimeout(() => {
            members.value.splice(index, 1);
            resolve();
          }, 1500);
        } else {
          reject('error')
        }
      }	catch (err) {
        reject(err);
      }
    });
  }

	return {
    members,
    addMember,
    fetchMember,
    getMember,
    deleteMember
	}
});