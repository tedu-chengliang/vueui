import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import List from '@/components/List'
import Demo01 from '@/components/Demo01'
import Home from '@/components/weixin/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/demo01',
      component: Demo01
    },
    {
      path: '/weixin',
      component: Home
    }
  ]
})
