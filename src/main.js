// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store1 from './store/index'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex);
require('!style-loader!css-loader!less-loader!./assets/css/main.less')
require('!style-loader!css-loader!less-loader!./assets/css/animate.css')

//Vue.config.productionTip = false

var store = store1.store;


router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})
  next()
});
router.afterEach(function (to) {
  if (window.ga) {
    window.ga('set', 'page', to.fullPath) // 你可能想根据请求参数添加其他参数，可以修改这里的 to.fullPath
    window.ga('send', 'pageview')
  }
  store.commit('updateLoadingStatus', {isLoading: false})
})
import { ToastPlugin,AlertPlugin } from 'vux'
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
