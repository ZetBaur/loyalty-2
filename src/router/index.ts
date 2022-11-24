import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'LoginPage',
            alias: '/',
            component: () => import('@/views/LoginPage.vue'),
            meta: {
                layout: 'auth',
                auth: false
            }
        },

        {
            path: '/campaigns',
            name: 'campaigns',
            component: () => import('@/views/CampaignsPage.vue'),
            meta: {
                layout: 'main',
                auth: false
            }
        },

        {
            path: '/flowpage',
            name: 'flowpage',
            component: () => import('@/views/vueflow/FlowPage.vue'),
            meta: {
                layout: 'main',
                auth: false
            }
        },

        {
            path: '/test',
            name: 'test',
            component: () => import('@/views/TestPage.vue'),
            meta: {
                layout: 'main',
                auth: false
            }
        }
    ]
});

export default router;
