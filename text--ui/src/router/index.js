import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from 'components/Login'
import Home from 'components/Home'
const router = new VueRouter({
  routes:[
    {path:'',redirect:'/login'},
    {path:'/login',component:Login},
    {path:'/home',component:Home},
  ]
})

//路由守卫导航
router.beforeEach((to,from,next)=>{
  if(to.path=='/login') return next()
  //获取session中token的值
  const tokenStr=window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next()
 })

export default router