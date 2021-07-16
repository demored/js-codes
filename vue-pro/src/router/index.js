import {createRouter, createWebHistory} from 'vue-router'
const routerHistory = createWebHistory()

//导入路由映射用的组件
import Applist from "../components/list.vue"
import Foo from "../components/foo.vue"
import Bar from "../components/bar.vue"
import Add from "../components/add.vue"
import Edit from "../components/edit.vue"

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
},{
  path: '/add',
  component: Add
},{
  path: '/edit/:id',
  component: Edit
}

]


const router = createRouter({
  history: routerHistory,
  routes
})
export default router



