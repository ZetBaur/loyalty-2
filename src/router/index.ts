import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from '../views/HomeView.vue';

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
            path: '/home',
            name: 'home',
            component: () => import('@/views/HomeView.vue'),
            meta: {
                layout: 'main',
                auth: false
            }
        }
    ]
});

export default router;
