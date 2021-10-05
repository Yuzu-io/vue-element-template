const routes = [
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/',
    redirect: '/start'
  },
  {
    path: '/redirect',
    component: () => import('@/layout/index.vue'),
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/start',
    name: 'start',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '首页',
      icon: 'icon',
      noCache: true
    },
    children: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: 'home',
          icon: 'icon',
          affix: true
        }
      },
      {
        path: '/xuanxiang1',
        name: 'xuanxiang1',
        component: () => import('@/views/daohang1/xuanxiang1/xuanxiang1.vue'),
        meta: {
          title: 'xuanxiang1',
          icon: 'icon',
          noCache: true
        }
      },
      {
        path: '/xuanxiang2',
        name: 'xuanxiang2',
        component: () => import('@/views/daohang1/xuanxiang2/xuanxiang2.vue'),
        meta: {
          title: 'xuanxiang2',
          icon: 'icon',
          noCache: true
        }
      },
      {
        path: '/daohang2',
        name: 'daohang2',
        component: () => import('@/views/daohang2/daohang2.vue'),
        meta: {
          title: 'daohang2',
          icon: 'icon',
          noCache: true
        }
      },
      {
        path: '/daohang4',
        name: 'daohang4',
        component: () => import('@/views/daohang4/daohang4.vue'),
        meta: {
          title: 'daohang4',
          icon: 'icon',
          noCache: true
        }
      }
    ]
  }
]

export default routes
