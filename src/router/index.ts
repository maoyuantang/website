/*
 * @Author: tmy
 * @Date: 2019-12-04 09:24:02
 * @LastEditors  : tmy
 * @LastEditTime : 2019-12-25 15:35:48
 * @Description: Do not edit
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/views/index.vue'),
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import('@/components/home/home.vue'),
            },
            {
                path: '/Solution',
                name: 'Solution',
                component: () => import('@/components/Solution/Solution.vue'),
            },
            {
                path: '/AboutUs',
                name: 'AboutUs',
                component: () => import('@/components/AboutUs/AboutUs.vue'),
            },
            {
                path: '/CooperationCase',
                name: 'CooperationCase',
                component: () => import('@/components/CooperationCase/CooperationCase.vue'),
            },
            {
                path: '/ChannelCooperation',
                name: 'ChannelCooperation',
                component: () => import('@/components/ChannelCooperation/ChannelCooperation.vue'),
            },
        ],
    },

];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
