<script setup>
import { useMemberStore } from '../store/member';
import { ref, onMounted } from 'vue';

import AddMembersModal from '../modals/AddMembersModal.vue';
import UpdateMember from '../modals/UpdateMember.vue';

const isAddMember = ref(false);
const isUpdateMember = ref(false);
let memberStore = useMemberStore();

onMounted(async() => {
    memberStore.fetchMember();
});

</script>

<template>
      <div class="bg-gray-100 h-full w-full p-10 ">
          <div class="flex items-center justify-end">
              <button @click="isAddMember = true" class="bg-blue-500 hover:bg-blue-400 text-white border px-3 py-2 rounded-lg uppercase text-sm">
                Add members
              </button>          
          </div>
        <div class="mt-4 h-full">
          <div class="uppercase text-2xl py-2 px-3 bg-gray-200 border border-b-transparent rounded-t-xl text-gray-600">
              members
          </div>
          <div class=" w-full h-[83%] bg-white  border overflow-y-auto">
            <div class=" overflow-y-auto" v-for="member in memberStore?.members">
              <div class="p-3 text-lg uppercase w-full hover:bg-gray-100 border-b flex items-center justify-between group text-gray-600">
                <div>
                  {{ member.name }}
                </div>
                <div @click="isUpdateMember = true" class="flex items-center gap-2">
                  <div  class="group-hover:opacity-100 opacity-0 cursor-pointer text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Zm8.99-5L19.415,9c-.008-.022-.036-.107-.046-.129l1.11-1.11a2.011,2.011,0,0,0,0-2.842l-1.4-1.4a2,2,0,0,0-1.421-.588h0a2,2,0,0,0-1.419.588L15.07,4.612,15,4.58V3.009A2.011,2.011,0,0,0,12.99,1H11.01A2.011,2.011,0,0,0,9,3.009L9,4.566l-.086.049-.043.016L7.765,3.522a2,2,0,0,0-1.42-.589h0a2,2,0,0,0-1.421.588l-1.4,1.4a2.011,2.011,0,0,0,0,2.842l1.1,1.143c-.013.029-.033.063-.043.093H3.01A2.011,2.011,0,0,0,1,11.009v1.982A2.011,2.011,0,0,0,3.01,15l1.575,0c.008.022.036.107.046.129l-1.11,1.11a2.011,2.011,0,0,0,0,2.842l1.4,1.4a2.059,2.059,0,0,0,2.842,0l1.115-1.115c.022.011.1.047.121.056v1.571A2.011,2.011,0,0,0,11.01,23h1.98A2.011,2.011,0,0,0,15,20.991l0-1.557.129-.065,1.109,1.109a2.058,2.058,0,0,0,2.843,0l1.4-1.4a2.011,2.011,0,0,0,0-2.842l-1.1-1.143c.013-.029.033-.063.043-.093H20.99A2.011,2.011,0,0,0,23,12.991V11.009A2.011,2.011,0,0,0,20.99,9Zm0,4H19.421a2.1,2.1,0,0,0-1.466,3.54l1.109,1.124-1.414,1.4-1.11-1.109A2.1,2.1,0,0,0,13,19.42L12.99,21,11,20.991V19.42a2.043,2.043,0,0,0-1.307-1.881,2.138,2.138,0,0,0-.816-.164,2,2,0,0,0-1.417.58L6.336,19.064l-1.4-1.414,1.108-1.108A2.1,2.1,0,0,0,4.579,13L3,12.991,3.01,11H4.579A2.1,2.1,0,0,0,6.045,7.46L4.936,6.336l1.414-1.4L7.46,6.045a2.04,2.04,0,0,0,2.227.419l.018-.007A2.04,2.04,0,0,0,11,4.58L11.01,3,13,3.009V4.58a2,2,0,0,0,1.227,1.845c.026.013.057.027.087.039a2.038,2.038,0,0,0,2.226-.419l1.124-1.109,1.4,1.414L17.956,7.458A2.1,2.1,0,0,0,19.421,11H20.99l.01.009Z"/>
                    </svg>
                  </div>  
                  <div class="group-hover:opacity-100 opacity-0 cursor-pointer text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" height="20" width="20">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </div>            
                </div>
              </div>
            </div>
          </div>          
        </div>
      <AddMembersModal v-if="isAddMember" @close-modal="isAddMember = false"/>
      <UpdateMember v-if="isUpdateMember" @close-modal="isUpdateMember = false"/>
    </div>
</template>