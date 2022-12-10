
<script setup>
const props = defineProps(["todoItem"]);
</script>


<template>
  <button
    v-if="todoItem.completed"
    type="button"
    class="
      h-5
      w-5
      p-1
      bg-gradient-to-tl
      to-blue-400
      via-indigo-400
      from-purple-400
      rounded-full
      text-white
      hover:bg-slate-400
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded-full
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
    "
  >
    <img src="/images/ICON-CHECK.SVG" class="cursor-pointer" />
  </button>
  <button
    v-else
    type="button"
    class="
      font-medium
      text-xs
      leading-tight
      h-5
      w-5
      border
      dark:
      border-slate-600
      hover:bg-gradient-to-tl
      to-blue-400
      via-indigo-400
      from-purple-400
      rounded-full
      dark:
      leading-tight
      uppercase
      rounded-full
      shadow-md
    "
  ></button>
</template>