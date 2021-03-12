import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  plugins: [createPersistedState({
    key: 'data',
  })],
  strict: true,

  state: {
    projects: []

  },
  mutations: {

  },
  actions: {

  }
});


export default store;