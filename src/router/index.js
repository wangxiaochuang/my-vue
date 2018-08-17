import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout.vue'
import Login from '../views/login/index.vue'

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
    name: '导航一',
    component: Layout,
    children: [
      {
        path: 'userManager',
        name: '导航二',
        component: UserManager
      },
      {
        path: 'menuManager',
        name: '导航三',
        component: MenuManager
      },
      {
        path: 'groupManager',
        name: '导航四',
        component: GroupManager
      },
      {
        path: 'groupTypeManager',
        name: '导航五',
        component: GroupTypeManager,
        children: [
          {
            path: 'adduser',
            name: 'adduser',
            component: MenuManager
          }
        ]
      }
    ]
  }
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes.concat(asyncRouterMap)
})


