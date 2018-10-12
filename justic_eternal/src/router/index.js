import App from '../App.vue'
export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: r => require.ensure([], () => r(require('../components/basic/basic.vue')), 'basic'),
        redirect: '/basic/home/:keyword?',
        // meta: {
        //     requireAuth: true
        // },
        children: [{
                path: '/basic/home/:keyword?',
                name: 'home',
                component: r => require.ensure([], () => r(require('../components/basic/home/home.vue')), 'home')

            }, {
                path: '/basic/score/:scoreId',
                name: 'score',
                component: r => require.ensure([], () => r(require('../components/basic/score/score.vue')), 'score')
            }, {
                path: '/basic/user/:userId',
                name: 'user',
                meta: {
                    requireAuth: true
                },
                component: r => require.ensure([], () => r(require('../components/basic/user/user.vue')), 'user')
            }, {
                path: '/basic/volumes',
                name: 'volumes',
                component: r => require.ensure([], () => r(require('../components/basic/volumes/volumes.vue')), 'volumes')
            }, {
                path: '/basic/volume/:volumeId',
                name: 'volume',
                component: r => require.ensure([], () => r(require('../components/basic/volumes/volume.vue')), 'volume')
            }, {
                path: '/basic/download',
                name: 'download',
                component: r => require.ensure([], () => r(require('../components/basic/download/download.vue')), 'download')
            }, {
                path: '/basic/edit/:volumeId',
                name: 'edit',
                meta: {
                    requireAuth: true
                },
                component: r => require.ensure([], () => r(require('../components/basic/edit/edit.vue')), 'edit')
            }, {
                path: '/basic/instructions',
                name: 'instructions',
                component: r => require.ensure([], () => r(require('../components/basic/instructions/instructions.vue')), 'instructions')
            }, {
                path: '/basic/translator',
                name: 'translator',
                component: r => require.ensure([], () => r(require('../components/basic/translator/translator.vue')), 'translator')
            }, {
                path: '/basic/works',
                name: 'works',
                component: r => require.ensure([], () => r(require('../components/basic/works/works.vue')), 'works')
            }, {
                path: '/basic/play/:videoId',
                name: 'play',
                component: r => require.ensure([], () => r(require('../components/basic/works/play.vue')), 'play')
            },

        ]
    }, {
        path: '/test',
        component: r => require.ensure([], () => r(require('../components/test.vue')), 'test'),

    }]
}]