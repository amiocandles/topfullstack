import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes:RouteConfig[] = [
  {
    path: '/',
    component: Main,
    children:[
      {name:'home',path:'/',component:Home}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
