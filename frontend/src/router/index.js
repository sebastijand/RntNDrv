import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { Auth } from '@/services'

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
    path: '/promjena',
    name: 'promjena-lozinka',
    component: () => import('../views/Promjena lozinke.vue')
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
    path: '/sedan',
    name: 'sedan-klasa',
    component: () => import('../views/Sedan.vue')
  },
  {
    path: '/mini',
    name: 'mini-klasa',
    component: () => import('../views/Mini.vue')
  },
  {
    path: '/kombi',
    name: 'kombi-klasa',
    component: () => import('../views/Kombi.vue')
  },
  {
    path: '/kompakt',
    name: 'kompakt-klasa',
    component: () => import('../views/Kompakt.vue')
  },
  {
    path: '/skuter',
    name: 'skuter-klasa',
    component: () => import('../views/Skuter.vue')
  },
  {
    path: '/premium',
    name: 'premium-klasa',
    component: () => import('../views/Premium.vue')
  },
  {
    path: '/status',
    name: 'Status iznajmljivanja',
    component: () => import('../views/Status iznajmljivanja.vue')
  },
  {
    // path: '/informacijevozilo/:id' ili '/informacijevozilo/:sasija'
    path: '/informacijevozilo/:sasija',
    props: true,
    name: 'informacije-vozila',
    component: () => import('../views/Informacije vozila.vue')
  },
  {
    path: '/odabirtermina',
    name: 'Odabir termina',
    component: () => import('../views/Odabir termina.vue')
  },
  {
    path: '/odabirterminaconfirm',
    name: 'Odabir termina confirm',
    component: () => import('../views/Odabir termina confirm.vue')
  },
  {
    path: '/plaćanje',
    name: 'Plaćanje',
    component: () => import('../views/Plaćanje.vue')
  },
  {
    path: '/plaćanjekred',
    name: 'Plaćanje kreditna',
    component: () => import('../views/Plaćanje kreditna.vue')
  },
  {
    path: '/plaćanjegot',
    name: 'Plaćanje gotovina',
    component: () => import('../views/Plaćanje gotovina.vue')
  },
  {
    path: '/plaćanjegotconfirm',
    name: 'Plaćanje gotovina confirm',
    component: () => import('../views/Plaćanje gotovina confirm.vue')
  },
  {
    path: '/plaćanjekredconfirm',
    name: 'Plaćanje kreditna confirm',
    component: () => import('../views/Plaćanje kreditna confirm.vue')
  },
  {
    path: '/finalnapotvrda',
    name: 'Finalna potvrda',
    component: () => import('../views/Finalna potvrda.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const javneStranice = ["/", "/login", "/signup", "/izbornik", "/klasa", "/sedan", "/mini", "/kombi", "/kompakt", "/skuter", "/premium"]  // KOJE STRANICE KORISNIK MOŽE VIDJETI NEULOGIRAN
  const loginPotreban = !javneStranice.includes(to.path)
  const user = Auth.getUser();
  //const user2 = Auth.getUser2();

  if (loginPotreban && !user){
  //if (loginPotreban && !user || !user2){
    next('/login');
    return;
  }
  next();
})

export default router
