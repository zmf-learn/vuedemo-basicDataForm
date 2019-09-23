import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Index from '@/views/Index'
import HelloWorld from '@/components/HelloWorld'
//import Home from '@/views/baseInfoSearch/drugInfoSearch'

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
      meta: {title: '登录'}
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index,
      meta: {title: '主页'},
      children: [
        {
          path: '/HelloWorld',
          component: resolve => require(['@/components/HelloWorld.vue'], resolve),
          meta: {title: '新建__出入库单'}
        },
        {
          path: '/HelloWorld',
          component: resolve => require(['@/components/HelloWorld.vue'], resolve),
          meta: {title: '新建__产品借出单'}
        },
        {
          path: '/HelloWorld',
          component: resolve => require(['@/components/HelloWorld.vue'], resolve),
          meta: {title: '新建__产品返回单'}
        },
      ]
    }
  ]
})
