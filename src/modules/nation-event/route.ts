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
        path: 'cadastrar',
        component: () => import('./form/nation-event-form.component.vue'),
      },
      {
        path: 'editar/:id',
        component: () => import('./form/nation-event-form.component.vue'),
      },
    ],
  },
];

export default routers;
