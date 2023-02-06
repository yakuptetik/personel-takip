
<script setup>
import { ref } from 'vue';
import { useUserStore } from '../store/user'

const userStore = useUserStore()

function handleLogin(){
  userStore.loginUser({ 
        email: email.value,
        password: password.value,
    })
}

const password = ref('')
const email = ref('')

</script>

<template>
<section class=" flex  flex-col items-center justify-center h-[100%]">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-full lg:py-0">
      <div class="w-full bg-gray-50 rounded-lg shadow shadow-black border-gray-800 md:mt-0 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div class="text-xl font-bold leading-tight tracking-tight text-gray-800 md:text-2xl flex items-center justify-center">
                ronadmin@email.com
                RonAdminPass
              </div>
              <form @submit.prevent="handleLogin()" class="space-y-4 md:space-y-6">
                  <div class="flex flex-col">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-800">
                      Your email
                    </label>
                    <input 
                        required
                        v-model="email"
                        placeholder="Your mail address" 
                        type="email" 
                        name="email" 
                        id="email"
                        class="disabled:bg-slate-50 disabled:text-white disabled:border-slate-200 disabled:shadow-none
                              invalid:border-blue-500 invalid:text-gray-900  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                              focus:invalid:border-blue-500 focus:invalid:ring-blue-500  border border-gray-300 text-gray-900 sm:text-sm
                              rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
                  </div>

                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">
                        Password
                      </label>
                      <input 
                        required
                        v-model="password" 
                        placeholder="************" 
                        type="password" 
                        name="password" 
                        id="password"
                        class="disabled:bg-slate-50 disabled:text-white disabled:border-slate-200 disabled:shadow-none
                              invalid:border-blue-500 invalid:text-blue-600  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                              focus:invalid:border-blue-500 focus:invalid:ring-blue-500 border border-gray-300 text-gray-900 sm:text-sm
                              rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
                  </div>

                  <button type="submit" class="w-full  bg-blue-600 hover:bg-blue-700 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
              </form>
          </div>
      </div>
  </div>
</section>
</template>
