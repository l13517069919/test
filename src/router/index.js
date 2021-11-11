import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import home from '@/components/home'
import FirstPage from '@/components/FirstPage'
import SecondPage from '@/components/SecondPage'
import FirstPart from '@/components/HomeComponents/FirstPart'
import SecondPart from '@/components/HomeComponents/SecondPart'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
  path: '/home',
  name: 'home',
  component: home,
  children: [
{
path: '/',
name: 'FirstPart',
component: FirstPart
},
{
path: 'SecondPart',
name: 'SecondPart',
component: SecondPart
}
]
  },
  {
  path: '/FirstPage',
  name: 'FirstPage',
  component: FirstPage,
  },
  {
  path: '/SecondPage',
  name: 'SecondPage',
  component: SecondPage
  }
]

const router = new VueRouter({
  routes
})

export default router


// import Vue from 'vue'
// import Router from 'vue-router'
// import Hello from '@/components/HelloWorld'
// import Home from '@/components/Home'
// import FirstPage from '@/components/FirstPage'
// import SecondPage from '@/components/SecondPage'
// Vue.use(Router)
// export default new Router({
// routes: [
// {
// path: '/',
// name: 'Hello',
// component: Hello
// },
// {
// path: '/Home',
// name: 'Home',
// component: Home
// },
// {
// path: '/FirstPage',
// name: 'FirstPage',
// component: FirstPage
// },
// {
// path: '/SecondPage',
// name: 'SecondPage',
// component: SecondPage
// }
// ]
// })
