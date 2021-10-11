import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// svg
import '@/svgIcon/index.js'
// cookie
import { getCookie } from './utils/auth'
// mockjs
import '../mock/user'

// 导入nprogress
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

// 进度条+权限
router.beforeEach((to, from, next) => {
  // 判断访问的页面是否需要权限
  if (to.meta.Authority) {
    if (getCookie('Admin-Token') !== '') {
      NProgress.start()
      next()
    } else {
      next({ path: '/login' })
    }
  } else {
    NProgress.start()
    next()
  }
})

router.afterEach(() => {
  NProgress.done()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
