<script setup>
import { ref,onMounted} from 'vue'
import { useTodoStore } from '../../store/todo';
import { useProjectStore } from '../../store/project';
import { useStatusStore } from '../../store/status';
import { useMemberStore } from '../../store/member';
import UpdateTable from './UpdateTable.vue';


const projectStore = useProjectStore()
const todoStore = useTodoStore();
const statusStore = useStatusStore()

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
    setTimeout(() => {
      todoStore.deleteTodo( missionId)
        .then(() => {
          alert('Deleted Successfully...')
          
        })
        .catch((err) => {
          alert(err.message);
        });
		}, 1000);
}

</script>

<template>
  <UpdateTable :mission="mission" v-if="isUpdate" />

    <tr v-else class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
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
            {{ mission.member?.title.name }}
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
            <div v-if="mission.delivery_date === null" class="flex items-center pl-3">
              -
            </div> 
            <div v-else class="flex items-center">
              {{ mission?.delivery_date }}
            </div>
        </td>
        <td class="py-3 px-6 text-left">
            <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
              {{ getStatus(mission.status)?.name }}
              </span>
        </td>
        <td class="py-3 px-6 text-left flex items-center justify-end gap-2">
          <button @click="isUpdate = true" class="bg-green-300">
            up
          </button>
          <button @click="handleDelete(mission.id)" class="bg-red-300">
            del
          </button>
        </td>
    </tr>
</template>
