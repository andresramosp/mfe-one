import { createStore } from 'vuex'
import { Configuration, PetApiFactory } from "Shell/clientApiOne";

const store = createStore({
  state() {
    return {
      token: null,
      userName: '',
      steps: [],
      stepsGeneric: [],
      currentStep: 0,
      pets: []
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
    },
    nextStep(state) {
      if (state.currentStep++ > 2) state.currentStep = 0
    },
    setPets(state, pets) {
      state.pets = pets
    },
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
    },
    async getPets(state) {
      const config = new Configuration({
        basePath: window.location.origin, // 1
      });
      const apiFactory = PetApiFactory(config);
      let result = await apiFactory.findPetsByStatus(['available'])
      state.commit('setPets', result)
      console.log(result)
    }
  },
  getters: {
    logged(state) {
      return !!state.token
    },
    getUserName(state) {
      return state.userName
    },
    pets(state) {
      return state.pets
        .filter(p => p.name !== 'doggie')
        .slice(0, 50)
        .map(p => {
          return {
            ...p, id: parseInt(Math.random() * 1000)
          }
        })
    }
  }
})

export default store;