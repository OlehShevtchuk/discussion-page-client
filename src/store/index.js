import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    commentsQnt: null,
  },
  getters: {
    commentsQnt: state => state.commentsQnt,
  },
  mutations: {
    setcommentsQnt(state, payload) {
      state.commentsQnt = payload;
    },
  },
  actions: {},
});
