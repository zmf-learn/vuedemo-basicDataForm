import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Index from '@/views/Index'
import HelloWorld from '@/components/HelloWorld'
import drugInfoSearch from '@/views/baseInfoSearch/drugInfoSearch'
import diagnoseInfoSearch from '@/views/baseInfoSearch/diagnoseInfoSearch'
import hospitalInfoSearch from '@/views/baseInfoSearch/hospitalInfoSearch'

Vue.use(Router)
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Login',
//       component: Login
//     },{
//       path: '/home',
//       name: 'Home',
//       component: Home,
//     }
//   ]
// })

export default new Router({
  // mode: 'history',
  routes: [
    // 定义的初始路由路径
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {title: '登录'},
      hidden:true
    },
    {
      path: '/Index',
      name: '基本信息查询',
      component: Index,
      meta: {title: '主页'},
      children: [
        { path: '@/baseInfoSearch/drugInfoSearch', component: drugInfoSearch, name: '药品信息查询' },
        { path: '@/baseInfoSearch/diagnoseInfoSearch', component: diagnoseInfoSearch, name: '诊断信息查询' },
        { path: '@/baseInfoSearch/hospitalInfoSearch', component: hospitalInfoSearch, name: '医院信息查询' }
      ]
    }
  ]
})