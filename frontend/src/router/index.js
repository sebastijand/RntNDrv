import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  }
  /**
  {
    path: '/izbornik',
    name: 'Izbornik',
    component: () => import('../views/Izbornik.vue')
  },
  {
    path: '/profilkorisnika',
    name: 'Profil Korisnika',
    component: () => import('../views/Profil Korisnika.vue')
  },
  {
    path: '/uređivanjeprofila',
    name: 'Uređivanje profila',
    component: () => import('../views/Uređivanje profila.vue')
  },
  {
    path: '/klasa',
    name: 'Klasa vozila',
    component: () => import('../views/Klasa vozila.vue')
  },
  {
    path: '/status',
    name: 'Status iznajmljivanja',
    component: () => import('../views/Status iznajmljivanja.vue')
  },
  {
    path: '/model',
    name: 'Model vozila',
    component: () => import('../views/Model vozila.vue')
  },
  {
    path: '/status',
    name: 'Status iznajljivanja',
    component: () => import('../views/Status iznajljivanja.vue')
  },
  {
    path: '/status',
    name: 'Status iznajljivanja',
    component: () => import('../views/Status iznajljivanja.vue')
  },
  {
    path: '/status',
    name: 'Status iznajljivanja',
    component: () => import('../views/Status iznajljivanja.vue')
  },
  {
    path: '/status',
    name: 'Status iznajljivanja',
    component: () => import('../views/Status iznajljivanja.vue')
  },
  {
    path: '/status',
    name: 'Status iznajljivanja',
    component: () => import('../views/Status iznajljivanja.vue')
  },
  {
    path: '/status',
    name: 'Status iznajljivanja',
    component: () => import('../views/Status iznajljivanja.vue')
  }
  */
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
