import {createRouter, createWebHistory} from 'vue-router'
const routerHistory = createWebHistory()
//导入路由映射用的组件
import Applist from "../components/list.vue"
import Foo from "../components/foo.vue"
import Bar from "../components/bar.vue"

//路由映射关系
const  routes = [{
  path: '/',
  redirect: '/heroes'
},{
  path: '/heroes',
  component: Applist
},{
  path: '/foo',
  component: Foo
},{
  path: '/bar',
  component: Bar
}]


const router = createRouter({
  history: routerHistory,
  routes
})
export default router



