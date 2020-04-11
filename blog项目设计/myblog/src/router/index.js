import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import indexNav from '@/components/view/index_nav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexNav',
      component: indexNav
    }
  ]
})
