import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'
import Principal from '@/views/Principal.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/principal',
    name: 'Principal',
    component: Principal,
    // meta: {
    //   autentificado: true
    // }
  }
]

const router = new VueRouter({
  routes
})

export default router
