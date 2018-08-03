// module.exports = file => import('../views/' + file + '.vue')
module.exports = (file) => {
    return require('../views/' + file + '.vue')
}
