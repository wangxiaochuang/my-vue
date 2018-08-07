import Vapi from "vuex-rest-api"
const session = new Vapi({
  state: {
    userinfo: {}
  }
}).delete({
  action: "logout",
  path: () => `/session`
}).post({
  action: "login",
  property: "userinfo",
  path: () => `/session`,
  onSuccess: (state, payload, axios) => {
    console.log(payload)
    // console.log(state.userinfo)
  }
}).getStore()


export default session