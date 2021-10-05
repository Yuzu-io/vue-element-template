const Layout = () => import('@/layout/index.vue')

const routes = [
  // 刷新
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  // 首页
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          icon: 'icon',
          affix: true,
          Authority: true
        }
      }
    ]
  },
  // 导航1
  {
    path: '/daohang1',
    component: Layout,
    redirect: '/daohang1/xuanxiang1',
    meta: {
      title: '导航1',
      icon: 'icon',
      noCache: true,
      Authority: true
    },
    children: [
      {
        path: 'xuanxiang1',
        name: 'xuanxiang1',
        component: () => import('@/views/daohang1/xuanxiang1.vue'),
        meta: {
          title: '选项1',
          icon: 'icon',
          noCache: true,
          Authority: true
        }
      },
      {
        path: 'xuanxiang2',
        name: 'xuanxiang2',
        component: () => import('@/views/daohang1/xuanxiang2.vue'),
        meta: {
          title: '选项2',
          icon: 'icon',
          noCache: true,
          Authority: true
        }
      }
    ]
  },
  // 导航2
  {
    path: '/daohang2',
    component: Layout,
    redirect: '/daohang2/index',
    children: [
      {
        path: 'index',
        name: 'daohang2',
        component: () => import('@/views/daohang2/index.vue'),
        meta: {
          title: '导航2',
          icon: 'icon',
          noCache: true,
          Authority: true
        }
      }
    ]
  },
  // 导航4
  {
    path: '/daohang4',
    component: Layout,
    redirect: '/daohang4/index',
    children: [
      {
        path: 'index',
        name: 'daohang4',
        component: () => import('@/views/daohang4/index.vue'),
        meta: {
          title: '导航4',
          icon: 'icon',
          noCache: true,
          Authority: true
        }
      }
    ]
  }
]

export default routes
