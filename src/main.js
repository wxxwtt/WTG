// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "normalize.css"
import './assets/style/font/iconfont.css'
import './assets/style/css/border.css'
// 引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Axios from "axios"
Vue.prototype.$axios = Axios
Vue.use(VueAwesomeSwiper, /* { default global options } */Axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
