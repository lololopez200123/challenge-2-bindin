import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import './style.css';

import HomeView from './views/HomeView.vue';
import FiltersView from './views/FiltersView.vue';
import RestaurantView from './views/RestaurantView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/filters',
    name: 'Filters',
    component: FiltersView,
  },
  {
    path: '/restaurant',
    name: 'Restaurant',
    component: RestaurantView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
