<template>
  <HeaderComp class="HeaderComponent"/>
  <router-view class="router-view"/>
  <FooterComp/>
</template>

<style lang="scss">
*{
  box-sizing: border-box;
}
.router-view{
  margin-top: 4rem;
}
.HeaderComponent{
 position: relative;
 z-index: 450; 
}
</style>
<script setup>
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';
</script>