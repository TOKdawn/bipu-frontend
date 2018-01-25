import Vue from 'vue'
import Vuex from 'vuex'
// import Cookies from 'js-cookie'

Vue.use(Vuex)

export default () => new Vuex.Store({
    state: {
        user: null,
        token: null,
    },
    getters: {
        isLogin(state) {
            return !!state.user
        },
        user(state) {
            return state.user ? state.user : {}
        },
    },
    actions: {
        nuxtServerInit() {

        },
        loginAfter() {

        },
    },
    mutations: {
        setUser(state, user) {
            if (user) {
                state.user = user || null
                state.token = user ? user.authToken : null
            }
        },
        logoutUser(state) {
            state.user = null
            state.token = null
        },
    },
})
