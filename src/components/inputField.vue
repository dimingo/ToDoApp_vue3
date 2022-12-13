<script setup>
import { ref, onMounted } from "vue";
import { useTodoListStore } from "../store/useTodoListStore";

const todo = ref("");
const store = useTodoListStore();
const input = ref("input");
onMounted(() => {

  input.value.focus();
})

function addItemAndClear(item) {
  if (item.length === 0) {
    return;
  }
  // invokes function in the store:
  store.addTodo(item);
  todo.value = "";
}
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
    </span>
    <form @submit.prevent="addItemAndClear(todo)" class="w-full flex">
      <input
      ref="input"
        
        v-model="todo"
        type="text"
        placeholder="Create a new todo..."
        class="
          px-3
          py-4
          dark:bg-[color:var(--dark-desaturated-blue)]
          placeholder-slate-500
          dark:placeholder-slate-400
          text-slate-600
          dark:text-white
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
        type="submit"
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