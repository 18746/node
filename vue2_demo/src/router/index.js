import Vue from 'vue'
import VueRouter from 'vue-router'
 

Vue.use(VueRouter)

//TODO: 登录态?routes[0].redirect='/index':null

const routes = [
  {
    path: '/',
    name: 'home',
    redirect:'/user/login',
  },  {
    path: '/user',
    name: 'user',
    //路由需要做铺垫的首页
    component: () => import('@/components/index.vue'),
		children: [
      {
        path: "login",
        name: "login",
        component: () => import('../views/components/user/login.vue'),
      }, {
        path: '/index',
        name: 'index',
        component: () => import('../views/components/user/index.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
