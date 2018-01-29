import Vue from 'vue';

import Index from '@/components/IndexPage';
import Show from '@/components/ShowPage';

import Router from 'vue-router';

Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/:id',
      name: 'show',
      component: Show,
    },
  ],
});
