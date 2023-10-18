<template>
    <div class="card">
        <img :src="imageUrl" alt="elsa" class="card__image">
        <p>comprar</p>
    </div>
</template>
<style lang="scss" scoped>
.card{
    height: 20rem;
    width: 10rem;
    background-color: $secondary;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
.card__image{
    height: 10rem;
    width: 8rem;
}

</style>
<script setup>
import { defineProps, ref } from 'vue';
const props = defineProps(
    {
        image: {
            type: String,
            required: true
        }
    }
)
const imageUrl = ref(props.image)
</script>