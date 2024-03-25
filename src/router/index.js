import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    component: () => import('../views/home2.vue')
  },
  {
    path: '/home',
    component: () => import('../views/home2.vue')
  },
  {
    path: '/about',
    component: () => import('../views/about.vue')
  },
  {
    path: '/winnowPlanning',
    component: () => import('../views/winnowPlanning.vue')
  },
  {
    path: '/winnowPlanning/detail',
    component: () => import('../views/detailPlanning.vue')
  },
  {
    path: '/winnowMarketing',
    component: () => import('../views/winnowMarketing.vue')
  },
  {
    path: '/winnowMarketing/detail',
    component: () => import('../views/detailMarketing.vue')
  },
  {
    path: '/winnowDesign',
    component: () => import('../views/winnowDesign.vue')
  },
  {
    path: '/winnowDesign/detail',
    component: () => import('../views/detailDesign.vue')
  },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
      return {x : 0, y: 0}
    }
})
console.log(process.env.BASE_URL);

export default router