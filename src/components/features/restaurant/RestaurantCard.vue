<template>
  <div class="bg-gray-50 rounded-lg mb-4 border-gray-100 border">
    <div class="relative">
      <div
        class="h-32 bg-gray-80 rounded-t-lg flex items-center justify-center"
        :style="{ backgroundImage: 'url(' + imageUrl + ')' }"
        :class="{
          'bg-cover bg-center': imageUrl,
          'bg-gray-80': !imageUrl,
        }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="34px"
          viewBox="0 0 24 24"
          width="34px"
          fill="gray"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"
          />
        </svg>
      </div>
      <button
        class="absolute top-1 right-1 rounded-full p-1.5"
        aria-label="Add to favorites"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </button>
    </div>
    <div class="p-1">
      <div class="flex justify-between items-center">
        <h3 class="font-sm text-black">{{ name }}</h3>
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-gray-800"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
          <span class="text-xs font-semibold ml-1 text-gray-600 mr-1"
            >{{ rating }} ({{ reviewCount }})</span
          >
        </div>
      </div>
      <p class="text-sm text-black">{{ description }}</p>

      <div class="flex justify-between items-center mt-1">
        <!-- Business hours -->
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-1 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span class="text-xs text-gray-500 ml-1">{{
            businessHours || '9AM-11PM'
          }}</span>
        </div>

        <div class="flex items-center">
          <span class="text-xs text-gray-500 ml-1">{{
            price ? '$$' + price : '$$15.5'
          }}</span>
        </div>
      </div>

      <div class="flex items-center justify-between space-x-1">
        <!-- Delivery Fee -->
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-400"
            fill="gray"
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
          <span class="text-xs text-gray-600 ml-1">{{ deliveryFee }}</span>
        </div>

        <div class="w-1 h-1 bg-gray-300 rounded-full"></div>

        <!-- Delivery time -->
        <div class="flex items-center">
          <span class="text-xs text-gray-600">{{ deliveryTime }}</span>
        </div>

        <div class="w-1 h-1 bg-gray-300 rounded-full"></div>

        <!-- Price info -->
        <div class="flex items-center">
          <span class="text-xs text-gray-600 mr-1"
            >from {{ price ? price : '50' }} ILS</span
          >
        </div>
      </div>
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
  imageUrl: {
    type: String,
    default: '',
  },
  businessHours: {
    type: String,
    default: '9AM - 11PM',
  },
  deliveryTime: {
    type: String,
    default: '30-45 min',
  },
  distance: {
    type: String,
    default: '1.2 km',
  },
  rating: {
    type: String,
    default: '4.5',
  },
  reviewCount: {
    type: String,
    default: '85',
  },
  price: {
    type: String,
    default: '',
  },
  deliveryFee: {
    type: String,
    default: '15 ILS',
  },
});
</script>
