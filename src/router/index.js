import Vue from 'vue'
import VueRouter from 'vue-router'

import navmenu from './module/navmenu'

Vue.use(VueRouter)

const routes = [
  // 登录
  {
    path: '/login',
    component: () => import('../views/login/index.vue')
  }
]
// 归纳路由
// navmenu[Symbol.isConcatSpreadable] = true // 展开
const constantRoutes = routes.concat(navmenu)

// 防止路由冗余
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRoutes
})

export default router
