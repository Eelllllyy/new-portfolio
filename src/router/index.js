import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'AboutMe',
    component: () => import('@/modules/Greetings/page/aboutMe.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/modules/Cards/page/planets.vue')
  },
  {
    path: '/milkyWay',
    name: 'MilkyWay',
    component: () => import('@/modules/MilkyWay/page/milkyWay.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
