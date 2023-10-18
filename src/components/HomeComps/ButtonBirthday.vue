<template>
    <div class="card">
        <h3 class="card__subtitle">Cumpleaños</h3>
        <router-link :to="{name: 'birthdayView'}" class="router--birthday"><img src="@/assets/Birthdays/Elsa/elsa1.png" alt="" class="photos__elsa photos"></router-link>
    </div>
</template>
<style lang="scss" scoped>
.card{
    width: 30rem;
    height: 30rem;
    margin: 0 auto;
    background-color: $font;
    border: 2px solid $secondary;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.card__subtitle{
    color: $title;
    font-size: xx-large;
}
.photos__elsa{
    width: 20rem;
    height: 20rem;
}
.photos__elsa:hover{
    transform: scale(1.1);
  transition: transform 0.3s;
}
</style>
<script setup>

</script>