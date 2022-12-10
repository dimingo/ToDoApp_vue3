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
    <div class="flex w-full mb-5 ">
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

      <img
        v-show="!mode"
        class="cursor-pointer lg:h-8 lg:w-8 sm:w-5 sm:h-5 rounded-full hover:bg-slate-500"
        src="/images/ICON-MOON.SVG"
        alt="moon"
        @click="switchMode(!mode)"
      />
      <img
        v-show="mode"
        class="cursor-pointer lg:h-8 lg:w-8 sm:w-5 sm:h-5 rounded-full hover:bg-slate-500"
        src="/images/ICON-SUN.SVG"
        alt="moon"
        @click="switchMode(!mode)"
      />
    </div>
  </section>
  <input-field  />
  <div class="mt-6">
    <card-list />
  </div>
</template>



