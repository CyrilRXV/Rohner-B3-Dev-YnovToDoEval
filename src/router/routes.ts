import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      { path: 'dashboard', component: () => import('pages/DashboardPage.vue') },
      { path: 'create', component: () => import('pages/CreateTaskPage.vue') },
      { path: 'edit/:id', component: () => import('pages/EditTaskPage.vue') },
      { path: '/tasks/:catId', component: () => import('pages/ListTasksPage.vue') },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
