import Vue from 'vue'
import getMethods from '../service'

const servicePlugin = {
    install() {
        if (Vue.__nuxt_service_installed__) {
            return
        }
        Vue.__nuxt_service_installed__ = true
        if (!Vue.prototype.hasOwnProperty('$service')) {  //eslint-disable-line
            Object.defineProperty(Vue.prototype, '$service', {
                get() {
                    return this.$root.$options.$service
                },
            })
        }
    },
}
Vue.use(servicePlugin)

export default (ctx) => {
    const { app, app: { $axios } } = ctx
    const service = getMethods($axios)
    app.$service = service
    ctx.$service = service
}

