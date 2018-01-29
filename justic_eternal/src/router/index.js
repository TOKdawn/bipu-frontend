import App from '../App.vue'
export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: r => require.ensure([], () => r(require('../components/basic/basic.vue')), 'basic'),
        redirect: '/basic/home',
        // meta: {
        //     requireAuth: true
        // },
        children: [{
                path: '/basic/home',
                component: r => require.ensure([], () => r(require('../components/basic/home/home.vue')), 'home'),

            }

        ]
    }]
}]