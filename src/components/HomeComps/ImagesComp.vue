<template>
    <div class="grid-container">
  <div class="grid-item"><img src="@/assets/Birthdays/Elsa/elsa1.png" alt="" class="photos__elsa photos"></div>
  <div class="grid-item"><img src="@/assets/Birthdays/Mario/mario3.png" alt="" class="photos__mario photos"></div>
  <div class="grid-item"><img src="@/assets/Birthdays/Mickey/mickey2.png" alt="" class="photos__mickey photos"></div>
  <div class="grid-item"><img src="@/assets/Birthdays/Mario/mario2.png" alt="" class="photos__elsa photos"></div>
</div>

</template>
<style lang="scss" scoped>
.photos{
    height: 15rem;
    width: 15rem;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}

.grid-item {
  text-align: center;
  font-size: 18px;
}

</style>
<script setup>

</script>