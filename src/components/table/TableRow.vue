<script setup>
import { onMounted} from 'vue'
import { useTodoStore } from '../../store/todo';
import { useProjectStore } from '../../store/project';
import { useStatusStore } from '../../store/status';


const projectStore = useProjectStore()
const todoStore = useTodoStore();
const statusStore = useStatusStore()

function getProject(projectId) {
  return projectStore.getProject(projectId);
}

function getStatus(statusId) {
  return statusStore.getStatus(statusId);
}

onMounted(() => {
  todoStore.fetchTodo();
});

</script>

<template>
    <tr v-for="mission in todoStore.missions" class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="py-3 px-6 text-left">
          <div class="flex items-center">
            <span class="font-medium"> 
              {{ getProject(mission.project).name }}
            </span>
          </div>
        </td>
        <td class="py-3 px-6 text-left">
          <div>
            {{ mission.member?.title.name }}
          </div>
        </td>
        <td class="py-3 px-6 text-left">
            <div>
              {{ mission.member?.name }}
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
            <div class="flex items-center">
              {{ mission.delivery_date }}
            </div>
            <div v-if="mission.delivery_date === null" class="flex items-center pl-3">
              -
            </div>
        </td>
        <td class="py-3 px-6 text-left">
            <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
              {{ getStatus(mission.status).name }}
              </span>
        </td>
    </tr>

  <!-- EDİT ROW -->
    <!-- <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
        <td class="py-3 px-6 text-left">
            <div class="flex items-center">
                <span class="font-medium">Plandy</span>
            </div>
        </td>
        <td class="py-3 px-6 text-left">
        <div>Front-End</div>
        </td>
        <td class="py-3 px-6 text-left">
          <div>
            mehmet
          </div>
        </td>
        <td class="py-3 px-6 text-left">
          <div>sddvdsdwfewdqsdwfewds </div>
        </td>
        <td class="py-3 px-6 text-center">
            <div class="flex items-center">
              12/12/2023
            </div>
        </td>
        <td class="py-3 px-6 text-center">
            <div class="flex items-center">
              12/12/2023
            </div>
        </td>
        <td class="py-3 px-6 text-left">
            <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Completed</span>
        </td>
    </tr> -->

</template>