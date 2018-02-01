import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
    /* eslint-disable no-new */
const state = {
    userData: {
        'id': '',
        'role': 0,
        'name': '',
        'img': ''
    },
    video: {
        recommondList1: []
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
        state.userData.role = 0
    }
}
export default new Vuex.Store({
    state,
    mutations
})