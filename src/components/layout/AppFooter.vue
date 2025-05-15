<template>
  <footer
    class="fixed bottom-0 left-0 right-0 bg-gray-50 border-t border-gray-200 z-50"
  >
    <div class="flex justify-around pb-2">
      <button class="flex flex-col items-center space-y-1 p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          :class="active === 'favorites' ? 'text-black' : 'text-gray-400'"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <g
            id="🔍-Product-Icons"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g id="ic_fluent_food_24_filled" fill="#212121" fill-rule="nonzero">
              <path
                d="M18,3 C18.5128358,3 18.9355072,3.38604019 18.9932723,3.88337887 L19,4 L19,20 C19,20.5522847 18.5522847,21 18,21 C17.4871642,21 17.0644928,20.6139598 17.0067277,20.1166211 L17,20 L17,15 L16,15 C15.4871642,15 15.0644928,14.6139598 15.0067277,14.1166211 L15,14 L15,8 C15,5.790861 16.5,3 18,3 Z M12,3 C12.5128358,3 12.9355072,3.38604019 12.9932723,3.88337887 L13,4 L13,9 C13,10.8635652 11.7256022,12.429479 10.0007613,12.8737865 L10,20 C10,20.5522847 9.55228475,21 9,21 C8.48716416,21 8.06449284,20.6139598 8.00672773,20.1166211 L8,20 L8.00024347,12.8740452 C6.3387946,12.44653 5.09505441,10.9783996 5.00520459,9.20583575 L5,9 L5,4 C5,3.44771525 5.44771525,3 6,3 C6.51283584,3 6.93550716,3.38604019 6.99327227,3.88337887 L7,4 L7,9 C7,9.74025244 7.40216612,10.3865739 7.99992752,10.7323937 L8,4 C8,3.44771525 8.44771525,3 9,3 C9.51283584,3 9.93550716,3.38604019 9.99327227,3.88337887 L10,4 L10.0010775,10.7318119 C10.5523456,10.4124618 10.9370409,9.83744849 10.9929628,9.16897232 L11,9 L11,4 C11,3.44771525 11.4477153,3 12,3 Z"
                id="🎨-Color"
              ></path>
            </g>
          </g>
        </svg>
        <span
          class="text-xs"
          :class="active === 'discover' ? 'text-black' : 'text-gray-400'"
          >Discover</span
        >
      </button>
      <button class="flex flex-col items-center space-y-1 p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          :class="active === 'favorites' ? 'text-black' : 'text-gray-400'"
          fill="gray"
          height="24px"
          width="24px"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
        <span
          class="text-xs"
          :class="active === 'favorites' ? 'text-black' : 'text-gray-400'"
          >Favorites</span
        >
      </button>
      <button class="flex flex-col items-center space-y-1 p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          :class="active === 'orders' ? 'text-black' : 'text-gray-400'"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
        <span
          class="text-xs"
          :class="active === 'orders' ? 'text-black' : 'text-gray-400'"
          >Orders</span
        >
      </button>
      <button class="flex flex-col items-center space-y-1 p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          :class="active === 'profile' ? 'text-black' : 'text-gray-400'"
          fill="gray"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
          />
        </svg>
        <span
          class="text-xs"
          :class="active === 'profile' ? 'text-black' : 'text-gray-400'"
          >Profile</span
        >
      </button>
    </div>
  </footer>
</template>

<script lang="ts" setup>
defineProps({
  active: {
    type: String,
    default: 'discover',
  },
});
</script>
