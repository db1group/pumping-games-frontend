import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import HomeView from '../modules/home/home.component.vue';
import LeagueModule from '../modules/league/route';
import NationEventModule from '../modules/nation-event/route';

const routes: readonly RouteRecordRaw[] = [
  { path: '/', component: HomeView },
  ...LeagueModule,
  ...NationEventModule,
];

export const router = createRouter({
  history: createWebHistory(),
  routes: [...routes],
});

export default router;
