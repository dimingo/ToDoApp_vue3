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
const startDrag = (event, item) => {
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("ItemID", item.id);
};

const onDrop = (event, id) => {
  const draggedId = event.dataTransfer.getData("itemID");
  const draggedItem = todoList.value.find((item) => item.id == draggedId);
  const targetItem = todoList.value.find((item) => item.id === +id);

  const draggedItemIndex = todoList.value.indexOf(draggedItem);
  const targetItemIndex = todoList.value.indexOf(targetItem);

  todoList.value.splice(draggedItemIndex, 1);
  todoList.value.splice(targetItemIndex, 0, draggedItem);
};
const leftItems = computed(() =>
  todoList.value.filter((todoList) => todoList.completed != true)
);

function deleteTask(index) {
  store.deleteTodo(index);
}
</script>


<template>
  <div class="justify-center max-h-100%">
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
        draggable="true"
        v-for="todo in filteredTasks"
        :key="todo.id"
        :class="{ completed: todo.completed }"
        v-draggable="{ group: 'todos', animation: 100 }"
        @dragstart="startDrag($event, todo)"
        @drop="onDrop($event, todo.id)"
        @dragenter.prevent
        @dragover.prevent
      >
        <radio-btn
          class="m-2"
          :todoItem="todo"
          @click.stop="toggleCompleted(todo.id)"
        ></radio-btn
        ><span class="p-2">{{ todo.item }}</span>

        <svg
          class="
            fill-slate-600
            hover:fill-blue-700
            dark:fill-slate-600 dark:hover:fill-blue-600
            bg-transparent
            text-gray-800
            font-medium
            m-3
            absolute
            right-4
          "
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          @click="deleteTask(todo.id)"
        >
          <path
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </div>

      <div class="py-3 px-3 flex">
        <h3
          class="
            p-2
            text-sm
            text-[color:var(--dark-gray-blue)]
            sm:flex-1
            lg:flex-initial
          "
        >
          {{ leftItems.length }}
          {{ leftItems.length > 1 ? "items left" : "item left" }}
        </h3>
        <div class="mx-auto whitespace-nowrap lg:inline sm:hidden">
          <filterBtn
            class="active:text-blue-600"
            title="All"
            @filter="state.category = 'all'"
          ></filterBtn>
          <filterBtn
            class="active:text-blue-600"
            title="Active"
            @filter="state.category = false"
          ></filterBtn>

          <filterBtn
            class="active:text-blue-600"
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
    <div class="flex text-slate-600 justify-center p-2">
      Drag and Drop to reoder list
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