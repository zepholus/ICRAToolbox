import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: {
    apps: [],
    currentApp: null,
  },
  mutations: {
    SET_APPS_INFO: (state, appsList) => {
      state.apps = appsList;
    },
    SET_CURRENT_APP: (state, currentApp) => {
      state.currentApp = currentApp;
    }
  },
  actions: {
    addAppsInfo: ({ commit}, { appsList }) => {
      commit('SET_APPS_INFO', appsList);
    },
    setCurrentApp: ({ commit}, { currentApp }) => {
      commit('SET_CURRENT_APP', currentApp);
    }
  },
  getters: {
    getAppsInfo: state => {
      return state.apps;
    },
    getAppInfoByName: (state) => (appName) => {
      return state.apps.find(item => item.name == appName);
    },
    getCurrentApp: state => {
      return state.currentApp;
    }
  },
  modules: {
  }
})
