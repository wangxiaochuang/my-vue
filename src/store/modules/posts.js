import Vapi from "vuex-rest-api"
const posts = new Vapi({
    baseURL: "https://jsonplaceholder.typicode.com",
    state: {
        posts: [],
        currentPost: ''
    }
}).get({
    action: "getPost",
    property: "currentPost",
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