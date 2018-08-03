import Vue from 'vue'
import Vuex from 'vuex'
import posts from './modules/posts'
import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '../utils/cookie'
import { auth_key, base_url } from '../config/base'

// axios setting begin
Vue.use(axios)
axios.defaults.baseURL = base_url
axios.interceptors.request.use(function (config) {
    NProgress.start()
    config.headers[auth_key] = getToken(auth_key)
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    NProgress.done()
    return response;
}, function (error) {
    return Promise.reject(error);
})
// axios setting end


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        posts
    }
})
