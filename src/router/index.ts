import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DisclaimerPage from '../views/DisclaimerPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/disclaimer',
      name: 'Disclaimer',
      component: DisclaimerPage
    }
  ]
})

export const agreedToDisclaimerKey = '__AgreedToDisclaimer__'

// 路由守卫
router.beforeEach((to, from, next) => {
  const agreedToDisclaimer = localStorage.getItem(agreedToDisclaimerKey)
  console.log('xbs', '07-10 17:00:21', to)

  if (to.name === 'Disclaimer') {
    next()
  } else {
    if (!agreedToDisclaimer) {
      next({ name: 'Disclaimer' })
    } else {
      next()
    }
  }
})

export default router
