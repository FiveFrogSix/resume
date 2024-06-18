// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/DefaultLayout.vue'),
    redirect: {
      name: "Home"
    },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/HomeView.vue'),
      },
      {
        path: 'skills',
        name: 'Skills',
        component: () => import('@/views/SkillView.vue'),
      },
      {
        path: 'career-path',
        name: 'CareerPath',
        component: () => import('@/views/TimelineView.vue'),
      },
      {
        path: 'contacts',
        name: 'Contacts',
        component: () => import('@/views/ContactView.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: import('@/views/NotFoundView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
