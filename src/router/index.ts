import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuizView from '../views/QuizView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    // dans l'ordre : relax, à propos, trivia, expert
    {
      path: '/relax',
      name: 'relax',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/projet',
      name: 'projet',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/trivia',
      name: 'trivia',
      component: () => import('../views/TriviaView.vue'),
    },
    {
      path: '/pro',
      name: 'pro',
      component: () => import('../views/QuizView.vue'),
    },
  ],
})

export default router
