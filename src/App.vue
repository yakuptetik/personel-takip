<script setup>
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="h-screen pb-20 bg-gray-100  w-screen">
  <Navbar/>
  <router-view/>   
  </div>

</template>


