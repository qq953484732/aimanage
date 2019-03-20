// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//重置样式
import './assets/styles/reset.css'
//解决手机端1px像素问题
import './assets/styles/border.css'
//解决部分浏览器点击延迟300ms
import fastClick from 'fastclick'
//引入Vuex
import store from './store/'
//导入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require swiper styles
import 'swiper/dist/css/swiper.css'
//引入ele ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入字体小图标
import "./assets/styles/iconfont.css"
import "./assets/styles/indexicon/iconfont.css"

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper, /* { default global options } */)

fastClick.attach(document.body)

Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
