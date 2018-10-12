import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
    /* eslint-disable no-new */
const state = {
    userData: {
        'id': '123',
        'role': 1,
        'name': '',
        'img': ''
    },
    video: {
        recommondList1: []
    },
    login: {
        flag: 1
    }
}
const mutations = {
    updata(state, userData) {
        state.userData.role = userData.role
        state.userData.uName = userData.name
        state.userData.id = userData.id
        state.userData.img = userData.img
    },
    logout(state) {
        state.login.flag = 0
        state.userData.role = 0
    },
    userlog(state) { //用户触发登录操作
        state.login.flag = 1
    }
}
export default new Vuex.Store({
    state,
    mutations
})