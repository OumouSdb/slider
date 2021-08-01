import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
 
  {
    path: '/slider',
    name: 'Slider',
    // route level code-splitting
    // this generates a separate chunk (slider.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "slider" */ '../views/Slider.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
