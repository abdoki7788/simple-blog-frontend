import { createStore } from 'vuex'
import axios from 'axios'

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
        axios.defaults.headers.common['Authorization'] = "Token " + state.token
      } else {
        state.isAuthenticated = false
        state.token = ''
        axios.defaults.headers.common['Authorization'] = ''
      }
    },
    Login(state, token){
      if (token) {
        state.isAuthenticated = true
        state.token = token
        localStorage.setItem('token', token)
        axios.defaults.headers.common['Authorization'] = "Token " + state.token
      } else {
        state.isAuthenticated = false
        state.token = ''
        localStorage.removeItem('token')
        axios.defaults.headers.common['Authorization'] = ''
      }
    },
    Logout(state){
      state.isAuthenticated = false
      state.token = ''
      localStorage.removeItem('token')
      axios.defaults.headers.common['Authorization'] = ''
    }
  },
  actions: {
  },
  modules: {
  }
})
