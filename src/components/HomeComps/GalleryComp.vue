<template>
    <div class="div-photos">
        <div class="photos-container">
            <img src="@/assets/Birthdays/Elsa/elsa1.png" alt="" class="photos__elsa photos">
            <img src="@/assets/Birthdays/Mario/mario3.png" alt="" class="photos__mario photos">
            <img src="@/assets/Birthdays/Mickey/mickey2.png" alt="" class="photos__mickey photos">
            <!-- Copias de las imágenes para lograr el efecto de bucle -->
            <img src="@/assets/Birthdays/Mario/mario2.png" alt="" class="photos__elsa photos">
            <img src="@/assets/Birthdays/Mickey/mickey1.png" alt="" class="photos__mickey photos">
            <img src="@/assets/Birthdays/Elsa/elsa1.png" alt="" class="photos__elsa photos">
        </div>
    </div>
</template>
<style lang="scss" scoped>
.photos {
    display: block;
    position: relative;
    border-radius: 5rem;
    width: 25rem;
    height: 25rem;
    margin-right: 6rem;
    animation: slideToLeft 35s linear 0s infinite normal forwards;
    z-index: 100;
}
.div-photos {
    width: 25rem;
    display: flex;
    overflow: hidden;
    justify-content: space-between;
    margin: 4rem auto;
    border-radius: 5rem;
    border: 10px groove $main;
    background-color: $secondary;
}

.photos-container {
    display: flex;
}

@keyframes slideToLeft {
    0%{
        transform: translateX(0);
    }
    10%{
        transform: translateX(-31.2rem);
    }
    20%{
        transform: translateX(-31.2rem);
    }
    30%{
        transform: translateX(-62.2rem);
    }
    40%{
        transform: translateX(-62.2rem);
    }
    50%{
        transform: translateX(-93.2rem);
    }
    60%{
        transform: translateX(-93.2rem);
    }
    70%{
        transform: translateX(-124.2rem);
    }
    80%{
        transform: translateX(-124.2rem);
    }
    90%{
        transform: translateX(-155.2rem);
    }
    100%{
        transform: translateX(-155.2rem);
    }
}
</style>
<script setup>

</script>
