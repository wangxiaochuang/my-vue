import Vapi from "vuex-rest-api"
import { setToken } from "../../utils/cookie"
import { auth_key } from "../../config/base"
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
  onSuccess: (state, payload) => {
    setToken(auth_key, payload.data.token)
    state.userinfo = payload.data.userinfo
  }
}).getStore()


export default session