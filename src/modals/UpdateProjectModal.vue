<script setup>
import { ref,onMounted } from 'vue';
import {useProjectStore} from '../store/project';

const projectStore = useProjectStore();

const name = ref('');
const description = ref('');

const isDisabled = ref(false)

const props = defineProps({
	project: Object
});


onMounted(() => {
	if (props.project) {
		name.value = props.project.name;
    description.value = props.project.description;
	}
});


const isEnterLoading = ref(false);

const emit = defineEmits([
	'close-modal',
]);


function handleUpdate() {
	isEnterLoading.value = true;
  isDisabled.value = true
	projectStore.updateProject({ 
    id: props.project.id,
    name: name.value,
    description: description.value,
  })  
		.then(() => {
        emit('close-modal');
        setTimeout(() => {
        alert('updated...');
      }, 100)
		})
		.catch((err) => {
      console.log(err);
      setTimeout(() => {
        alert(err);
      }, 100)
      emit('close-modal');
		});
}

</script>

<template>

<div class="flex justify-start bg-[#000000c7]  fixed items-center pt-5 top-0 bottom-0 right-0 left-0 z-30 " @click="$emit('close-modal')" @keypress="'close-modal'">
    <form @submit.prevent="handleUpdate()" class="bg-white p-4  mx-4 rounded-xl" @click.stop>
        <div class="flex items-center justify-between"> 
            <div class="font-medium text-lg text-black">
              Update Project "{{ project.name }}"
            </div>
            <div class="cursor-pointer" @click="$emit('close-modal')" @keypress="'close-modal'">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;"><path d="m6 6 20 20" /><path d="m26 6-20 20" /></svg>
            </div>        
        </div>
        <div class="">
          <div class="flex items-center justify-center gap-3 mt-3">
              <div class="py-3 text-left w-full">
                <div
                  class="relative rounded-md border border-gray-300  shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                  <label for="name"
                    class="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900">
                    Project
                  </label>
                  <input
                required
                v-model="name"
                type="text"
                class="border-none rounded-md outline-none px-3 py-1.5  w-full "
              > 
                </div>
              </div>

              <div class="py-3 text-left w-full">
                <div
                  class="relative rounded-md border border-gray-300  shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
                  <label for="name"
                    class="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900">
                    Description
                  </label>
                  <input
                required
                v-model="description"
                type="text"
                class="border-none rounded-md outline-none px-3 py-1.5  w-full "
              > 
                </div>
              </div>         
          </div>
          <div class="flex items-center justify-end">
            <button :disabled='isDisabled' type="submit" class="cursor-pointer ">
                <div class="bg-blue-500 hover:bg-blue-600  rounded-lg px-4 py-2 text-white ">
                  <template v-if="isEnterLoading">
                    <div role="status" class="flex items-center justify-center text-white text-md space-x-2">
                      <svg class="h-6 w-6 animate-spin stroke-white" viewBox="0 0 256 256">
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
                    <div role="status" class="flex items-center justify-center text-white text-md space-x-2">
                      <span class=" text-white h-6 flex items-center">Save</span>
                    </div>
                  </template>
                </div>

            </button>        
          </div>


        </div>
    </form>
  </div>
</template>