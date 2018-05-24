// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import routes from './router'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import iView from 'iview'
import axios from 'axios'
import marked from 'marked'
import highlight from 'highlight.js'
import 'highlight.js/styles/github.css'
import 'github-markdown-css/github-markdown.css'
import '../my-theme/index.less'
import 'iview/dist/styles/iview.css'
import { gitHubApi } from './utils'
import store from './vuex/'
import Transcore from 'je-transcore'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://www.dawninshadow.com:7001'

Vue.prototype.$http = axios
Vue.prototype.$gitHubApi = gitHubApi
Vue.prototype.$highlight = highlight
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(iView)
    // Vue.use(Transcore)

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    highlight: function(code) {
        return Vue.prototype.$highlight.highlightAuto(code).value
    }
})
Vue.prototype.$marked = marked


const router = new VueRouter({
    routes
})
router.beforeEach((to, from, next) => {
        if (to.meta.requireAuth) {
            if (store.state.userData.role === 0) {
                console.log(store.state.userData.role)
                console.log('验证失败')
                next({
                    path: '/basic/home',
                    query: {
                        redirect: to.fullPath
                    }
                })
            } else {
                console.log(store.state.userData.role)
                console.log('验证成功')
                next()
            }
        } else {
            next()
        }
    })
    /* eslint-disable no-new */
new Vue({
    router, // router这个名字不能改
    store
    // render: h => h(App)
}).$mount('#app')