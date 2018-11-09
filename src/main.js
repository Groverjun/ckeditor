// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import'./assets/jquery.min.js'
import global_ from './assets/js/json.js'
Vue.prototype.GLOBAL = global_
import'./assets/zh-cn.js'
import baseURL from  './assets/js/config'
Vue.prototype.baseURL = baseURL
//css
import'./assets/css/bootstrap/dist/css/bootstrap.min.css'
import'./assets/css/index.css'
//xhr
import {xhr} from '@/assets/js/api'
Vue.prototype.$xhr = xhr

//element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 
//
import editor from 'vue2-medium-editor'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
Vue.use(editor)
//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
//
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: {
  	App,
  },
  template: '<App/>'
})
