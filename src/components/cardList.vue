<script setup>
import radioBtn from "./radioButton.vue";
import { useTodoListStore } from "../store/useTodoListStore";
import { storeToRefs } from "pinia";

const store = useTodoListStore();
// storeToRefs lets todoList keep reactivity:
const { todoList } = storeToRefs(store);
const { toggleCompleted } = store;
function deleteTask(index) {
  store.deleteTodo(index);
}
</script>


<template>
  <div class="flex justify-center">
    <div class="block rounded-lg shadow-lg bg-white w-full text-start">
      <div
        class="relative py-3 px-6 border-b border-gray-300 flex flex-row"
        v-for="todo in todoList"
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
            hover:bg-gray-100
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

      <div class="py-3 px-3 text-gray-600 flex">
        <h3 class="p-2 text-sm"> items left</h3>
        <div class="mx-auto">
          <button
            class="
              bg-white
              hover:bg-gray-100
              text-gray-800
              font-medium
              py-2
              px-4
              ml-8
              rounded
            "
          >
            All
          </button>

          <button
            class="
              bg-white
              hover:bg-gray-100
              text-gray-800
              font-medium
              py-2
              px-4
              rounded
            "
          >
            Active
          </button>
          <button
            class="
              bg-white
              hover:bg-gray-100
              text-gray-800
              font-medium
              py-2
              px-4
              rounded
            "
          >
            Completed
          </button>
        </div>

        <div>
          <button
            class="
              bg-white
              hover:bg-gray-100
              text-gray-800
              font-medium
              py-2
              px-4
              rounded
            "
          >
            Clear Completed
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style  scoped>
.completed {
  text-decoration: line-through;
}
</style>