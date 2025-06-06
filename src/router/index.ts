import { createRouter, createWebHistory } from 'vue-router'
import ExchangeView from '../views/ExchangeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'exchange',
      component: ExchangeView
    },
    {
      path: '/offices',
      name: 'offices',
      component: () => import('../views/OfficesView.vue')
    }
  ]
})

export default router
