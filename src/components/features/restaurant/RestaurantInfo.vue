<template>
  <div class="text-center px-4 mt-2">
    <h1 class="text-xl font-bold">{{ name }}</h1>

    <div class="flex items-center justify-center space-x-2 mt-2 text-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 text-gray-600"
        fill="#0d0d0d"
        viewBox="0 0 24 24"
      >
        <g>
          <g>
            <path
              d="M19,7c0-1.1-0.9-2-2-2h-3v2h3v2.65L13.52,14H10V9H6c-2.21,0-4,1.79-4,4v3h2c0,1.66,1.34,3,3,3s3-1.34,3-3h4.48L19,10.35V7 z M7,17c-0.55,0-1-0.45-1-1h2C8,16.55,7.55,17,7,17z"
            />
            <rect height="2" width="5" x="5" y="6" />
            <path
              d="M19,13c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3S20.66,13,19,13z M19,17c-0.55,0-1-0.45-1-1s0.45-1,1-1s1,0.45,1,1 S19.55,17,19,17z"
            />
          </g>
        </g>
      </svg>
      <span>{{ deliveryFee }}</span>
      <span>•</span>
      <span>{{ deliveryTime }}</span>
      <span>•</span>
      <span>{{ fromPrice }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  deliveryFee: {
    type: String,
    default: '15 ILS',
  },
  deliveryTime: {
    type: String,
    default: '30-40 min',
  },
  fromPrice: {
    type: String,
    default: 'from 150 ILS',
  },
});
</script>
