import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index.vue'
import allproduct from '../page/allproduct.vue'
import cart from '../page/cart.vue'
import center from '../page/center.vue'
Vue.use(Router);

export default new Router({
  mode:'history',
  base:__dirname,
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/allproduct',
      component: allproduct
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/center',
      component: center
    },
  ]
})
