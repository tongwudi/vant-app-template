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
      title: '首页',
      navShow: false,
      footShow: true
    }
  },
  {
    path: '/photo',
    component: () => import('views/photo/index.vue'),
    meta: {
      title: '图库',
      navShow: true,
      footShow: true
    }
  },
  {
    path: '/music',
    component: () => import('views/music/index.vue'),
    meta: {
      title: '音乐',
      navShow: true,
      footShow: true
    }
  },
  {
    path: '/mine',
    component: () => import('views/mine/index.vue'),
    meta: {
      title: '我的',
      navShow: true,
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
