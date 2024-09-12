import type { RouteRecordRaw } from 'vue-router';

const routers: readonly RouteRecordRaw[] = [
  {
    path: '/league',
    component: () => import('./league.component.vue'),
    children: [
      {
        name: 'create-league',
        path: 'create',
        component: () => import('./form/league-form.component.vue'),
      },
      {
        path: 'edit/:id',
        component: () => import('./form/league-form.component.vue'),
      },
      {
        path: 'list',
        component: () => import('./list/league-list.component.vue'),
      },
    ],
  },
];

export default routers;
