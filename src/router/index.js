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
    component: Layout
  }
]

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes.concat(asyncRouterMap)
})

const asyncRouterMap = [
  {
    path: '/baseManager',
    name: '基础配置管理',
    component: Layout,
    children: [
      {
        path: 'userManager',
        name: '用户管理',
        component: UserManager
      },
      {
        path: 'menuManager',
        name: '菜单管理',
        component: MenuManager
      },
      {
        path: 'groupManager',
        name: '角色管理',
        component: GroupManager
      },
      {
        path: 'groupTypeManager',
        name: '角色类型管理',
        component: GroupTypeManager
      },
    ]
  }
]


