import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import module2 from '@/components/module2'
import module3 from '@/components/module3'

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
    }
  ]
})
