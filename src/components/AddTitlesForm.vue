<script setup>
import { ref, onMounted } from 'vue';
import { useTitleStore } from '../store/title';
import AddTitlesModal from '../modals/AddTitlesModal.vue';
import TitleRow from './TitleRow.vue';

const titleStore = useTitleStore();


const isAddTitle = ref(false);

onMounted(() => {
  titleStore.fetchTitle();
});


</script>

<template>
  <div class="bg-gray-100 w-full p-10 ">
      <div class="flex items-center justify-end">
          <button @click="isAddTitle = true" class="bg-blue-500 hover:bg-blue-400 text-white border  px-3 py-2 rounded-lg uppercase text-sm">
            Add titles
          </button>          
      </div>
      <div class="mt-4 h-full">
          <div class="uppercase text-2xl py-2 px-3 bg-gray-200 border border-b-transparent rounded-t-xl text-gray-600">
            titles
          </div>
          <div class=" w-full bg-white  border overflow-y-auto">
            <div class=" overflow-y-auto" v-for="title in titleStore.titles">
              <TitleRow :title="title"/>
            </div> 
          </div>          
      </div>
    <AddTitlesModal v-if="isAddTitle" @close-modal="isAddTitle = false"/>
  </div>
</template>