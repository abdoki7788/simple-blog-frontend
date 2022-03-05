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
    Login(state, token){
      state.isAuthenticated = true
      state.token = token
      localStorage.setItem('token', token)
      axios.defaults.headers.common['Authorization'] = "Token " + state.token
    },
    Logout(state){
      state.isAuthenticated = false
      state.token = ''
      localStorage.removeItem('token')
      axios.defaults.headers.common['Authorization'] = ''
    }
  },
  actions: {
    OnStart(context) {
      let token = localStorage.getItem('token')
      axios.defaults.headers.common['Authorization'] = "Token " + token
      if (token) {
        axios.get('/api/auth/users/me').then(
            response => context.commit('Login', token)
          ).catch(
            error => context.commit('Logout')
          )
      } else {
        context.commit('Logout')
      }
    }
  },
  modules: {
  }
})
