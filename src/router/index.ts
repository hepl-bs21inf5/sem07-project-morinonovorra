import { createRouter, createWebHashHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'

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
      component: AboutView,
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
    {
      path: '/',
      redirect: '/projet', // Redirection par défaut vers la page "À propos"
    },
  ],
})

export default router
