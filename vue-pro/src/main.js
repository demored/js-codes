import { createApp } from 'vue'
import App from './App.vue'

import "./../node_modules/bootstrap/dist/css/bootstrap.css";
import "./assets/index.css";
import router from "./router/index"

//备注：Vue版本3，和版本2的用法有一些区别
createApp(App).use(router).mount('#app')
