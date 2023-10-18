<template>
  <div class="grid-container">
    <div class="grid-item"><img src="@/assets/Birthdays/Elsa/elsa1.png" alt="" class="photos__elsa photos"></div>
    <div class="grid-item"><img src="@/assets/Birthdays/Mario/mario3.png" alt="" class="photos__mario photos"></div>
    <div class="grid-item"><img src="@/assets/Birthdays/Mickey/mickey2.png" alt="" class="photos__mickey photos"></div>
    <div class="grid-item"><img src="@/assets/Birthdays/Mario/mario2.png" alt="" class="photos__elsa photos"></div>
  </div>
</template>
<style lang="scss" scoped>
.photos {
  height: 30vw;
  width: 30vw;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  justify-items: center;
  align-items: center;
}

@media (max-width: 480px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
  .grid-item {
    width: auto;
  }
}
</style>
<script setup>

</script>
