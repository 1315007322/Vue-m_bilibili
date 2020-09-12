import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '../views/register'
import Login from "../views/Login"
import userInfo from "../views/userInfo"
import edit from "../views/edit";
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
    component: userInfo,
    meta: {
      istoken: true
    }
  },
  {
    path: '/edit',
    component: edit,
    meta: {
      istoken: true
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to,from,next) => {
  if(!localStorage.getItem('token') && !localStorage.getItem('id') && to.meta.istoken == true){
   router.push('/login')
    Vue.prototype.$msg.fail('请重新登录')
    return
  }
  next()

})

export default router
