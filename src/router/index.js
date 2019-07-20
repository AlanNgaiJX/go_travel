import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'

import test from '@/pages/test'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
    ,
    {
      path: '/test',
      name: 'Test',
      component: test
    }
  ]
})
