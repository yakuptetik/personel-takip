<script setup>
import { useUserStore } from '../store/user';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();

function logout() {
  userStore.logout().then(() => {
    router.push({ name: 'Login' });
  })
}

</script>
<template>
  <div class="bg-gray-100 flex items-center justify-between max-sm:px-5 px-10  h-20 w-full border-b border-gray-300">
    <div class="flex items-center gap-5">
    <router-link
      to="/"
      class="hover:text-blue-600 hover:border-b hover:border-b-blue-600 hover:border-t hover:border-t-transparent items-center flex justify-center py-2 px-4"
      active-class="text-blue-600 border-b-blue-600 border-b border-t-transparent border-t">
      To-Do List
    </router-link>

    <router-link
      to="/data"
      class="hover:text-blue-600 hover:border-b hover:border-b-blue-600 hover:border-t hover:border-t-transparent items-center flex justify-center py-2 px-4"
      active-class="text-blue-600 border-b-blue-600 border-b border-t-transparent border-t">
      Data Page
    </router-link>      
    </div>


    <button
      @click="logout"
      class="text-white bg-red-600 hover:bg-red-700 focus:ring-4 gap-2 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center ">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="20" width="20">
    <g>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path fill="white" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 0 1 8 4h-2.71a8 8 0 1 0 .001 12h2.71A9.985 9.985 0 0 1 12 22zm7-6v-3h-8v-2h8V8l5 4-5 4z"/>
    </g>
</svg>
</button>
  </div>
</template>
