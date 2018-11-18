import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'

import MainContent from '@/components/MainContent'
import LoginPanel from '@/components/LoginPanel'
import RegisterPanel from '@/components/RegisterPanel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainPanel',
      component: MainContent
    },
    {
      path: '/login',
      name: 'mainPanel',
      component: LoginPanel
    },
    {
      path: '/register',
      name: 'mainPanel',
      component: RegisterPanel
    }
  ]
})
