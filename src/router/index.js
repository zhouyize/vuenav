import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/container/Home'
import Mine from '@/container/Mine'
import Order from '@/container/Order'
import ShopCar from '@/container/ShopCar'
import NotFound from '@/container/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'*',
      component:NotFound
    },
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/shopcar',
      name: 'ShopCar',
      component: ShopCar
    }
  ]
})
