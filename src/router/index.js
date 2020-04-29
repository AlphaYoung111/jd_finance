import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home.vue'
const Money = () => import('@/views/money/Money')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect:'/home'
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
]

const router = new VueRouter({
  routes,
})

export default router
