import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import MainView from '../views/MainView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:currentPage',
    name: 'MainView',
    component: MainView,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.fullPath === '/') {
    next('/intro-content');
  } else {
    next();
  }
});

export default router;
