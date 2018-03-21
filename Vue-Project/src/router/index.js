import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/header'
import footer from '@/components/footer'
import index from '@/pages/index'
import step from '@/pages/step'
import fastShop from '@/pages/fastShop'
import success from '@/pages/success'
import strength from '@/pages/strength'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/step',
      name: 'step',
      component: step
    },
    {
      path: '/success',
      name: 'success',
      component:success
    },
    {
      path: '/fastShop',
      name: 'fastShop',
      component:fastShop
    },
    {
      path: '/strength',
      name: 'strength',
      component:strength
    }
  ]
})
