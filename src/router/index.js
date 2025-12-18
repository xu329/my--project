import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Adopt from '@/views/Adopt.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import NotFound from '@/views/404.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/adopt/:type', component: Adopt, props: true },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
