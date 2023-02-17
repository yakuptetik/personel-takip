<script setup>
import AddProjectForm from '../components/AddProjectForm.vue';
import AddTitlesForm from '../components/AddTitlesForm.vue';
import AddMembersForm from '../components/AddMembersForm.vue';


</script>


<template>
  <div class="lg:flex h-full lg:justify-between w-full bg-gray-50 pb-20 ">
      <AddProjectForm />
      <AddTitlesForm/>
      <AddMembersForm/>
  </div>
</template>