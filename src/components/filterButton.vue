<script setup>
import { defineEmits } from "vue";
const props = defineProps(["title"]);

const emit = defineEmits("filter");
function btnClick() {
  emit("filter");
}
</script>



<template>
  <button
    data-cy="title"
    class="
      dark:bg-[color:var(--dark-desaturated-blue)]
      bg-white
      font-medium
      hover:text-blue-500
      dark:hover:text-blue-500
      text-[color:var(--dark-gray-blue)]
      active:text-blue-dark
      py-2
      px-4
      rounded
    "
    @click="btnClick"
  >
    {{ props.title }}
  </button>
</template>