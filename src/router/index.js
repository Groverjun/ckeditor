import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import module2 from '@/components/module2'
import module3 from '@/components/module3'
import module4 from '@/components/module4'
import module5 from '@/components/module5'
import demo1 from '@/components/echarts/demo1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/module2',
      name: 'module2',
      component: module2
    },
    {
      path: '/module3',
      name: 'module3',
      component: module3
    },
    {
      path: '/module4',
      name: 'module4',
      component: module4
    },
    {
      path: '/module5',
      name: 'module5',
      component: module5
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: demo1
    }
  ]
})
