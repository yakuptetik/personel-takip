<script setup>
import { useMemberStore } from '../store/member';
import { ref, onMounted } from 'vue';

import AddMembersModal from '../modals/AddMembersModal.vue';
import MembersRow from '../components/MembersRow.vue';

const isAddMember = ref(false);

let memberStore = useMemberStore();

onMounted(async() => {
    memberStore.fetchMember();
});


</script>

<template>
      <div class="bg-gray-100 h-full w-full p-10 ">
          <div class="flex items-center justify-end">
              <button @click="isAddMember = true" class="bg-blue-500 hover:bg-blue-400 text-white border px-3 py-2 rounded-lg  text-sm">
                Add Members
              </button>          
          </div>
        <div class="mt-4 h-full">
          <div class=" text-2xl py-2 px-3 bg-gray-200 border border-b-transparent rounded-t-xl text-gray-600">
              Members
          </div>
          <div class="w-full  h-[84%] overflow-y-auto bg-gray-100 ">
            <div class="bg-white border-x" v-for="member in memberStore?.members">
              <MembersRow :member="member" />
            </div>
          </div>          
        </div>
      <AddMembersModal v-if="isAddMember" @close-modal="isAddMember = false"/>
    </div>
</template>