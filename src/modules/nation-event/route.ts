import type { RouteRecordRaw } from 'vue-router';

const routers: readonly RouteRecordRaw[] = [
  {
    path: '/nation-events',
    component: () => import('./nation-event.component.vue'),
    children: [
      {
        path: '',
        component: () => import('./list/nation-event-list.component.vue'),
      },
      {
        name: 'create-nation-event',
        path: 'create',
        component: () => import('./form/nation-event-form.component.vue'),
      },
      {
        path: ':id',
        component: () => import('./form/nation-event-form.component.vue'),
      },
    ],
  },
];

export default routers;
