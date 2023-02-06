<script setup>
import { ref } from 'vue';
import { useMemberStore } from '../store/member';
import UpdateMember from '../modals/UpdateMember.vue';


const isDeleteLoading = ref(false);
const isUpdateMember = ref(false);

defineProps({
  member: {
    type: Object,
    required: true
  },

});

const memberStore = useMemberStore();

function handleDelete(memberId) {
  isDeleteLoading.value = true
      memberStore.deleteMember(memberId)
        .then(() => {
          isDeleteLoading.value = false
          setTimeout(() => {
            alert('Deleted Successfully...')
          }, 100);
        })
        .catch((err) => {
          alert(err.message);
        });
}

</script>

<template>
  <div class="p-3 text-lg w-full hover:bg-gray-100 border-b flex items-center justify-between group text-gray-600">
      <div>
        {{ member.name }}
      </div>
      <div  class="flex items-center gap-2">

        <div @click="isUpdateMember = true" @keypress="isUpdateMember = true" class="w-4  transform hover:text-green-600 hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </div>

        <div @click="handleDelete(member.id)" class="w-4  transform hover:text-red-700 hover:scale-110">
            <template v-if="isDeleteLoading">
              <div aria-label="Loading..." role="status" class="flex animate-spin items-center justify-center text-red-700 text-base space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
            </template>

            <template v-else>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </template>

        </div> 
        <UpdateMember :member="member" v-if="isUpdateMember" @close-modal="isUpdateMember = false"/>      
      </div>
  </div>
</template>