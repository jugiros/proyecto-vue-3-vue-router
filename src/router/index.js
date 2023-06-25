import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// Función para cargar las vistas mediante una promesa para lazy loading
const loadComponent = (view) => {
  return () => import(`../views/${view}.vue`);
}
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: loadComponent('AboutView')
  },
  {
    path: '/contact',
    name: 'contacto',
    component: loadComponent('Contact')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
