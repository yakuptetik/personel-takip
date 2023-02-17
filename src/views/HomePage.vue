<script setup>
import { ref, onMounted } from 'vue'
import { useProjectStore } from '../store/project';
import { useTodoStore } from '../store/todo'
import { useMemberStore } from '../store/member';
import { useUserStore } from '../store/user';
import { useTitleStore } from '../store/title';
import { useStatusStore } from '../store/status';
import TableHeaders from '../components/table/TableHeaders.vue';
import TableRow from '../components/table/TableRow.vue';
import ToDoModal from '../modals/ToDoModal.vue';

const isModalShow = ref(false);
const search = ref('');

const userStore = useUserStore();
const todoStore = useTodoStore();
const memberStore = useMemberStore();
const projectStore = useProjectStore();
const titleStore = useTitleStore();
const statusStore = useStatusStore();

onMounted(() => {
  if(userStore.isAuth) {
    todoStore.fetchTodo();
    titleStore.fetchTitle();
    memberStore.fetchMember();
    projectStore.fetchProject();
    statusStore.fetchStatus();
  }
});

</script>

<template>
  <div class="">
    <div class="flex justify-center bg-gray-100 font-sans overflow-hidden">
      <div class="w-full max-sm:px-5 px-10">
        <div class="flex items-center justify-between pt-3">
          <div class="flex items-center">
            <input
              v-model="search"
              class="flex border h-9 pl-5 shadow-md text-sm items-center justify-center rounded-lg outline-none focus:outline focus:outline-indigo-400"
              type="text"
              autocomplete="off"
              name="search"
              placeholder="Search..."
            />
          </div>
          <div> 
            <button  @click="isModalShow = true" class="bg-blue-500 border hover:bg-blue-400 text-white px-3 py-2 rounded-lg uppercase text-sm">
                Add To-Do
            </button>      
          </div>
        </div>
        <div class="bg-white rounded-2xl w-full my-4  overflow-x-auto">
            <table class="w-full table-auto rounded-2xl">
                <thead class="w-full">
                  <TableHeaders/>
                </thead>
                <tbody class="text-gray-600 text-sm font-light overflow-y-auto h-full w-full">
                  <TableRow v-for="mission in todoStore.filteredTodos(search)" :key="mission.id + 'project'" :mission="mission"/>
                </tbody>
            </table>
            <ToDoModal :projects="projectStore.projects" :members="memberStore.members" :missions="todoStore.missions" v-if="isModalShow" @close-modal="isModalShow = false"/>
        </div>
      </div>
    </div>
  </div>
</template>