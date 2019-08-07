import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import params from '@/components/params'
import query from '@/components/query'
import vue from '@/components/vue'
import chuancan from '@/components/chuancan'
import keyCodes from '@/components/keyCodes'
import ref from '@/components/ref'
import es6 from '@/components/es6'
import axioss from '@/components/axioss'

Vue.use(Router)

export default new Router({
  mode: 'history', // 在这里添加mode: 'history' 可与i让页面地址连接去掉#号
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: { // 只在这里设置了分页信息没有用，还需要在App.vue文件中设置
        top: HelloWorld,
        center: chuancan
      }
    },
    {
      path: '/params',
      name: 'params',
      component: params
    },
    {
      path: '/query',
      name: 'query',
      component: query
    },
    {
      path: '/vue',
      name: 'vue',
      component: vue
    },
    {
      path: '/keyCodes',
      name: 'keyCodes',
      component: keyCodes
    },
    {
      path: '/chuancan',
      name: 'chuancan',
      component: chuancan
    },
    {
      path: '/ref',
      name: 'ref',
      component: ref
    },
    {
      path: '/es6',
      name: 'es6',
      component: es6
    },
    {
      path: '/axioss',
      name: 'axioss',
      component: axioss
    }
  ]
})
