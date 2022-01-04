<script setup lang="ts">
</script>

<template>
  <router-link :to="{ name: 'test1', query: { id: 1 } }">To Test1</router-link>
  <br/>
  <router-link :to="{ name: 'test2', query: { id: 2 } }">To Test2</router-link>
  <router-view v-slot="{ Component, route }">
    <KeepAlive>
      <component :is="Component"></component>
    </KeepAlive>
  </router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
