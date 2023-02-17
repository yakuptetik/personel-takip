<script setup>
import Navbar from './components/Navbar.vue';
import { useUserStore } from './store/user';

const userStore = useUserStore();
</script>

<template>
  <div class="h-screen  bg-gray-100  w-screen">
  <Navbar v-if="userStore.isAuth"/>
  <router-view/>   
  </div>

</template>


