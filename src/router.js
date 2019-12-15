import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Balance from './components/Balance.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Transfer from './components/Transfer.vue';
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
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/balance',
      name: 'Balance',
      component: Balance,
    },
    {
      path: '/transfer',
      name: 'Transfer',
      component: Transfer,
    },
  ],
});
