// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/index'
import router from './router'
require('!style-loader!css-loader!less-loader!./assets/css/main.less')
require('!style-loader!css-loader!less-loader!./assets/css/animate.css')
//Vue.config.productionTip = false

/* eslint-disable no-new */
var vm=new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
