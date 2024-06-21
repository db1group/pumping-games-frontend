const routers = [
  {
    path: '/league',
    component: () => import('./league.component.vue'),
    children: [
      {
        name: 'create-league',
        path: '/create',
        component: () => import('./form/league-form.component.vue'),
      },
      //   {
      //     path: 'edit/:id',
      //     component: () => import('./form/edit-league.component.vue'),
      //   },
      //   {
      //     path: 'list',
      //     component: () => import('./list/list-league.component.vue'),
      //   },
    ],
  },
];

export default routers;
