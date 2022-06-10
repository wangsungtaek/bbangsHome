import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/home.vue')
  },
  {
    path: '/onlineMarketing',
    component: () => import('../views/onlineMarketing.vue')
  },
  {
    path: '/offlineMarketing',
    component: () => import('../views/offlineMarketing.vue')
  },
  {
    path: '/brandMarketing',
    component: () => import('../views/brandMarketing.vue')
  },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router