import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import List from '@/components/List'
import Find from '@/components/Find'
import ShopCar from '@/components/ShopCar'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/Find',
      name: 'Find',
      component: Find
    },
    {
      path: '/ShopCar',
      name: 'ShopCar',
      component: ShopCar
    },
    {
      path: '/User',
      name: 'User',
      component: User,
      children: [
        
      ]
    },
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path:'/login',
      name:'login',
      component:()=> import('@/views/login.vue')
    },
    // {
    //   path:'/regiter',
    //   name:'register',
    //   component:()=> import('@/views/register.vue')
    // },
    // {
    //   path:'/regiter1',
    //   name:'register1',
    //   component:()=> import('@/views/register1.vue')
    // },
    // {
    //   path:'/regiter2',
    //   name:'register2',
    //   component:()=> import('@/views/register2.vue')
    // }
  ]
})
