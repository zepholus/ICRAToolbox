import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Menus from '../views/Menus.vue'
import AppInfo from "../components/AppInfo";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Menus,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: ':appName',
        name: 'appInfo',
        props: true,
        component: AppInfo
      },
    ]
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
