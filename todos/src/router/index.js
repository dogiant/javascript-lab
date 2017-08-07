import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Todos from '@/components/Todos'
import VuexTest from '@/components/VuexTest'

Vue.use(Vuex)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/todos',
      name: 'Todos',
      component: Todos
    },
    {
      path: '/vuex',
      name: 'VuexTest',
      component: VuexTest
    }
  ]
})
