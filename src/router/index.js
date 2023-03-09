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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
