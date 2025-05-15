<template>
  <div class="flex items-center justify-between py-3 border-b border-gray-100">
    <div class="flex-1 pr-4">
      <h3 class="font-medium">{{ name }}</h3>
      <p class="text-sm text-gray-500 mt-1">{{ description }}</p>
      <p class="text-sm font-medium mt-2">{{ price }}</p>
    </div>
    <div class="relative w-20 h-20">
      <img
        :src="imageUrl || '/placeholder-food.jpg'"
        :alt="name"
        class="w-full h-full object-cover rounded-lg bg-gray-100"
      />
      <button
        v-if="showAddButton"
        class="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
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
  imageUrl: {
    type: String,
    default: '',
  },
  showAddButton: {
    type: Boolean,
    default: true,
  },
});
</script>
