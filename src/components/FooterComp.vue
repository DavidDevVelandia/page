<template>
    <footer class="footer">
      <div class="contacts">
        <div class="item footer__contact">
            <p>Contactame</p>
        </div>
        <div class="item footer__social-net">
            <p>Redes sociales</p>
        </div>
      </div>
        <div class="item footer__copyright">
            <p>© 2023 Eventos Roble. Todos los derechos reservados.</p>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
.footer {
  background-color: $content;
  color: $font;
  display: flex;
  flex-direction: column;
}
.contacts{
  display: flex;
  justify-content: space-around;
}
.footer__copyright {
  margin: 0 auto;
}
</style>
<script setup>

</script>
