<template>
    <main>
        <h1 class="main__title">Cumpleaños</h1>
        <p class="main__description">¿Necesitas decorar una fiesta de cumpleaños? Acá te mostramos nuestro catalogo para distintas edades</p>

        <h2 class="main__subtitle">Fiestas para niños</h2>
        <birthComp :image="require('@/assets/Birthdays/Elsa/elsa1.png')"/>
    </main>
</template>
<style lang="scss" scoped>
.main__title, .main__subtitle{
    color: $content;
    display: block;
    width: fit-content;
    margin: 5rem auto;
}
.main__description{
    color: $content;
}
</style>
<script setup>
import birthComp from './birthComp.vue';
</script>
