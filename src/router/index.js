import Vue from 'vue'
import VueRouter from 'vue-router'
import projectIndex from '../components/index.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'projectIndex',
    component: projectIndex,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'projectIndex',
        component: () => import('../views/index')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
