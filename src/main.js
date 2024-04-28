import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 创建并挂载根实例
const app = createApp(App)
//创建Pinia实例并绑定到vuejs的app实例上
app.use(createPinia())
// 确保 use 路由实例使整个应用支持路由。
app.use(router)

app.mount('#app')
