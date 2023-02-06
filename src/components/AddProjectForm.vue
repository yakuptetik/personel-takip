<script setup>
import { ref, onMounted } from 'vue';
import AddProjectModal from '../modals/AddProjectModal.vue';
import { useProjectStore } from '../store/project';
import ProjectRow from './ProjectRow.vue';

const projectStore = useProjectStore();

const isAddProject = ref(false);



onMounted(() => {
  projectStore.fetchProject();
});

</script>

<template>
    <div class="bg-gray-100 w-full p-10">
        <div class="flex items-center justify-end">
            <button @click="isAddProject = true" class="bg-blue-500 hover:bg-blue-400 text-white border  px-3 py-2 rounded-lg uppercase text-sm">
              Add projects
            </button>          
        </div>
        <div class="mt-4 h-full">
            <div class="uppercase text-2xl py-2 px-3 bg-gray-200 border border-b-transparent rounded-t-xl text-gray-600">
              projects
            </div>
            <div class=" w-full bg-white  border overflow-y-auto">
              <div class=" overflow-y-auto" v-for="project in projectStore.projects">
                  <ProjectRow :project="project"/>
              </div>
            </div>          
        </div>

      <AddProjectModal v-if="isAddProject" @close-modal="isAddProject = false"/>

    </div>
</template>