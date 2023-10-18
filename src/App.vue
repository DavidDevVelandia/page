<template>
    <HeaderComp class="HeaderComponent"/>
    <div class="container" ref="Container">
      <router-view class="router-view"/>
      <FooterComp class="FooterComponent"/>
    </div>
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
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
<script setup>
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';

</script>