<script setup>
import { ref, onMounted } from 'vue'
import { useProjectStore } from '../../store/project';
import { useTodoStore } from '../../store/todo'
import { useMemberStore } from '../../store/member';
import { useUserStore } from '../../store/user';
import { useTitleStore } from '../../store/title';
import { useStatusStore } from '../../store/status';
import moment from 'moment';


const userStore = useUserStore();
const todoStore = useTodoStore();
const memberStore = useMemberStore();
const projectStore = useProjectStore();
const titleStore = useTitleStore();
const statusStore = useStatusStore();

const memberId = ref('');
const projectId = ref(-1);
const title = ref('');
const delivery_date = ref('');
const target_date = ref('');
const description = ref('');
const status = ref('')

const props = defineProps({
  mission: {
    type: Object,
    required: true
  },
});

const isEnterLoading = ref(false);

const emit = defineEmits([
	'close-modal',
]); 

onMounted(() => {
  memberId.value = props.mission.member.id;
  projectId.value = props.mission.project;
  title.value = props.mission.member?.title.name;
  status.value = props.mission.status;
  description.value = props.mission.description;
  target_date.value = moment(props.mission.target_date).format('YYYY-MM-DD');
  delivery_date.value = props.mission.delivery_date ? moment(props.mission.delivery_date).format('YYYY-MM-DD'): null;
});

function addTodo(){
  const newPayload = {
    id: props.mission.id,
    member_id: memberId.value,
    project_id: projectId.value,
    title: title.value,
    target_date: moment(target_date.value).format('YYYY-MM-DD HH:mm:ss'),
    description: description.value,
    status_id: status.value

  };
  isEnterLoading.value = true;
  todoStore.updateTodo(newPayload)
  .then(() => {
    emit('close-modal', true);
    })
  .catch((err) => {
    emit('close-modal', false);
  })
  .finally(() => {
    isEnterLoading.value = false;
  });
}
</script>

<template>
      <tr class="border-b border-gray-200 bg-gray-50 ">
        <td class=" px-6 text-left ">
          <div class="py-3 text-left ">
            <div
              class="relative rounded-md border border-gray-300  py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
              <label for="name"
                class="absolute bg-gray-50 -top-2 left-2 -mt-px inline-block  px-1 text-xs font-medium text-gray-900">
                Projects
              </label>
            <select v-model="projectId"
              class="bg-transparent  border cursor-pointer pl-2 border-gray-300 text-gray-900 text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full outline-none border-none">
              <option v-for="project in projectStore.projects" :value="project.id">{{ project.name }}</option>
            </select>
            </div>
          </div>
        </td>

        <td class=" px-6 text-left ">
          <div class="py-3 text-left ">
            <div
              class="relative rounded-md border border-gray-300  py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
              <label for="name"
                class="absolute bg-gray-50 -top-2 left-2 -mt-px inline-block  px-1 text-xs font-medium text-gray-900">
                Member
              </label>
            <select v-model="memberId"
              class="cursor-pointer bg-transparent bg-white border  border-gray-300 text-gray-900 text-sm pl-2  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full outline-none border-none">
              <option v-for="member in memberStore.members" :value="member.id">{{ member.name }}</option>
            </select>
            </div>
          </div>
        </td>

        <td class=" px-6 text-left">
          <div class="py-3   text-left cursor-not-allowed">
            <div
              class="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
              <label
                for="name"
                class="absolute -top-2 left-2 -mt-px inline-block bg-gray-50 px-1 text-xs font-medium text-gray-900"
              >
                Title
              </label>
              <input
                v-model="title"
                type="text"
                name="name"
                id="name"
                class="bg-transparent outline-none block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm cursor-not-allowed"
                readonly
                disabled
              />
            </div>
          </div>
        </td>

        <td class=" px-6 text-left">
          <div class="py-3">
              <div
                class="relative h-full rounded-md border border-gray-300 focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label for="name"
                  class="absolute -top-2 left-2 -mt-px inline-block bg-gray-50 px-1 text-xs font-medium text-gray-900">
                  Description</label>
                <input v-model="description" class=" bg-transparent border-none outline-none w-full h-full rounded-md p-3" rows="5"
                  cols="33" />
              </div>
            </div>
        </td>

        <td class=" px-6 text-center">
          <div class="text-left">
            <div
              class="relative cursor-pointer rounded-md border border-gray-300 px-2 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
              <label for="name"
                class="absolute bg-gray-50 cursor-pointer -top-2 left-2 -mt-px inline-block  px-1 text-xs font-medium text-gray-900">
                Target date </label>
              <input v-model="target_date" type="date" name="name" id="name"
                class="cursor-pointer bg-transparent border-none outline-none bg-white block w-full border-0  text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" />
            </div>
          </div>
        </td>


        <td class=" px-6 text-center">
          <div class="py-3 text-left">
            <div
              class="relative cursor-pointer rounded-md border border-gray-300 px-2 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
              <label for="name"
                class="absolute bg-gray-50 cursor-pointer -top-2 left-2 -mt-px inline-block  px-1 text-xs font-medium text-gray-900">
                Actaul date </label>
              <input disabled v-model="delivery_date" type="date" name="name" id="name"
                class="cursor-pointer bg-transparent border-none outline-none bg-white block w-full border-0  text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" />
            </div>
          </div>
        </td>

        <td class=" px-6 text-left">
            <div
              class="relative rounded-md border border-gray-300  py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
              <label for="name"
                class="absolute bg-gray-50 -top-2 left-2 -mt-px inline-block  px-1 text-xs font-medium text-gray-900">
                Status
              </label>
            <select v-model="status"
              class="cursor-pointer bg-transparent bg-white border uppercase border-gray-300 text-gray-900 text-sm pl-2  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full outline-none border-none">
              <option v-for="status in statusStore.statuses" :value="status.id">{{ status.name }}</option>
            </select>
            </div>
        </td>

        <td class="py-4 px-5 text-left flex items-center justify-center">
          <div class="flex items-center justify-end">
              <button @click="addTodo()" :disabled='isDisabled' type="submit" class="cursor-pointer ">
                <div class="bg-blue-500 hover:bg-blue-600  rounded-lg px-2 py-1 text-white ">
                  <template v-if="isEnterLoading">
                    <div role="status" class="flex items-center justify-center text-white text-md">
                      <svg class="h-4 w-4 animate-spin stroke-white" viewBox="0 0 256 256">
                        <line x1="128" y1="32" x2="128" y2="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
                        <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
                        <line x1="224" y1="128" x2="192" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
                        <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
                        <line x1="128" y1="224" x2="128" y2="192" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
                        <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
                        <line x1="32" y1="128" x2="64" y2="128" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
                        <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" />
                      </svg>
                      <span class=" text-white">Save</span>
                    </div>
                  </template>

                  <template v-else>
                    <div role="status" class="flex items-center justify-center text-white text-md">
                      <span class=" text-white h-5 flex items-center">Save</span>
                    </div>
                  </template>
                </div>

              </button>  
          </div>

        </td>

      </tr>
</template>