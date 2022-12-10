<script setup>
import radioBtn from "./radioButton.vue";
import filterBtn from "./filterButton.vue";
import { useTodoListStore } from "../store/useTodoListStore";
import { storeToRefs } from "pinia";
import { reactive, computed } from "vue";

const store = useTodoListStore();
const { todoList } = storeToRefs(store);
const { toggleCompleted } = store;
const { deleteCompleted } = store;
const state = reactive({ category: "all" });

const filteredTasks = computed(() => {
  return state.category === "all"
    ? todoList.value
    : todoList.value.filter((todoList) => todoList.completed == state.category);
});
const leftItems = computed(() =>
  todoList.value.filter((todoList) => todoList.completed != true)
);

function deleteTask(index) {
  store.deleteTodo(index);
}
</script>


<template>
  <div class="lg:flex justify-center">
    <div
      class="
        block
        rounded-lg
        shadow-lg
        dark:bg-[color:var(--dark-desaturated-blue)]
        bg-white
        w-full
        text-start
      "
    >
      <div
        class="
          relative
          rounded
          hover:bg-slate-200 hover:text-slate-600
          py-3
          px-6
          border-b border-gray-300
          flex flex-row
          dark:border-slate-700 dark:hover:bg-gray-100 dark:text-slate-500
        "
        v-for="todo in filteredTasks"
        :key="todo.id"
        :class="{ completed: todo.completed }"
      >
        <radio-btn
          class="m-2"
          :todoItem="todo"
          @click.stop="toggleCompleted(todo.id)"
        ></radio-btn
        ><span class="p-2">{{ todo.item }}</span>

        <button
          class="
            bg-white
            dark:
            bg-transparent
            text-gray-800
            font-medium
            p-3
            rounded-full
            px-auto
            absolute
            right-4
          "
          @click="deleteTask(todo.id)"
        >
          <img src="/images/ICON-CROSS.SVG" />
        </button>
      </div>

      <div class="py-3 px-3 flex">
        <h3 class="p-2 text-sm text-[color:var(--dark-gray-blue)] sm:flex-1">
          {{ leftItems.length }} items left
        </h3>
        <div class="mx-auto whitespace-nowrap lg:block sm:hidden">
          <filterBtn
            class="font-medium"
            title="All"
            @filter="state.category = 'all'"
          ></filterBtn>
          <filterBtn
            class="font-medium"
            title="Active"
            @filter="state.category = false"
          ></filterBtn>

          <filterBtn
            class="font-medium"
            title="Completed"
            @filter="state.category = true"
          ></filterBtn>
        </div>

        <div class="justify-end">
          <filterBtn
            class="font-thin"
            title="Clear Completed"
            @filter="deleteCompleted(true)"
          ></filterBtn>
        </div>
      </div>
    </div>
    <div
      class="
        mx-auto
        whitespace-nowrap
        flex
        mt-3
        dark:bg-[color:var(--dark-desaturated-blue)]
        bg-white
        rounded
        flex
        lg:hidden
        px-auto
        justify-center
      "
    >
      <filterBtn
        class="font-medium"
        title="All"
        @filter="state.category = 'all'"
      ></filterBtn>
      <filterBtn
        class="font-medium"
        title="Active"
        @filter="state.category = false"
      ></filterBtn>

      <filterBtn
        class="font-medium"
        title="Completed"
        @filter="state.category = true"
      ></filterBtn>
    </div>
  </div>
</template>
<style  scoped>
.completed {
  text-decoration: line-through;
  text-decoration-color: var(--dark-gray-blue);
  text-decoration-thickness: 2px;
  color: var(--dark-gray-blue);
}
</style>