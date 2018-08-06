import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout.vue'
import Login from '../views/login/index.vue'

Vue.use(Router)

const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    component: Layout
  }
]

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})
