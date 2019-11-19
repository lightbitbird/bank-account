import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import BankAccount from './components/BankAccount.vue';
import Top from './components/Top';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Top,
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/account',
      name: 'BankAccount',
      component: BankAccount,
    },
  ],
});
