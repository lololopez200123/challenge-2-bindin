<template>
  <button
    class="px-3 py-2 rounded-full text-xs whitespace-nowrap"
    :class="isActive ? 'bg-gray-400 text-black' : 'bg-gray-200 text-black'"
    @click="$emit('toggle')"
  >
    {{ label }}
  </button>
</template>

<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});

defineEmits(['toggle']);
</script>
