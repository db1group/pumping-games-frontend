import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../modules/home/home.component.vue';
import RouterModule from '../modules/league/route';

const routes = [{ path: '/', component: HomeView }, ...RouterModule];

export const router = createRouter({
  history: createWebHistory(),
  routes: [...routes],
});

export default router;
