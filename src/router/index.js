import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import User from '../views/User.vue'
import UserHome from '../views/UserHome.vue'
import UserProfile from '../views/UserProfile.vue'
import UserPosts from '../views/UserPosts.vue'
import Foo from '../views/Foo.vue'
import Bar from '../views/Bar.vue'
//创建router实例对象，管理一组组的路由规则
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      // 动态字段以冒号开始
      path: '/users/:username',
      name: 'user',
      component: User,
      children: [
        { path: '', component: UserHome },
        { path: 'profile', name: 'profile', component: UserProfile },
        { path: 'posts', name: 'posts', component: UserPosts },
      ],
    }
  ]
})
//导出路由实例对象
export default router
