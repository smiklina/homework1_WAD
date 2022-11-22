import {createRouter, createWebHistory} from 'vue-router'
import home from '../pages/home.vue'

const router = createRouter( {
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            components: home
        },
        {
            path: '/login',
            name: 'login',
            components: () => import('../pages/login.vue')
        }
    ]
});
export default router