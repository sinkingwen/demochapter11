<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { useCounterStore } from "@/stores/counter.js";
const store = useCounterStore();
setTimeout(() => {
  store.increment();
}, 3000);
</script>

<template>
  <div>{{ store.count }}</div>
  <div>{{ store.doubleCount }}</div>
  <!-- <button @click="store.increment">Add</button> -->
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <!-- 使用 router-link 组件进行导航 -->
        <!-- 通过传递 `to` 来指定链接 -->
        <!-- `<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签 -->
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <br />
        <router-link :to="{ name: 'user', params: { username: 'eduardo' } }">
          /users/eduardo</router-link
        >
        <br />
        <router-link :to="{ name: 'profile', params: { username: 'eduardo' } }">
          /users/eduardo/profile</router-link
        >
        <br />
        <router-link to="/users/eduardo/posts">
          /users/eduardo/posts</router-link
        >
      </nav>
    </div>
  </header>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
