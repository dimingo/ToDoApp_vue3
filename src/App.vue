<script setup>
import todoView from "./views/todoView.vue";
import { useTodoListStore } from "./store/useTodoListStore";
import { storeToRefs } from "pinia";

const store = useTodoListStore();
const { mode } = storeToRefs(store);
</script>


<template>
  <div :class="`${mode ? 'dark' : 'light'}`">
    <div
      class="
        py-8
        dark:bg-[color:var(--dark-blue)]
        fixed
        main
        lg:bg-hero
        bg-slate-100
        lg:dark:bg-hero-dark
        sm:bg-hero-mobile sm:dark:bg-hero-mobile-dark
        w-full
        h-full
      "
    >
      <div class="lg:w-3/6 px-auto my-8 sm:w-full sm:px-6">
        <todoView />
      </div>
    </div>
  </div>
</template>