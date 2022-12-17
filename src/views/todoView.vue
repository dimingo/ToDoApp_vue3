<script setup>
import inputField from "../components/inputField.vue";
import cardList from "../components/cardList.vue";

import { useTodoListStore } from "../store/useTodoListStore";
import { storeToRefs } from "pinia";

const store = useTodoListStore();
const { switchMode } = store;
const { mode } = storeToRefs(store);
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <section class="flex lg:max-w-1/3 sm:w-full">
    <div class="flex w-full mb-5">
      <h1
        class="
          lg:text-4xl
          sm:text-xl
          flex-1
          tracking-widest
          justify-between
          text-white
          uppercase
          
          whitespace-nowrap
        "
      >
        To do
      </h1>

      <div class="bg-cover bg-center">
        <svg
          v-show="!mode"
          class="fill-white hover:fill-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          @click="switchMode(!mode)"
        >
          <path
            
            fill-rule="evenodd"
            d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
          />
        </svg>
      </div>
      <svg
        v-show="mode"
        class="fill-white  hover:fill-blue-200"
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        @click="switchMode(!mode)"
      >
        <path
          
          fill-rule="evenodd"
          d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
        />
      </svg>
    </div>
  </section>
  <input-field />
  <div class="mt-6">
    <card-list />
  </div>
</template>



