// module.exports = file => () => import('@/views/' + file + '.vue')

// module.exports = file => resolve => require(['../views/' + file + '.vue'], resolve)

module.exports = (file) => {
    // let res = import('../views/' + file + '.vue')
    // console.log(res)
    let Home = require('../views/Home.vue')
    return Home
}