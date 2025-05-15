<template>
  <div class="relative">
    <div class="flex items-center bg-gray-100 rounded-lg px-3 py-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-6 w-6 text-gray-400"
      >
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
          clip-rule="evenodd"
        />
      </svg>

      <input
        :value="modelValue"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
        type="text"
        placeholder="Search"
        class="bg-transparent border-none focus:outline-none focus:ring-0 ml-2 flex-1 text-sm"
      />
      <button
        v-if="modelValue"
        @click="$emit('update:modelValue', '')"
        class="text-gray-400"
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'Search',
  },
});

defineEmits(['update:modelValue']);
</script>
