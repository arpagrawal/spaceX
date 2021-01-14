import Vue from 'vue';
import Router from 'vue-router';
import SxHome from './components/sx-home/sx-home.vue';

const routes = [
  { path: '/', component: SxHome },
];

Vue.use(Router);

const router = new Router({
  routes,
});

export default router;