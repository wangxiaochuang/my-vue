import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            // component: _import('Home')
            component: _import('Home')
        },
        {
            path: '/about',
            name: 'about',
            component: _import('About')
        }
    ]
})
