import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import LandingView from '../views/LandingView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:currentPage',
    name: 'LandingView',
    component: LandingView,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
