<script setup>
import { ref } from 'vue';
import TableRow from '../components/table/TableRow.vue';



const isEnterLoading = ref(false);

const emit = defineEmits([
	'close-modal',
]);


function handleAdd() {
	isEnterLoading.value = true;

}
</script>

<template>

<div class="flex justify-center bg-[#00000086]  fixed items-center pt-5 top-0 bottom-0 right-0 left-0 z-30 pr-10" @click="$emit('close-modal')" @keypress="'close-modal'">
    <form @submit.prevent="handleAdd()" class="bg-white p-4  px-10 rounded-xl" @click.stop>
        <div class="flex items-center justify-between"> 
            <div class="font-medium text-lg text-black">
                Add To-Do
            </div>
            <div class="cursor-pointer" @click="$emit('close-modal')" @keypress="'close-modal'">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;"><path d="m6 6 20 20" /><path d="m26 6-20 20" /></svg>
            </div>        
        </div>
        <div class=" border-gray-200 flex items-center gap-5 pt-2 ">
          <div class="py-3  text-left">
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option selected>Choose a Project</option>
              <option value="US">plandy</option>
              <option value="CA">postify</option>
              <option value="FR">aura</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div class="py-3  text-left">
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option selected>Title</option>
              <option value="US">Front-End</option>
              <option value="CA">Back-End</option>
              <option value="FR">Graphic Design</option>
            </select>
          </div>
          <div class="py-3  text-left">
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option selected>Responsible</option>
              <option value="US">meltem</option>
              <option value="CA">mehmet</option>
              <option value="FR">osman</option>
              <option value="DE">yakup</option>
            </select>
          </div>
          <div class="bg-gray-50  border border-gray-400 rounded-lg ">
            <input class="p-2 rounded-lg " type="text" placeholder="actions...">
          </div>
          <div class=" bg-gray-50 border border-gray-400 rounded-lg">
            <input class="p-2 rounded-lg " type="date" >
          </div>
          <div class="bg-gray-50  border border-gray-400 rounded-lg ">
            <input class="p-2 rounded-lg " type="date" >
          </div>

        <div class="py-3 text-center">
          <select id="countries" class="bg-gray-50 border uppercase border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option selected>Status</option>
              <option  class="bg-red-600" value="US">To-Do</option>
              <option value="CA">Backlog</option>
              <option value="FR">in test</option>
            </select>
        </div>
      </div>
      <div class="flex items-center justify-end ">
          <button @click="isModalShow = true" class="bg-gray-200 border border-gray-400 px-3 py-2 rounded-lg uppercase text-sm">
            save
          </button>          
      </div>
    </form>
  </div>
</template>