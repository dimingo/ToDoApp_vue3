<script setup>
import radioBtn from "./radioButton.vue";
</script>


<template>
  <div class="flex justify-center">
    <div class="block rounded-lg shadow-lg bg-white w-full text-start">
      <div class="py-3 px-6 border-b border-gray-300">
        <radio-btn class="m-2"></radio-btn>Featured
      </div>
      <div class="py-3 px-6 border-b border-gray-300">
        <radio-btn class="m-2"></radio-btn>Featured
      </div>
      <div class="py-3 px-6 border-b border-gray-300">
        <radio-btn class="m-2"></radio-btn>Featured
      </div>

      <div class="py-3 px-3  text-gray-600 flex">
        <h3 class="p-2 text-sm">5 items left</h3>
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