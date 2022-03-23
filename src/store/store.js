import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      token: null,
      userName: '',
      steps: [],
      stepsGeneric: [],
    }
  },
  mutations: {
    setUserName(state, name) {
      state.userName = name
    },
    setToken(state, token) {
      state.token = token
    },
    setSteps(state, steps) {
      state.steps = steps
    },
    setStepsGeneric(state, steps) {
      state.stepsGeneric = steps
    }
  },
  actions: {
    setAuth(state, auth) {
      state.commit('setToken', auth.sessionToken)
      state.commit('setUserName', auth.userName)
    },
    getSteps(state) {
      const steps = [
        { name: 'Step One' },
        { name: 'Step Two' },
        { name: 'Step Three' }]
      state.commit('setSteps', steps)
    },
    getStepsGeneric(state) {
      const steps = [
        { name: 'Paso 1' },
        { name: 'Paso 2' }]
      state.commit('setStepsGeneric', steps)
    }
  },
  getters: {
    logged(state) {
      return !!state.token
    },
    getUserName(state) {
      return state.userName
    }
  }
})

export default store;