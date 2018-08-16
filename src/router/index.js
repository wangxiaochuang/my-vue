import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout.vue'
import Login from '../views/login/index.vue'

import DashBoard from '../views/dashboard/DashBoard.vue'
import UserManager from '../views/manager/UserManager.vue'
import MenuManager from '../views/manager/MenuManager.vue'
import GroupManager from '../views/manager/GroupManager.vue'
import GroupTypeManager from '../views/manager/GroupTypeManager.vue'

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
    component: Layout,
    redirect: '/dashboard'
  }
]

export const asyncRouterMap = [
  {
    path: '/dashboard',
    name: 'baseManager',
    component: Layout,
    children: [
      {
        path: 'userManager',
        name: 'userManager',
        component: UserManager
      },
      {
        path: 'menuManager',
        name: 'menuManager',
        component: MenuManager
      },
      {
        path: 'groupManager',
        name: 'groupManager',
        component: GroupManager
      },
      {
        path: 'groupTypeManager',
        name: 'groupTypeManager',
        component: GroupTypeManager
      },
    ]
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes.concat(asyncRouterMap)
})


