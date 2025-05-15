<template>
  <div class="min-h-screen bg-gray-50 pb-20 pt-4">
    <div class>
      <div class="flex justify-between items-center px-4">
        <button class="text-gray-700 pl-1" @click="$router.back()">
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
        <button
          class="text-xs text-gray-600 font-medium border border-gray-300 rounded-lg px-3 py-2"
          @click="clearAllFilters"
        >
          Clear all
        </button>
      </div>
    </div>
    <div class="px-4 py-2">
      <h2 class="text-2xl font-medium mb-4">Filters</h2>
      <div class="mb-6">
        <h3 class="font-medium mb-1">Cuisine type</h3>
        <div class="flex flex-wrap gap-2">
          <BaseFilterChip
            v-for="cuisine in cuisines"
            :key="cuisine.id"
            :label="cuisine.name"
            :is-active="selectedCuisines.includes(cuisine.id)"
            @toggle="toggleCuisine(cuisine.id)"
          />
        </div>
      </div>

      <div class="mb-6">
        <h3 class="font-medium mb-1">Food type</h3>
        <div class="flex flex-wrap gap-2">
          <BaseFilterChip
            v-for="foodType in foodTypes"
            :key="foodType.id"
            :label="foodType.name"
            :is-active="selectedFoodTypes.includes(foodType.id)"
            @toggle="toggleFoodType(foodType.id)"
          />
        </div>
      </div>

      <div class="mb-6">
        <h3 class="font-medium mb-1">Type of food establishment</h3>
        <div class="flex flex-wrap gap-2">
          <BaseFilterChip
            v-for="establishment in establishments"
            :key="establishment.id"
            :label="establishment.name"
            :is-active="selectedEstablishments.includes(establishment.id)"
            @toggle="toggleEstablishment(establishment.id)"
          />
        </div>
      </div>

      <div class="mb-6">
        <h3 class="font-medium mb-1">Specific food preferences</h3>
        <div class="flex flex-wrap gap-2">
          <BaseFilterChip
            v-for="preference in preferences"
            :key="preference.id"
            :label="preference.name"
            :is-active="selectedPreferences.includes(preference.id)"
            @toggle="togglePreference(preference.id)"
          />
        </div>
      </div>

      <div class="mb-6">
        <h3 class="font-medium text-2xl mb-3">Sorting by</h3>
        <div class="flex flex-wrap gap-2">
          <BaseFilterChip
            v-for="sortOption in sortOptions"
            :key="sortOption.id"
            :label="sortOption.name"
            :is-active="selectedSortOption === sortOption.id"
            @toggle="selectSortOption(sortOption.id)"
          />
        </div>
      </div>

      <button
        class="w-full bg-black text-white rounded-lg py-3 font-medium mt-2"
        @click="$router.back()"
      >
        Apply
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import BaseFilterChip from '../components/base/FilterChip.vue';

// Define filter options
const cuisines = [
  { id: 'italian', name: 'Italian' },
  { id: 'mexican', name: 'Mexican' },
  { id: 'japanese', name: 'Japanese' },
  { id: 'french', name: 'French' },
  { id: 'greek', name: 'Greek' },
  { id: 'indian', name: 'Indian' },
  { id: 'chinese', name: 'Chinese' },
  { id: 'thai', name: 'Thai' },
  { id: 'korean', name: 'Korean' },
];

const foodTypes = [
  { id: 'burger', name: 'Burger' },
  { id: 'pizza', name: 'Pizza' },
  { id: 'sushi', name: 'Sushi' },
  { id: 'chicken-wings', name: 'Chicken Wings' },
  { id: 'wok', name: 'WOK' },
  { id: 'greek-salad', name: 'Greek Salad' },
  { id: 'pasta', name: 'Pasta' },
  { id: 'salad', name: 'Salad' },
  { id: 'soup', name: 'Soup' },
  { id: 'dessert', name: 'Dessert' },
];

const establishments = [
  { id: 'fast-food', name: 'Fast Food' },
  { id: 'cafe', name: 'Cafe' },
  { id: 'restaurant', name: 'Restaurant' },
  { id: 'bakery', name: 'Bakery' },
  { id: 'soap', name: 'Soap' },
  { id: 'coffee-shop', name: 'Coffee Shop' },
];

const preferences = [
  { id: 'gluten-free', name: 'Gluten Free' },
  { id: 'vegetarian', name: 'Vegetarian' },
  { id: 'vegan', name: 'Vegan' },
  { id: 'low-carb', name: 'Low-Carb' },
  { id: 'child-friendly', name: 'Child Friendly' },
  { id: 'kosher', name: 'Kosher' },
  { id: 'halal', name: 'Halal' },
  { id: 'recommended', name: 'Recommended' },
];

const sortOptions = [
  { id: 'distance', name: 'Distance' },
  { id: 'delivery-price', name: 'Delivery price' },
  { id: 'delivery-time', name: 'Delivery time' },
  { id: 'price-range', name: 'Price range' },
];

// Selected filters
const selectedCuisines = ref<string[]>(['italian']);
const selectedFoodTypes = ref<string[]>(['burger', 'pizza']);
const selectedEstablishments = ref<string[]>(['restaurant']);
const selectedPreferences = ref<string[]>([]);
const selectedSortOption = ref('distance');

// Toggle functions
const toggleCuisine = (id: string) => {
  if (selectedCuisines.value.includes(id)) {
    selectedCuisines.value = selectedCuisines.value.filter(
      (item) => item !== id
    );
  } else {
    selectedCuisines.value.push(id);
  }
};

const toggleFoodType = (id: string) => {
  if (selectedFoodTypes.value.includes(id)) {
    selectedFoodTypes.value = selectedFoodTypes.value.filter(
      (item) => item !== id
    );
  } else {
    selectedFoodTypes.value.push(id);
  }
};

const toggleEstablishment = (id: string) => {
  if (selectedEstablishments.value.includes(id)) {
    selectedEstablishments.value = selectedEstablishments.value.filter(
      (item) => item !== id
    );
  } else {
    selectedEstablishments.value.push(id);
  }
};

const togglePreference = (id: string) => {
  if (selectedPreferences.value.includes(id)) {
    selectedPreferences.value = selectedPreferences.value.filter(
      (item) => item !== id
    );
  } else {
    selectedPreferences.value.push(id);
  }
};

const selectSortOption = (id: string) => {
  selectedSortOption.value = id;
};

const clearAllFilters = () => {
  selectedCuisines.value = [];
  selectedFoodTypes.value = [];
  selectedEstablishments.value = [];
  selectedPreferences.value = [];
  selectedSortOption.value = '';
};
</script>
