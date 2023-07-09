export default [
    {
        path: '/',
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: () => import('../views/Home/index.vue')
            },
            {
                path: '/awards',
                component: () => import('../views/Awards/index.vue')
            },
            {
                path: '/data-visualization',
                component: () => import('../views/DataVisualization/index.vue')
            },
            {
                path: '/info-register',
                component: () => import('../views/InfoRegister/index.vue')
            },
            {
                path: '/monthly-ranking',
                component: () => import('../views/MonthlyRanking/index.vue')
            },
            {
                path: '/race-arrange',
                component: () => import('../views/RaceArrange/index.vue')
            },
            {
                path: '/race-feedback',
                component: () => import('../views/RaceFeedback/index.vue')
            },
            {
                path: '/race-info',
                component: () => import('../views/RaceInfo/index.vue')
            },
            {
                path: '/recent-race',
                component: () => import('../views/RecentRace/index.vue')
            },
            {
                path: '/train-info',
                component: () => import('../views/TrainInfo/index.vue')
            }
        ]
    }
]