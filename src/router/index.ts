import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import App from '../App.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/intro-content',
  },
  {
    path: '/:currentPage(intro-content|about-me|work-experience|contact)',
    name: 'App',
    component: App,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/intro-content',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
