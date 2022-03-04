import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthenticated: false,
    token: ''
  },
  getters: {
  },
  mutations: {
    onStart(state){
      let token = localStorage.getItem('token')
      if (token) {
        state.isAuthenticated = true
        state.token = token
      } else {
        state.isAuthenticated = false
        state.token = ''
      }
    },
    Login(state, token){
      if (token) {
        state.isAuthenticated = true
        state.token = token
        localStorage.setItem('token', token)
      } else {
        state.isAuthenticated = false
        state.token = ''
        localStorage.removeItem('token')
      }
    },
    Logout(state){
      state.isAuthenticated = false
      state.token = ''
      localStorage.removeItem('token')
    }
  },
  actions: {
  },
  modules: {
  }
})
