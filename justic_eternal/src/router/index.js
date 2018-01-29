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

            }, {
                path: '/basicscore/:scoreId',
                name: 'score',
                component: r => require.ensure([], () => r(require('../components/basic/score/score.vue')), 'score')
            }, {
                path: '/basic/user/:userNamed',
                name: 'user',
                meta: {
                    requireAuth: true
                },
                component: r => require.ensure([], () => r(require('../components/basic/user/user.vue')), 'user')
            }, {
                path: '/basic/volume/:volumeId',
                name: 'volume',
                component: r => require.ensure([], () => r(require('../components/basic/volumes/volumes.vue')), 'volume')
            }, {
                path: '/basic/download',
                name: 'download',
                component: r => require.ensure([], () => r(require('../components/basic/download/download.vue')), 'download'),
            }, {
                path: '/basic/edit',
                name: 'edit',
                meta: {
                    requireAuth: true
                },
                component: r => require.ensure([], () => r(require('../components/basic/edit/edit.vue')), 'edit'),
            }, {
                path: '/basic/instructions',
                name: 'instructions',
                component: r => require.ensure([], () => r(require('../components/basic/instructions/instructions.vue')), 'instructions'),
            }, {
                path: '/basic/translator',
                name: 'translator',
                component: r => require.ensure([], () => r(require('../components/basic/translator/translator.vue')), 'translator'),
            },

            {
                path: '/basic/works',
                name: 'works',
                component: r => require.ensure([], () => r(require('../components/basic/works/works.vue')), 'works'),
            },

        ]
    }]
}]