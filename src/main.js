// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import'./assets/jquery.min.js'
import'./assets/zh-cn.js'
//css
import'./assets/css/bootstrap/dist/css/bootstrap.min.css'
import'./assets/css/index.css'
//element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
