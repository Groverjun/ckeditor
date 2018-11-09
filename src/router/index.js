import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import module1 from '@/components/module1'
import module2 from '@/components/module2'
import module3 from '@/components/module3'
import module4 from '@/components/module4'
import module5 from '@/components/module5'
import module6 from '@/components/module6'
import module8 from '@/components/module8'
import module9 from '@/components/module9'
import module11 from '@/components/module11'
import module13 from '@/components/module13'
import module15 from '@/components/module15'
import demo1 from '@/components/echarts/demo1'
import demo2 from '@/components/echarts/demo2'
import select1 from '@/components/select/select1'
import alert from '@/components/select/alert'
import files from '@/components/files'
import txt1 from '@/components/word/txt1'
import VueQuillEditor from '@/components/VueQuillEditor'
import time from '@/components/time/index'
import video from '@/components/video/video'
import up from '@/components/time/up'
import swiper from '@/components/swiper/index'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
     {
      path: '/module1',
      name: 'module1',
      component: module1
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: swiper
    },
    {
      path: '/video',
      name: 'video',
      component: video
    },
    {
      path: '/up',
      name: 'up',
      component: up
    },    
    {
      path: '/time',
      name: 'time',
      component: time
    },
    {
      path: '/alert',
      name: 'alert',
      component: alert
    },
    {
      path: '/txt1',
      name: 'txt1',
      component: txt1
    },
    {
      path: '/module2',
      name: 'module2',
      component: module2
    },
    {
      path: '/files',
      name: 'files',
      component: files
    },
    {
      path: '/VueQuillEditor',
      name: 'VueQuillEditor',
      component: VueQuillEditor
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
      path: '/module6',
      name: 'module6',
      component: module6
    },
    {
      path: '/module8',
      name: 'module8',
      component: module8
    },
    {
      path: '/module11',
      name: 'module11',
      component: module11
    },
    {
      path: '/module13',
      name: 'module13',
      component: module13
    },
    {
      path: '/module15',
      name: 'module15',
      component: module15
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: demo1
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: demo2
    },
     {
      path: '/select1',
      name: 'select1',
      component: select1
    }
  ]
})
