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

<div class="flex justify-center bg-[#000000c7] fixed items-center pt-5 top-0 bottom-0 right-0 left-0 z-30 pr-10" @click="$emit('close-modal')" @keypress="'close-modal'">
    <form @submit.prevent="handleAdd()" class="bg-white p-4  px-10 rounded-xl" @click.stop>
        <div class="flex items-center justify-between"> 
            <div class="font-medium text-lg text-black">
                Add To-Do
            </div>
            <div class="cursor-pointer" @click="$emit('close-modal')" @keypress="'close-modal'">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;"><path d="m6 6 20 20" /><path d="m26 6-20 20" /></svg>
            </div>        
        </div>
        <div class="flex items-center gap-5 pt-2 ">
          <div>
              <div class="py-3  text-left">
                <select id="countries" class="outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  <option selected>Choose a Project</option>
                  <option value="US">plandy</option>
                  <option value="CA">postify</option>
                  <option value="FR">aura</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div class="py-3 text-left">
                <select id="countries" class="outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  <option selected>Responsible</option>
                  <option value="US">meltem</option>
                  <option value="CA">mehmet</option>
                  <option value="FR">osman</option>
                  <option value="DE">yakup</option>
                </select>
              </div>
              <div class="py-3  text-left cursor-not-allowed">
                <div class="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label for="name" class="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"> Title </label>
                <input type="text" name="name" id="name" class="bg-white outline-none block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm cursor-not-allowed" readonly disabled />
              </div>
              </div>  
          </div>
          
          <div>
            <div class="py-3">
              <div class="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label for="name" class="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"> Actual date </label>
                <input type="date" name="name" id="name" class=" bg-white block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm cursor-not-allowed"/>
              </div>             
            </div>
            <div class="py-3">
              <div class="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label for="name" class="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"> Actual date </label>
                <input type="date" name="name" id="name" class=" bg-white block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm cursor-not-allowed" readonly disabled />
              </div>             
            </div>
            <div class="py-3 text-center">
              <select id="countries" class="bg-white border uppercase border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                  <option selected>Status</option>
                  <option  class="" value="US">To-Do</option>
                  <option value="CA">Backlog</option>
                  <option value="FR">in test</option>
                </select>
            </div>
          </div>
      </div>
      <div class="py-3">
              <div class="relative h-full rounded-md border border-gray-300 focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
                <label for="name" class="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"> Description</label>
                <textarea class="border-none outline-none w-full h-full rounded-md" rows="5" cols="33"/> 
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