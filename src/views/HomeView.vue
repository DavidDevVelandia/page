<template>
    <main>
        
        <h1 class="main__title">Eventos Roble</h1>

        <div class="line"></div>
        <p class="main__p">En Eventos Roble, entendemos que la vida está llena de momentos que
        merecen ser celebrados y recordados para siempre. Somos una empresa
        apasionada por la organización y decoración de eventos, dedicada a
        transformar tus ocasiones especiales en experiencias únicas e inolvidables.
        Desde cumpleaños y fiestas de quince años hasta bautizos, matrimonios,
        graduaciones y cualquier evento que desees conmemorar, estamos aquí para
        convertir tus sueños en realidad.
        La creatividad y la pasión por la decoración son el corazón de nuestro trabajo.
        
        <span v-show="isToggle || !isActive">
            Utilizamos materiales de la más alta calidad y seguimos las últimas tendencias
            en diseño para asegurarnos de que tu evento sea una experiencia
            visualmente impresionante que deje una impresión duradera en tus
            invitados.
            En Eventos Roble, sabemos que cada ocasión tiene su propia historia y
            significado. Permítenos ser parte de la tuya, creando momentos inolvidables
            que atesorarás para siempre. Contáctanos hoy mismo y descubre cómo
            podemos hacer que tu próximo evento sea excepcional en todos los sentidos.
            Tu felicidad es nuestra máxima prioridad, y estamos listos para convertir tus
            sueños en una realidad inolvidable.
        </span>
        
        <span class="text_colapse" v-show="isActive" @click="handleClick">Leer {{spanText}}</span>
        </p>
        <div class="line"></div>
        <h2 class="main__subtitle">Nuestro trabajo</h2>
        <GalleryComp/>

        <div class="line"></div>

        <h2 class="main__subtitle main__subtitle--galery">Fiestas</h2>
        <ImagesComp/>

        <div class="line"></div>
        <h2 class="main__subtitle main__subtitle--interest">¿Te interesa nuestro trabajo?</h2>

        
    </main>
</template>

<style lang="scss" scoped>

.main__title, .main__subtitle {
  color: $title;
  display: block;
  width: fit-content;
  margin: 6rem auto 0;
}
.main__subtitle--galery{
    margin-bottom: 6rem;
}

.line{
    background-color: $content;
    width: 80vw;
    margin: 6rem auto;    
    height: 2px;
}

.text_colapse {
  display: block;
  margin: 5px 0;
  color: $main;
}

.main__p {
  display: block;
  color: $content;
  width: 70vw;
  margin: 2rem auto;
  border: 2px groove $secondary;
  border-radius: 2rem;
  padding: 2rem;
  box-shadow: 5px 5px $secondary;
  font-size: large;
}
</style>
<script setup>
import GalleryComp from "@/components/HomeComps/GalleryComp.vue"
import ImagesComp from "@/components/HomeComps/ImagesComp.vue";
import { onMounted, ref } from "vue";
onMounted(() => {
  window.addEventListener("resize", handleWindowResize);

  handleWindowResize();
});
const spanText = ref("mas");
const isActive = ref(false);
const isToggle = ref(false);

function handleWindowResize() {
  //change the classes when the screen is below 500px
  const widthDocument = document.documentElement.clientWidth;
  if (widthDocument < 557 ){
    isActive.value = true;
  }else{
    isActive.value = false;
  }
}
function handleClick(){
    if (isToggle.value == false){
        spanText.value = "menos"
        return isToggle.value = true

    }    
    spanText.value = "mas"
    isToggle.value = false
}
</script>