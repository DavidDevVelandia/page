import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'homeView',
    component: () => import("../views/homeView.vue")
  },
  {
    path: '/cumpleaños',
    name: 'birthdayView',
    component: ()=>import("../views/birthdayView.vue")
  },
  {
    path: '/bautismos',
    name: 'baptismView',
    component: ()=>import("../views/baptismView.vue")
  },
  {
    path: '/matriomonios',
    name: 'weddingView',
    component: ()=>import("../views/weddingView.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
