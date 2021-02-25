import Vue from 'vue'
import Router from 'vue-router'
import AppIndex from '@/components/home/AppIndex'
import Login from '@/components/Login'
import Test from '@/components/home/test'
import Result from '@/components/home/Result'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/result',
      name: 'Result',
      component: Result
    },

    {
      path: '/test',
      name: 'Test',
      component: Test
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'AppIndex',

      component: AppIndex,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/',
      name: 'AppIndex',

      component: AppIndex,
      meta: {
        requireAuth: true
      }
    }
  ]
  
})
