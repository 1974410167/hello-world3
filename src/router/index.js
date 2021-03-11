import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import retrieve_category from "@/views/retrieve_category";
import retrieve_tag from "@/views/retrive_tag";
import post_detail from "@/views/post_detail";
import archives from "@/views/archives";
// 加载组件
Vue.use(VueRouter)

// 配置路由规则
const routes = [
  {
    path: '/home/:pro',
    name: 'home',
    component: Home
  },

  {
    path: '/',
    redirect:'home/1'
  },
  {
    path: '/ret_cate/:id',
    name:"retrieve_category",
    component: retrieve_category,
  },
  {
    path: '/ret_tag/:id',
    name:"ret_tag",
    component: retrieve_tag,
  },
  {
    path:'/post/:id',
    name:"ret_post",
    component: post_detail,
  },

  {
    path:'/archives/:year/:month',
    name:"archives",
    component: archives,
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]




const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 导出路由
export default router
