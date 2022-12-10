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
    class="
      dark:bg-[color:var(--dark-desaturated-blue)]
      bg-white
      active:text-blue-500
      hover:text-blue-500
      text-[color:var(--dark-gray-blue)]
      py-2
      px-4
      rounded
    "
    @click="btnClick"
  >
    {{ props.title }}
  </button>
</template>