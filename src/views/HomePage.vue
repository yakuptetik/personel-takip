<script setup>
import { ref } from 'vue'
import TableHeaders from '../components/table/TableHeaders.vue';
import TableRow from '../components/table/TableRow.vue';
import ToDoModal from '../modals/ToDoModal.vue';

const isModalShow = ref(false);

</script>


<template>

<div class="overflow-x-auto">
        <div class="flex justify-center bg-gray-100 font-sans overflow-hidden">
            <div class="w-full px-10">
              <div class="flex items-center justify-end pt-3">
                  <button @click="isModalShow = true" class="bg-blue-500 border hover:bg-blue-400 text-white px-3 py-2 rounded-lg uppercase text-sm">
                    Add titles
                  </button>          
              </div>
                <div class="bg-white rounded-2xl w-full  my-4">
                    <table class="w-full table-auto rounded-2xl">
                        <thead>
                          <TableHeaders/>
                        </thead>
                        <tbody class="text-gray-600 text-sm font-light overflow-y-auto h-full">
                          <TableRow/>
                        </tbody>
                    </table>
                    <ToDoModal v-if="isModalShow" @close-modal="isModalShow = false"/>
                </div>
            </div>
        </div>
    </div>
</template>