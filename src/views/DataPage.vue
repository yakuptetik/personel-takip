<script setup>
import AddProjectForm from '../components/AddProjectForm.vue'
import AddTitlesForm from '../components/AddTitlesForm.vue';
import AddMembersForm from '../components/AddMembersForm.vue';


</script>


<template>
  <div class="flex h-full justify-between  w-full bg-gray-50 ">
      <AddProjectForm/>
      <AddTitlesForm/>
      <AddMembersForm/>
  </div>
</template>