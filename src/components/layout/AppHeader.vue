<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-gray-50">
    <div class="flex justify-between items-center py-3 px-4">
      <div class="flex items-center space-x-2">
        <div v-if="showLocation" class="flex items-center">
          <span class="font-semibold">{{ location }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      <slot name="right">
        <div
          class="flex items-center justify-end space-x-4"
          :class="{
            'w-full': showCloseButton,
          }"
        >
          <button
            v-if="showCloseButton"
            class="z-1 mr-auto rounded-full flex justify-center items-center w-8 h-8 bg-gray-300"
            @click="$emit('close')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="white"
              opacity="0.6"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              />
            </svg>
          </button>
          <div class="flex items-center space-x-3">
            <!-- Map icon with aria-label -->
            <button
              class="rounded-full p-1.5 w-8 h-8 bg-gray-300"
              aria-label="Open map view"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                opacity="0.6"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                />
              </svg>
            </button>
            <!-- Help/Question icon with aria-label -->
            <button
              class="rounded-full w-8 h-8 p-1.5 bg-gray-300"
              aria-label="Help"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                opacity="0.6"
                class="size-4 m-auto"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </slot>
    </div>
  </header>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: '',
  },
  showLocation: {
    type: Boolean,
    default: false,
  },
  location: {
    type: String,
    default: '48 Fiorentin St',
  },
  showCloseButton: {
    type: Boolean,
    default: false,
  },
});

defineEmits(['close']);
</script>
