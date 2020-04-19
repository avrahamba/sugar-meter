import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import details from '../views/details.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/details',
    name: 'details',
    component: details
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
