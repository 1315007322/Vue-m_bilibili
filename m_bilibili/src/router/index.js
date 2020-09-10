import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '../views/register'
import Login from "../views/Login"
import userInfo from "../views/userInfo"
Vue.use(VueRouter)

  const routes = [

  {
    path: '/register',
    component: register
  },
  {
    path: '/Login',
    component: Login
  },
  {
    path: '/userInfo',
    component: userInfo
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
