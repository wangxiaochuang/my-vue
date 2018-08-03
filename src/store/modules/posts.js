import Vapi from "vuex-rest-api"
// import { base_url } from '../../config/base'
const posts = new Vapi({
    // baseURL: base_url,
    requestConfig: {
        headers: {
            'token': '1234'
        }
    },
    state: {
        posts: [],
        post: ''
    }
}).get({
    action: "getPost",
    property: "post",
    path: ({ id }) => `/posts/${id}`
}).get({
    action: "listPosts",
    property: "posts",
    path: "/posts"
}).post({
    action: "updatePost",
    property: "post",
    path: ({ id }) => `/posts/${id}`
}).getStore()


export default posts