<script setup lang="ts">
import { ref } from 'vue';
import Test3 from './components/Test3.vue';
import Test4 from './components/Test4.vue';
const num = ref(1)
</script>
<template>
  <router-link :to="{ name: 'test1', query: { id: 1 } }">To Test1</router-link>
  <br />
  <router-link :to="{ name: 'test2', query: { id: 2 } }">To Test2</router-link>
  <router-view v-slot="{ Component, route }">
    <KeepAlive>
      <component :is="Component"></component>
    </KeepAlive>
  </router-view>
  <br />
  <br />
  <br />
  <br />
  <button :disabled="num > 0" @click="num = +new Date()">set num to positive, show Test3</button>
  <button :disabled="num <= 0" @click="num = -new Date()">set num to nagative, show Test4</button>
  <KeepAlive>
    <Test3 v-if="num > 0" :num="num"></Test3>
    <Test4 v-else :num="num"></Test4>
  </KeepAlive>
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
