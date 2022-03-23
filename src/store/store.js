import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      token: null,
      userName: '',
    }
  },
  mutations: {
    setUserName(state, name) {
      state.userName = name
    },
    setToken(state, token) {
      state.token = token
    },
  },
  actions: {
    setAuth(state, auth) {
      state.commit('setToken', auth.sessionToken)
      state.commit('setUserName', auth.userName)
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