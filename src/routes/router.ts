import { createMemoryHistory, createRouter } from 'vue-router';

import HomeView from '../modules/home/home.component.vue';
import RouterModule from '../modules/league/route';

const routes = [{ path: '/', component: HomeView }, ...RouterModule];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
