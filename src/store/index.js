import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tests: []
  },
  getters: {
    tests(state) {
      return state.tests
    }
  },
  mutations: {
    addTest(state, test) {
      state.tests.push(test)
    },
    loadTests(state, tests) {
      state.tests = tests
    }
  },
  actions: {
    addTest(context, { sugar, timeInDay, toDay }) {
      const day = toDay === 1 ? Date.now() : Date.now() - 1000 * 60 * 60 * 24
      context.commit('addTest', { sugar,timeInDay, day})
      localStorage.tests = JSON.stringify(context.getters.tests)
      return Promise.resolve();
    },
    loadTests(context) {
      if (!localStorage.tests || context.getters.tests.length) return;
      const tests = JSON.parse(localStorage.tests)
      context.commit('loadTests', tests)
    }
  },
})
