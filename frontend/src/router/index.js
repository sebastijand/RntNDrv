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
  },
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
    path: '/informacijevozilo',
    name: 'Informacije vozila',
    component: () => import('../views/Informacije vozila.vue')
  },
  {
    path: '/odabirtermina',
    name: 'Odabir termina',
    component: () => import('../views/Odabir termina.vue')
  },
  {
    path: '/plaćanje',
    name: 'Plaćanje',
    component: () => import('../views/Plaćanje.vue')
  },
  {
    path: '/plaćanjekred',
    name: 'Plaćanje Kreditna',
    component: () => import('../views/Plaćanje Kreditna.vue')
  },
  {
    path: '/plaćanjegot',
    name: 'Plaćanje gotovina',
    component: () => import('../views/Plaćanje gotovina.vue')
  },
  {
    path: '/finalnapotvrda',
    name: 'Status iznajljivanja',
    component: () => import('../views/Status iznajljivanja.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
