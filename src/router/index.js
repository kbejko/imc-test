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

// scrolls to top, but I like the way pagination scrolls without this on laptop
// router.beforeEach(() => {
//   window.scrollTo(0, 0)
// })
export default router
