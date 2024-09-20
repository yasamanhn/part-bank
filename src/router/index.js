import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../pages/Login.vue')
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('../pages/personalInformation.vue')
    },
    {
      path: '/uploader',
      name: 'uploader',
      component: () => import('../pages/uploader.vue')
    },

    {
      path: '/confirm',
      name: 'confirm',
      component: () => import('../pages/confirmInformation.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // component: LayoutDashboard,
      children: [{ path: '', name: 'profile', component: () => import('@/pages/Dashboard.vue') }]
    }
  ]
})

export default router
