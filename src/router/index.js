import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home.vue'
const Money = () => import('@/views/money/Money')
const Ious = () => import('@/views/ious/Ious')
const Raise = () => import('@/views/raise/Raise')
const DownLoad = () => import('@/components/Download')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/money',
    name: 'money',
    component: Money,
  },
  {
    path: '/ious',
    name: 'ious',
    component: Ious,
  },
  {
    path: '/raise',
    name: 'raise',
    component: Raise,
  },
  {
    path: '/download',
    name: 'download',
    component: DownLoad,
  },
]

const router = new VueRouter({
  routes,
})

export default router
