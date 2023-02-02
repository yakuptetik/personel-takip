<script setup>
import { ref } from 'vue';


const name = ref('')

const isEnterLoading = ref(false);

const emit = defineEmits([
	'close-modal',
]);


function handleAdd() {
	isEnterLoading.value = true;
}
</script>

<template>

<div class="flex justify-center bg-[#00000086]  fixed items-center pt-5 top-0 bottom-0 right-0 left-0 z-30" @click="$emit('close-modal')" @keypress="'close-modal'">
    <form @submit.prevent="handleAdd()" class="bg-white p-4  mx-4 rounded-xl" @click.stop>
        <div class="flex items-center justify-between"> 
            <div class="font-medium text-lg text-black">
                Add Title
            </div>
            <div class="cursor-pointer" @click="$emit('close-modal')" @keypress="'close-modal'">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;"><path d="m6 6 20 20" /><path d="m26 6-20 20" /></svg>
            </div>        
        </div>
        <div class="flex items-center justify-center gap-10 mt-3">
            <div class="w-full">
            <input
              required
              v-model="name"
              type="text"
              placeholder="Title..."
              class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            >
          </div>

      <button type="submit" class="cursor-pointer ">
        <div class="bg-blue-500 hover:bg-blue-600  rounded-lg px-3 py-2 text-white ">
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
    </form>
  </div>
</template>