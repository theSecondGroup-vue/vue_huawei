import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
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
      redirect: Home
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
      component: User
    },
    {
      path: '/*',
      redirect: '/Home'
    }
  ]
})
