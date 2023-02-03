<script setup>
import { ref, onMounted } from 'vue';
import { useMemberStore } from '../store/member';
import { useTodoStore } from '../store/todo'
import { useProjectStore } from '../store/project';
import moment from 'moment';

const todoStore = useTodoStore()
const isEnterLoading = ref(false);
const projectStore = useProjectStore();

const member = ref('');
const projectId = ref(-1);
const title = ref('');
const actualDate = ref('');
const target_date = ref('');
const description = ref('');

const emit = defineEmits([
  'close-modal',
]);

defineProps({
  missions: Object,
  members: Object,
  projects: Object
});

let memberStore = useMemberStore();

onMounted(async () => {
  memberStore.fetchMember();
  projectStore.fetchProject();
});

function onMemberChange(member) {
  title.value = member.title.name;
}

function handleAdd() {
  isEnterLoading.value = true;

  const payload = {
    member_id: member.value.id,
    project_id: projectId.value,
    title: title.value,
    actualDate: actualDate.value,
    target_date: moment(target_date.value).format('YYYY-MM-DD HH:mm:ss'),
    description: description.value
  };

  todoStore.addTodo(payload)
    .then(() => {
      setTimeout(() => {
        alert('Created')
      }, 550)
      setTimeout(() => {
        emit('close-modal');
      }, 500)
    })
    .catch((err) => {
      alert(err.message);
    });
}
</script>

<template>

  <div class="flex justify-center bg-[#000000c7] fixed items-center pt-5 top-0 bottom-0 right-0 left-0 z-30 pr-10"
    @click="$emit('close-modal')" @keypress="'close-modal'">
    <form @submit.prevent="handleAdd()" class="bg-white p-4  px-10 rounded-xl" @click.stop>
      <div class="flex items-center justify-between">
        <div class="font-medium text-lg text-black">
          Add To-Do
        </div>
        <div class="cursor-pointer" @click="$emit('close-modal')" @keypress="'close-modal'">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
            focusable="false"
            style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;">
            <path d="m6 6 20 20" />
            <path d="m26 6-20 20" />
          </svg>
        </div>
      </div>
      <div class="flex items-center gap-5 pt-2 ">
        <div class="w-full">

          <div class="py-3 text-left ">
            <div
              class="relative rounded-md border border-gray-300  py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
              <label for="name"
                class="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900">
                Projects
              </label>
            <select v-model="projectId"
              class="bg-white border cursor-pointer pl-2 uppercase border-gray-300 text-gray-900 text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full outline-none border-none">
              <option v-for="project in projects" selected :value="project.id">{{ project.name }}</option>
            </select>
            </div>
          </div>

          <div class="py-3 text-left">
            <div
              class="relative rounded-md border border-gray-300  py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
              <label for="name"
                class="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900">
                Member
              </label>
            <select v-model="member" @change="onMemberChange(member)"
              class="cursor-pointer bg-white border uppercase border-gray-300 text-gray-900 text-sm pl-2  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full outline-none border-none">
              <option v-for="member in members" :value="member">{{ member.name }}</option>
            </select>
            </div>
          </div>

        </div>

        <div class="w-full">
          <div class="py-3 text-left">
            <div
              class="relative cursor-pointer rounded-md border border-gray-300 px-2 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
              <label for="name"
                class="absolute cursor-pointer -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900">
                Target date </label>
              <input v-model="target_date" type="date" name="name" id="name"
                class="cursor-pointer border-none outline-none bg-white block w-full border-0  text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm" />
            </div>
          </div>

          <div class="py-3  text-left cursor-not-allowed">
            <div
              class="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
              <label
                for="name"
                class="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
              >
                Title
              </label>
            
              <input
                v-model="title"
                type="text"
                name="name"
                id="name"
                class="bg-white outline-none block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm cursor-not-allowed"
                readonly
                disabled
              />
            </div>
          </div>

        </div>

      </div>
      <div class="py-3">
        <div
          class="relative h-full rounded-md border border-gray-300 focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
          <label for="name"
            class="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900">
            Description</label>
          <textarea v-model="description" class="border-none outline-none w-full h-full rounded-md p-3" rows="5"
            cols="33" />
        </div>
      </div>
      <div class="flex items-center justify-end mt-3 ">
        <button @click="isModalShow = true" class="bg-blue-500 text-white px-3 py-2 rounded-lg uppercase text-sm">
          save
        </button>
      </div>
    </form>
  </div>
</template>