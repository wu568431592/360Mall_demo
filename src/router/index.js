import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index.vue'
import allproduct from '../page/allproduct.vue'
import cart from '../page/cart.vue'
import center from '../page/center.vue'
import login from '../page/login.vue'
import register from '../page/register.vue'
import phoneLogin from '../page/phoneLogin.vue'
import orderList from '../page/orderList.vue'
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
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
    },
    {
      path: '/phoneLogin',
      component: phoneLogin
    },
    {
      path: '/orderList/:id',
      component: orderList
    },
  ]
})
