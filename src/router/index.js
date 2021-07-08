// import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
//
// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   }
//   // {
//   //   path: '/about',
//   //   name: 'About',
//   //   // route level code-splitting
//   //   // this generates a separate chunk (about.[hash].js) for this route
//   //   // which is lazy-loaded when the route is visited.
//   //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   // }
// ]
//
// const router = createRouter({
//   history: createWebHashHistory(),
//   routes
// })
//
// export default router
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home'
import Brazil from '../views/Brazil'
import Hawaii from '../views/Hawaii'
import Jamaica from '../views/Jamaica'
import Panama from '../views/Panama'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/brazil',
    name: 'brazil',
    component: Brazil
  },
  {
    path: '/hawaii',
    name: 'hawaii',
    component: Hawaii
  },
  {
    path: '/jamaica',
    name: 'jamaica',
    component: Jamaica
  },
  {
    path: '/panama',
    name: 'panama',
    component: Panama
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
