// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import HelloWorld from './components/HelloWorld'

// Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HelloWorld
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
