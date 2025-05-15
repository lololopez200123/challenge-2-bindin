<template>
  <RestaurantHeader @back="$router.back()" />
  <div class="min-h-screen py-14 bg-gray-80 overflow-hidden">
    <RestaurantInfo
      name="PizzaCrafters Co."
      delivery-fee="15 ILS"
      delivery-time="30-40 min"
      from-price="from 150 ILS"
    />

    <div class="mt-6">
      <div class="px-4 flex space-x-2 overflow-x-auto">
        <BaseFilterChip label="Recommended for you" :is-active="true" />
        <BaseFilterChip label="Popular" :is-active="false" />
        <BaseFilterChip label="Meat Lover's Pizzas" :is-active="false" />
      </div>
    </div>

    <div class="px-4 mt-8">
      <h2 class="text-lg font-medium mb-2 text-black">Recommended for you</h2>

      <MenuItemCard
        v-for="(item, index) in recommendedItems"
        :key="index"
        :name="item.name"
        :description="item.description"
        :price="item.price"
      />
    </div>

    <div class="px-4 mt-4">
      <h2 class="text-lg font-medium mb-2">Popular</h2>

      <div class="flex my-6 w-[150%] translate-x-[-15px]">
        <div
          class="flex items-center justify-center px-2 mr-2 bg-gray-300 rounded-sm"
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
        <div class="w-[35%]">
          <h3 class="font-semibold text-sm">Thai Peanut (30.48 cm)</h3>
          <p class="text-gray-600 text-xs mt-1">
            Thai peanut sauce, chicken, bell peppers, carrots, peanuts,
            cilantro.
          </p>
          <p class="font-bold mt-4 text-sm">139 ILS</p>
        </div>
        <div class="w-[35%] h-24 bg-gray-200 opacity-50"></div>
      </div>
    </div>

    <AppFooter active="discover" />
  </div>
</template>

<script setup lang="ts">
import RestaurantHeader from '../components/layout/RestaurantHeader.vue';
import AppFooter from '../components/layout/AppFooter.vue';
import RestaurantInfo from '../components/features/restaurant/RestaurantInfo.vue';
import BaseFilterChip from '../components/base/FilterChip.vue';
import MenuItemCard from '../components/features/menu/MenuItemCard.vue';

const recommendedItems = [
  {
    name: 'Margherita (30.48 cm)',
    description: 'Tomato sauce, fresh mozzarella, basil, olive oil',
    price: '100 ILS',
  },
  {
    name: 'Mediterranean (35.56 cm)',
    description:
      'Olive tapenade, feta cheese, sun-dried tomatoes, artichoke hearts, spinach',
    price: '175 ILS',
  },
  {
    name: 'Truffle Bliss (35.56 cm)',
    description:
      'Truffle oil, mixed mushrooms, caramelized onions, fontina cheese',
    price: '215 ILS',
  },
];
</script>
