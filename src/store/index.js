import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apps: []
  },
  mutations: {
    SET_APPS_INFO: (state, appsList) => {
      state.apps = appsList;
    },
  },
  actions: {
    addAppsInfo: ({ commit}, { appsList }) => {
      commit('SET_APPS_INFO', appsList);
    },
  },
  getters: {
    getAppsInfo: state => {
      return state.apps;
    }
  },
  modules: {
  }
})
