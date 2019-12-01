import Vue from 'vue';
import Vuex from 'vuex';
import { actions, state } from './modules';

Vue.use(Vuex);

export default new Vuex.Store({
  state: state,
  actions: actions,
  mutations: {},
  getters: {},
});
