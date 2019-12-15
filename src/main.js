import Vue from 'vue';
import App from './App.vue';
import router from './router';
import filters from './filters';
import '../public/assets/style/common.css';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  store,
}).$mount('#app');
