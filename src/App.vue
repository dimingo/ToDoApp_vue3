<script setup>
import todoView from "./views/todoView.vue";
import { useTodoListStore } from "./store/useTodoListStore";
import { storeToRefs } from "pinia";

const store = useTodoListStore();
const { mode } = storeToRefs(store);

</script>


<template>
  <div class="w-full  " :class="`${mode?'dark': ''}`">
    
    <todoView />

  </div>
  


</template>