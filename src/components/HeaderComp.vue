<template>
  <header class="header">
    <div class="header__menu">
      <img
      src="./../../public/img/menu.svg"
      alt=""
      class="header__menu--icon"
      :class="{'appear': isActive, 'disappear': !isActive}" @click="toggleMenu" ontouchstart
    />
    </div>
    <nav class="header__nav" :class="{ 'hideMenu': !isToggle, 'showMenu': isToggle && isActive}">
      <LogoComp class="header__home header__item" />
      <BirthdayComp class="header__birthday header__item" />
      <BaptismComp class="header__baptism header__item" />
      <WeddingComp class="header__wedding header__item"/>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header{
  position: fixed;  
  top: 0;
  width: 100vw;
  height: 3rem;
}
.header__nav {
  background-color: #fff;
  min-height: 0.1rem;
  display: flex;
  justify-content: space-around;
}

.header__item {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;  
  height: 3rem;
}
.header__item:hover{
  background-color: #646464;
}

.header__menu{
  width: 3rem;
  position: relative;
  z-index: 500; 
  width: 100vw;
  background-color: #fff;
  .header__menu--icon {
  width: 3rem;
  }
  .header__menu--icon:hover {
    background-color: #646464;
  }
}

//dynamic classes
.appear {
  display: block;
}
.disappear {
  display: none;
}
.hideMenu {
  animation: hideMenu 1s ease forwards;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100vw;
}
.showMenu{
  animation: showMenu 1s ease forwards;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100vw;
}
//animations
@keyframes hideMenu {
  0% {transform: translateY(0px);}
  100%{transform: translateY(-250px);}
}
@keyframes showMenu {
  0% {transform: translateY(-250px);}
  100%{transform: translateY(0px);}
}
</style>

<script setup>
import LogoComp from "./HeaderComps/LogoComp.vue";
import BirthdayComp from "./HeaderComps/BirthdayComp.vue";
import BaptismComp from "./HeaderComps/BaptismComp.vue";
import WeddingComp from "./HeaderComps/WeddingComp.vue";
import { ref, onMounted } from "vue";

const isActive = ref(false);
const isToggle = ref(false);
onMounted(() => {
  window.addEventListener("resize", handleWindowResize);

  handleWindowResize();
});

function handleWindowResize() {
  //change the classes when the screen is below 500px
  const widthDocument = document.documentElement.clientWidth;
  if (widthDocument < 500 ){
    isActive.value = true;
    isToggle.value = false
  }else{
    isActive.value = false;
    isToggle.value = true;
  }
}
//toggling the menu button
function toggleMenu(){
  if (!isToggle.value){
    isToggle.value = true
  }else{
    isToggle.value = false
  }
}
</script>
