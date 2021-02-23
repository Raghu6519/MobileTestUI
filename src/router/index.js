import Vue from 'vue';
import Router from 'vue-router';
import home from '../components/home';
import MateHome from '../components/MateHome';
import AppDashboard from '../components/AppDashboard';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'home',
      component: home
    },
    {
      path: '/',
      name: 'MateHome',
      component: MateHome
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: AppDashboard
    }
  ]
})