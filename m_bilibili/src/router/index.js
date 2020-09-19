import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '../views/register'
import Login from "../views/Login"
import userInfo from "../views/userInfo"
import edit from "../views/edit";
import Home from '../views/Home'
import Article from "../views/Article";
Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      component: Home,
      meta: {
        keeplive: true
      }
    },
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
    {
      path: '/article/:id',
      component: Article
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
