import { createRouter, createWebHistory } from 'vue-router'
// route level code-splitting
// which is lazy-loaded when the route is visited.
const Home = () => import('../views/Home.vue')
const Product = () => import('../views/Product.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:id',
    name: 'Product',
    props: true,
    component: Product
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
