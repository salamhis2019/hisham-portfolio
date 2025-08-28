import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import MainView from '../views/MainView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/intro-content',
  },
  {
    path: '/:currentPage(intro-content|about-me|work-experience|contact)',
    name: 'MainView',
    component: MainView,
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

// Router guard is no longer needed since we handle redirects in routes

export default router;
