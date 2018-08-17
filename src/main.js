import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'

import './element/index'
import './awesome/index'
import '@/styles/index.scss'
import './mock/mock'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
