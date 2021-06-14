import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Modules from '../views/Modules.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/modules',
    name: 'Modules',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Modules
  },
  {
    path: '/sign_in',
    name: 'signIn',
    component: () => import('../views/auth/signIn'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/auth/register'),
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../views/users/usersList'),
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
