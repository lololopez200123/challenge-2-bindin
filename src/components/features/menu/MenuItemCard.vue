<template>
  <div class="border-b border-gray-200">
    <div class="flex py-4">
      <div
        v-if="showAddButton"
        class="flex items-center justify-center pr-2 mr-1"
      >
        <button
          class="w-6 h-6 bg-gray-50 rounded-full flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
      <div :class="showAddButton ? 'w-[35%]' : 'w-[55%]'">
        <h3 class="font-semibold text-sm">{{ name }}</h3>
        <p
          class="text-gray-600 text-xs mt-1"
          :class="showAddButton ? '' : 'max-w-[25ch]'"
        >
          {{ description }}
        </p>
        <p class="font-bold mt-1 text-sm">{{ price }}</p>
      </div>
      <div
        :class="showAddButton ? 'w-[35%]' : 'my-auto w-[45%]'"
        class="h-24 bg-gray-200 opacity-50"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  price: {
    type: String,
    required: true,
  },
  showAddButton: {
    type: Boolean,
    default: false,
  },
});
</script>
