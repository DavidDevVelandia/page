<template>
  <HeaderComp/>
  <router-view class="router-view"/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.router-view{
  margin-top: 3rem;
}
</style>
<script setup>
import HeaderComp from './components/HeaderComp.vue';
</script>