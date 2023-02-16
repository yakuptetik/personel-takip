<script setup>
import { ref,onMounted} from 'vue'
import { useTodoStore } from '../../store/todo';
import { useProjectStore } from '../../store/project';
import { useStatusStore } from '../../store/status';
import UpdateTable from './UpdateTable.vue';


const projectStore = useProjectStore()
const todoStore = useTodoStore();
const statusStore = useStatusStore()

const isDeleteLoading = ref(false);

defineProps({
  mission: {
    type: Object,
    required: true
  },

});

const isUpdate = ref(false)

function getProject(projectId) {
  return projectStore.getProject(projectId);
}

function getStatus(statusId) {
  return statusStore.getStatus(statusId);
}


onMounted(() => {
  todoStore.fetchTodo();
  projectStore.fetchProject();
});

function handleDelete(missionId) {
  isDeleteLoading.value = true;
  todoStore.deleteTodo( missionId)
        .then(() => {
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
  <UpdateTable :mission="mission" v-if="isUpdate" @close-modal="isUpdate = false"/>

    <tr v-else class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100 w-full">
        <td class="py-3 px-6 text-left">
          <div class="flex items-center">
            <span class="font-medium"> 
              {{ getProject(mission?.project)?.name }}
            </span>
          </div>
        </td>
        <td class="py-3 px-6 text-left">
            <div>
              {{ mission.member?.name }}
            </div>
        </td>
        <td class="py-3 px-6 text-left">
          <div>
            {{ mission?.member?.title.name }}
          </div>
        </td>
        <td class="py-3 px-6 text-left">
            <div> 
              {{mission.description }}
            </div>
        </td>
        <td class="py-3 px-6 text-center">
            <div class="flex items-center">
              {{ mission.target_date }} 
            </div>
        </td>
        <td class="py-3 px-6 text-center">            
            <div v-if="mission.delivery_date !== null" class="flex items-center">
              {{ mission.delivery_date }}
            </div>
            <div v-if="mission.delivery_date === null" class="flex items-center pl-3">
              -
            </div> 
        </td>
        <td class="py-3 px-6 text-left">
            <span class="py-1 px-3 rounded-full text-xs text-white" :class="mission.status === 1 ? 'bg-yellow-500' : '' || mission.status === 2 ? 'bg-orange-500' : '' || mission.status === 1 ? 'bg-green-500' : '' || mission.status === 3 ? 'bg-blue-500' : '' || mission.status === 4 ? 'bg-green-500' : '' || mission.status === 5 ? 'bg-red-500' : ''">
              {{ getStatus(mission.status)?.name }}
              </span>
        </td>
        <td class="py-3 px-6">
          <div class="flex items-center justify-end gap-2">
            <div @click="isUpdate = true" class="w-4  transform hover:text-green-600 hover:scale-110 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <div @click="handleDelete(mission.id)" class="w-4 mr-2 transform hover:text-red-700 hover:scale-110 flex items-center">
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
          </div>
        </td>
    </tr>
</template>
