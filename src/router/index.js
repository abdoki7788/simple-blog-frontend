import { createRouter, createWebHistory } from 'vue-router'
import HomeView      from '@/views/HomeView.vue'
import AboutView     from '@/views/AboutView.vue'
import ProfileView   from '@/views/ProfileView.vue'
import Login         from '@/views/Login.vue'
import Logout        from '@/views/Logout.vue'
import store         from '@/store'
import Register      from '@/views/Register.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: { authenticationRequired: true }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { notLogedIn : true }
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout,
    meta: { authenticationRequired: true }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { notLogedIn : true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.authenticationRequired)) {
    if (store.state.isAuthenticated) {
      next()
    } else {
      next('/login')
    }
  } else if(to.matched.some(record => record.meta.notLogedIn)) {
    if (!store.state.isAuthenticated) {
      next()
    } else {
      next('/profile')
    }
  } else {
    next()
  }
})



export default router