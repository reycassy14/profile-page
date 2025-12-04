import { createRouter, createWebHistory } from 'vue-router';
import MainView from '@/views/MainView.vue';
import ErrorView from '@/views/ErrorView.vue';

import MainPage from '@/pages/MainPage.vue';
import ShadcnDemo from '@/pages/ShadcnDemo.vue';




const routes = [
  {
    path: '/',
    component: MainView,
    children: [
      {
        path: '',
        component: MainPage
      },
      {
        path: '/shadcn-demo',
        alias: '/shadcn-demo',
        component: ShadcnDemo
      }
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'ErrorView',
    component: ErrorView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,

  // eslint-disable-next-line
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
