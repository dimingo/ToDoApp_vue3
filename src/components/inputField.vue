<script setup>
import { ref } from "vue";
import { useTodoListStore } from "../store/useTodoListStore";

const todo = ref("");
const store = useTodoListStore();

function addItemAndClear(item){
  if (item.length === 0) {
    return;
  }
  // invokes function in the store:
  store.addTodo(item);
  todo.value = "";
};
</script>


<template>
  <div class="relative flex w-full items-stretch mb-3">
    <span
      class="
        z-10
        h-full
        leading-snug
        font-normal
        absolute
        text-center text-slate-300
        absolute
        bg-transparent
        rounded
        text-base
        items-center
        justify-center
        w-8
        pl-3
        py-3
      "
    >
      <i class="fas fa-lock"></i>
    </span>
    <form @submit.prevent="addItemAndClear(todo)" class="w-full flex">
      <input
        v-model="todo"
        type="text"
        placeholder="Placeholder"
        class="
          px-3
          py-4
          placeholder-slate-300
          text-slate-600
          relative
          bg-white bg-white
          rounded-l
          text-sm
          border-0
          shadow
          outline-none
          focus:outline-none focus:ring
          w-full
          pl-10
        "
      />

      <button
        class="
          bg-gradient-to-tr
          from-indigo-500
          via-purple-500
          to-pink-500
          hover:via-purple-300
          font-bold
          uppercase
          text-xs
          px-4
          py-2
          rounded-r
          shadow
          text-white
          hover:shadow-md
          outline-none
          focus:outline-none
          ease-linear
          transition-all
          duration-150
        "
      >
        add
      </button>
    </form>
  </div>
</template>