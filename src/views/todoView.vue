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
  <section class="py-6 min-w-[600px] flex max-w-1/3 items-start mt-6">
    <div class="flex items-start w-full">
      <h1
        class="
          text-4xl
          font-semibold
          flex-1
          tracking-widest
          justify-between
          text-white
          uppercase
        "
      >
        Todo
      </h1>
      <img
      v-show="!mode"
        class="moon cursor-pointer py-4"
        src="/images/ICON-MOON.SVG"
        alt="moon"
        @click="switchMode(!mode)"
      />
      <img
      v-show="mode"
        class="moon cursor-pointer py-4"
        src="/images/ICON-SUN.SVG"
        alt="moon"
        @click="switchMode(!mode)"
      />
    </div>
  </section>
  <input-field />
  <div class="mt-6">
    <card-list />
  </div>
</template>



