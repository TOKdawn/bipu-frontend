//baseUrl ,在这可以通过不同的script命令参数获得不通接口地址
const baseURL = ''

module.exports = {
    srcDir: 'src/',
    /*
    ** Headers of the page
    */
    plugins: [
        { src: '~plugins/index.js' },
        { src: '~plugins/service.js', ssr: true },
        { src: '~plugins/unssr.js', ssr: false },
    ],
    modules: [
        '@nuxtjs/axios',
    ],
    axios: {
        credentials: false,
        baseURL,
        requestInterceptor: (config, { store }) => {
            if (store.state.token) {
                config.headers.common.Authorization = store.state.token
            }
            return config
        },
        redirectError: {
            401: '/login',
        },
        disableDefaultErrorHandler: false,
    },
    performance: {
        prefetch: true,
        gzip: true,
    },
    router: {
        scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition
            }
            let position = {}
            // 目标页面子组件少于两个
            if (to.matched.length < 2) {
                // 滚动至页面顶部
                position = { x: 0, y: 0 }
            } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
                // 如果目标页面子组件中存在配置了scrollToTop为true
                position = { x: 0, y: 0 }
            }
            // 如果目标页面的url有锚点,  则滚动至锚点所在的位置
            if (to.hash) {
                position = { selector: to.hash }
            }
            return position
        },
    },
    head: {
        title: 'bipubipu',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'bipubipu' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
        script: [
            { src: '/ie.js' },
        ],
    },
    /*
    ** Customize the progress bar color
    */
    loading: { color: '#3B8070' },
    /*
    ** global CSS
    */
    css: [
        'normalize.css/normalize.css',
        'iview/dist/styles/iview.css',
        'assets/styles/common.scss',
    ],
    /*
    ** Build configuration
    */
    build: {
        vendor: ['iview'],
        analyze: {
            analyzerMode: 'static',
        },
        filenames: {
            vendor: 'bwc.vendor.[hash].js',
            app: 'bwc.app.[chunkhash].js',
        },
        postcss: [
            require('postcss-nested')(),
            require('postcss-responsive-type')(),
            require('postcss-hexrgba')(),
            require('autoprefixer')({
                browsers: ['last 3 versions'],
            }),
        ],
        /*
        ** Run ESLint on save
        */
        extend(config, ctx) {
            if (ctx.isDev && process.client) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                })
            }
        },
    },
}
