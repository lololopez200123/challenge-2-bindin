<template>
  <div class="min-h-screen bg-gray-50 pb-20 pt-14">
    <AppHeader :show-location="true" location="48 Florentin St"> </AppHeader>

    <div class="py-3">
      <div class="px-4 flex items-center gap-2">
        <div class="flex-1">
          <BaseSearchBar
            :model-value="searchQuery"
            placeholder="Search"
            @update:model-value="debounceSearch"
          />
        </div>
        <router-link to="/filters">
          <button class="p-2 rounded-lg" aria-label="Filter options">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
          </button>
        </router-link>
      </div>

      <!-- Horizontal scrollable filter chips -->
      <div class="px-4 mt-6 overflow-x-auto scrollbar-hide">
        <div class="flex space-x-2 pb-2">
          <BaseFilterChip
            label="New"
            :is-active="activeFilter === 'new'"
            @toggle="setFilter('new')"
          />
          <BaseFilterChip
            label="Recommended for you"
            :is-active="activeFilter === 'recommended'"
            @toggle="setFilter('recommended')"
          />
          <BaseFilterChip
            label="Near you"
            :is-active="activeFilter === 'near'"
            @toggle="setFilter('near')"
          />
          <BaseFilterChip
            label="Popular"
            :is-active="activeFilter === 'popular'"
            @toggle="setFilter('popular')"
          />
          <BaseFilterChip
            label="Fast Delivery"
            :is-active="activeFilter === 'fast'"
            @toggle="setFilter('fast')"
          />
          <BaseFilterChip
            label="Top Rated"
            :is-active="activeFilter === 'rated'"
            @toggle="setFilter('rated')"
          />
        </div>
      </div>

      <div class="mt-4 px-4">
        <div class="flex justify-between items-center mb-2">
          <h2 class="text-lg font-medium text-black">New restaurants</h2>
        </div>

        <!-- Restaurant cards horizontal scroll -->
        <div class="overflow-x-auto scrollbar-hide -mx-4">
          <div class="flex px-4 space-x-4 pb-2">
            <div class="w-64 flex-shrink-0">
              <RestaurantCard
                name="Noodle Nirvana House"
                description="Noodles, ramen, stir-fried wonders"
                rating="4.6"
                review-count="85"
                business-hours="9AM-11PM"
                delivery-time="30-40 min"
                delivery-fee="15 ILS"
                distance="0.8 km"
                price="50"
                @click="navigateToRestaurant"
              />
            </div>
            <div class="w-64 flex-shrink-0">
              <RestaurantCard
                name="Healthy Harvest"
                description="Salads, grain bowls, smoothies"
                rating="4.5"
                review-count="70"
                business-hours="8AM-6PM"
                delivery-time="20-35 min"
                delivery-fee="5 ILS"
                distance="1.2 km"
                price="45"
                @click="navigateToRestaurant"
              />
            </div>
            <div class="w-64 flex-shrink-0">
              <RestaurantCard
                name="Fresh Farm Deli"
                description="Organic produce, sandwiches, juices"
                rating="4.7"
                review-count="92"
                business-hours="8AM-9PM"
                delivery-time="25-40 min"
                delivery-fee="10 ILS"
                distance="0.5 km"
                price="40"
                @click="navigateToRestaurant"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="px-4">
        <h2 class="text-lg font-medium mb-2 text-black">Places near you</h2>

        <!-- Restaurant cards horizontal scroll -->
        <div class="overflow-x-auto scrollbar-hide -mx-4">
          <div class="flex px-4 space-x-4 pb-2">
            <div class="w-64 flex-shrink-0">
              <RestaurantCard
                name="Grill & Chill Lounge"
                description="Sizzling steaks, burgers, BBQ delights"
                rating="4.8"
                review-count="554"
                business-hours="10AM-11PM"
                delivery-time="30-40 min"
                delivery-fee="15 ILS"
                distance="1.5 km"
                price="50"
                @click="navigateToRestaurant"
              />
            </div>
            <div class="w-64 flex-shrink-0">
              <RestaurantCard
                name="Mediterranean Kebab"
                description="Kebabs, falafel, hummus, pita"
                rating="4.7"
                review-count="215"
                business-hours="10AM-10PM"
                delivery-time="20-35 min"
                delivery-fee="15 ILS"
                distance="1.3 km"
                price="45"
                @click="navigateToRestaurant"
              />
            </div>
            <div class="w-64 flex-shrink-0">
              <RestaurantCard
                name="PizzaCrafters Co."
                description="Handcrafted dough and premium ingredients"
                rating="4.9"
                review-count="320"
                business-hours="11AM-11PM"
                delivery-time="30-45 min"
                delivery-fee="20 ILS"
                distance="0.9 km"
                price="55"
                @click="navigateToRestaurant"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <AppFooter active="discover" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AppHeader from '../components/layout/AppHeader.vue';
import AppFooter from '../components/layout/AppFooter.vue';
import BaseSearchBar from '../components/base/SearchBar.vue';
import BaseFilterChip from '../components/base/FilterChip.vue';
import RestaurantCard from '../components/features/restaurant/RestaurantCard.vue';

const router = useRouter();
const searchQuery = ref('');
const activeFilter = ref('new');
let searchTimeout: number | null | undefined = null;

const setFilter = (filter: string) => {
  activeFilter.value = filter === activeFilter.value ? '' : filter;
};

const debounceSearch = (query: string) => {
  searchQuery.value = query;
  if (searchTimeout) {
    clearTimeout(searchTimeout);
  }

  searchTimeout = setTimeout(() => {
    console.log('Searching for:', query);
  }, 300);
};

const navigateToRestaurant = () => {
  router.push('/restaurant');
};
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none; /* Internet Explorer and Edge */
  scrollbar-width: none; /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}
</style>
