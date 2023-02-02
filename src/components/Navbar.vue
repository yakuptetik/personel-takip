<script setup>

</script>
<template>
  <div class="bg-gray-100 flex items-center justify-center gap-10 h-20 w-full border-b border-gray-300">
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
</template>
