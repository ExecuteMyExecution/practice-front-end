export default [
    {
        path: '/',
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: () => import('@/views/Home/index.vue')
            },
            {
                path: '/awards',
                component: () => import('@/views/Awards/index.vue')
            },
            {
                path: '/data-visualization',
                component: () => import('@/views/DataVisualization/index.vue')
            },
            {
                path: '/info-register',
                component: () => import('@/views/InfoRegister/index.vue')
            },
            {
                path: '/monthly-ranking',
                component: () => import('@/views/MonthlyRanking/index.vue')
            },
            {
                path: '/race-arrange',
                component: () => import('@/views/RaceArrange/index.vue')
            },
            {
                path: '/race-feedback',
                component: () => import('@/views/RaceFeedback/index.vue')
            },
            {
                path: '/race-info',
                component: () => import('@/views/RaceInfo/index.vue')
            },
            {
                path: '/recent-race',
                component: () => import('@/views/RecentRace/index.vue')
            },
            {
                path: '/train-info',
                component: () => import('@/views/TrainInfo/index.vue')
            },
            {
                path: '/rating-line/:realname',
                name: 'rating-line',
                component: () => import('@/components/RatingLine/index.vue')
            },
            {
                path: '/tag-polor',
                component: () => import('@/components/TagPolor/index.vue')
            },
            {
                path: '/problem/:cid',
                component: () => import('@/views/Problem/index.vue')
            },
            {
                path: '/submit',
                name: 'submit',
                component: () => import('@/views/Submit/index.vue')
            },
            {
                path: '/code/:code',
                name: 'code',
                component: () => import('@/views/Code/index.vue')
            },
            {
                path: '/cansai/:name',
                name: 'cansai',
                component: () => import('@/views/Cansai/index.vue')
            },
            {
                path: '/user/:realname',
                name: 'user',
                component: () => import('@/views/User/index.vue')
            }
        ]
    }
]