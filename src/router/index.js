import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('views/home/index.vue'),
        meta: {
            footShow: true
        }
    },
    {
        path: '/photo',
        component: () => import('views/photo/index.vue'),
        meta: {
            footShow: true
        }
    },
    {
        path: '/music',
        component: () => import('views/music/index.vue'),
        meta: {
            footShow: true
        }
    },
    {
        path: '/mine',
        component: () => import('views/mine/index.vue'),
        meta: {
            footShow: true
        }
    },
    {
        path: '/login',
        component: () => import('views/login.vue'),
    }
]

const router = new VueRouter({
    routes
})

export default router
