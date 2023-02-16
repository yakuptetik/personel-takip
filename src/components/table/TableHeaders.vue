<script setup>
import { useTodoStore } from '../../store/todo';
import { ref } from 'vue';

const todoStore = useTodoStore();

const sort = ref({
	type: 'project',
	desc: false,
});

function handleSort(type) {
	if (sort.value.type !== type) {
		sort.value = { type, desc: false };
	} else {
		sort.value.desc = !sort.value.desc;
	}

	todoStore.sortTodo(sort.value);
}
</script>

<template>
    <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal rounded-2xl w-full">
        <th @click="handleSort('project')" class="py-3 px-6 text-center rounded-tl-xl">
            <div class="flex items-center justify-center">
                project
                <template v-if="sort.type === 'project'">
                    <template v-if="!sort.desc">
                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                    </template>

                    <template v-else>
                        <div class="rotate-180" >
                            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                            </svg>                            
                        </div>

                    </template>
                </template>

                <template v-else>
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z" />
                    </svg>
                </template>
            </div>
        </th>
        <th class="py-3 px-6 text-left">responsible</th>
        <th class="py-3 px-6 text-left">title</th>
        <th class="py-3 px-6 text-left">actions</th>
        <th  @click="handleSort('target_date')" class="py-3 px-6 text-left">
            <div class="flex items-center justify-center">
            target date 
            <template v-if="sort.type === 'target_date'">
                    <template v-if="!sort.desc">
                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                    </template>

                    <template v-else>
                        <div class="rotate-180" >
                            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                            </svg>                            
                        </div>

                    </template>
            </template>

            <template v-else>
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z" />
                </svg>
            </template>
            </div>

        </th>
        <th class="py-3 px-6 text-left">ACTUAL DATE</th>
        <th class="py-3 px-6 text-left">status</th>
        <th class="py-3 px-6 text-left"></th>
    </tr>
</template>