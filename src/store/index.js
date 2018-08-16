import Vue from 'vue'
import Vuex from 'vuex'
import posts from './modules/posts'
import session from './modules/session'
import app from './modules/app'
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '../utils/cookie'
import { auth_key, base_url } from '../config/base'
import getters from './getters'

// axios setting begin
// Vue.use(axios)
Vue.prototype.$http = axios

axios.defaults.baseURL = base_url
axios.interceptors.request.use(function (config) {
  NProgress.start()
  let token = getToken(auth_key)
  if (token) {
    config.headers[auth_key] = token
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  NProgress.done()
  const res = response.data
  if (response.status === 401 || res.error_no === 40101) {
    console.log('please login agin')
    return Promise.reject('error');
  } else if (res.error_no === 40301) {
    console.log('permission deny')
    return Promise.reject('error');
  } else if (res.error_no === 40001) {
    console.log('username or password wrong')
    return Promise.reject('error');
  } else if (response.status !== 200 && res.error_no !== 200) {
    console.log(res.error_message)
    return Promise.reject('error');
  } else {
    return res
  }
}, function (error) {
  return Promise.reject(error);
})
// axios setting end

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    posts,
    session
  },
  getters
})
