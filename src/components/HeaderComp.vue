<template>
  <header class="header">
    <LogoComp :class="{'disappear': isActive}"/>
    <div class="header__menu">
      <img
      src="@/assets/svg/menu.svg"
      alt=""
      class="header__menu--icon"
      :class="{'appear': isActive, 'disappear': !isActive}" @click="toggleMenu" ontouchstart
    />
    </div>
    <div class="header__div--nav" :class="{ 'hideMenu': !isToggle && isActive, 'showMenu': isToggle && isActive}">
      <nav class="header__nav" :class="{ 'hideMenu': !isToggle && isActive, 'showMenu': isToggle && isActive}">
      <HomeComp class="header__home header__item" @click="toggleMenu"/>
      <BirthdayComp class="header__birthday header__item" @click="toggleMenu"/>
      <BaptismComp class="header__baptism header__item" @click="toggleMenu"/>
      <WeddingComp class="header__wedding header__item" @click="toggleMenu"/>
    </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header{
  position: fixed;  
  top: 0;
  width: 100vw;
  height: 5rem;
  
  background-color: $font;
}
.header__div--nav{
  width: 30rem;
  height: 50px;
  position: absolute;
  right: 0;
}
.header::after{
  content: "";
  display: block;
  width: 40px;
  background-color: rgb(239, 11, 11);
  position: absolute;
  top: 200px;
}

.header__nav {
  background-color: $font;
  min-height: 0.1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: .5rem 0.2rem;
  margin-left: 1rem;
  position: relative;
  z-index: 450;
}

.header__item{
  display: flex;
  align-items: center;
  text-decoration: none;
  color: $content;  
  height: 3rem;
}
.header__menu{
  width: 3rem;
  position: relative;
  z-index: 500; 
  width: 100vw;
  background-color: $font;
  .header__menu--icon {
  width: 3rem;
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
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100vw;
}
.showMenu{
  animation: showMenu 0.6s ease forwards;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100vw;
}

//animations
@keyframes hideMenu {
  0% {transform: translateY(1px);}
  100%{transform: translateY(-200px);}
}
@keyframes showMenu {
  0% {transform: translateY(-200px);}
  100%{transform: translateY(1px);}
}
</style>

<script setup>
import HomeComp from "./HeaderComps/HomeComp.vue";
import BirthdayComp from "./HeaderComps/BirthdayComp.vue";
import BaptismComp from "./HeaderComps/BaptismComp.vue";
import WeddingComp from "./HeaderComps/WeddingComp.vue";
import LogoComp from "./HeaderComps/LogoComp.vue";
import { ref, onMounted } from "vue";

const isActive = ref(false); //check if the menu icon must get show or get hide
const isToggle = ref(false); //show and hide the nav
onMounted(() => {
  window.addEventListener("resize", handleWindowResize);

  handleWindowResize();
});

function handleWindowResize() {
  //change the classes when the screen is below 500px
  const widthDocument = document.documentElement.clientWidth;
  if (widthDocument < 557 ){
    isActive.value = true;
    isToggle.value = false;
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
