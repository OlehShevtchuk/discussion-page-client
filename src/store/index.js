import Vue from 'vue';
import Vuex from 'vuex';

import { getComments } from '../api/comment';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    commentsQnt: null,
    comments: [],
  },
  getters: {
    commentsQnt: state => state.commentsQnt,
    comments: state => state.comments,
  },
  mutations: {
    setCommentsQnt(state, payload) {
      state.commentsQnt = payload;
    },
    setComments(state, payload) {
      state.comments = payload;
    },
  },
  actions: {
    async fetchComments({ commit }) {
      const data = await getComments();
      commit('setComments', data.data.rows);
      commit('setCommentsQnt', data.data.count);
    },
  },
});
