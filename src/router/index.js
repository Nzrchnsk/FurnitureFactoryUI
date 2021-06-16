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
  {
    path: '/modules',
    name: 'modulesDirectory',
    component: () => import('../views/modules/modulesDirectory'),
  },
  {
    path: '/modules/:moduleId',
    name: 'moduleEdit',
    component: () => import('../views/modules/moduleChange'),
    props: true,
  },
  {
    path: '/modules/create',
    name: 'moduleCreate',
    component: () => import('../views/modules/moduleChange'),
    props: true,
  },
  {
    path: '/modules/show/:moduleId',
    name: 'moduleShow',
    component: () => import('../views/modules/moduleShow'),
    props: true,
  },
  {
    path: '/orders',
    name: 'ordersDirectory',
    component: () => import('../views/orders/ordersDirectory'),
  },
  {
    path: '/orders/create',
    name: 'orderCreate',
    component: () => import('../views/orders/orderChange'),
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
