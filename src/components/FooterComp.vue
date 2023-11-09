<template>
    <footer class="footer">
      <div class="contacts">
        <div class="item footer__contact">
            <p>Contactame</p>
            <button @click="copyTelephone" class="footer__num">+310446954</button>
        </div>
        <div class="item footer__social-net">
            <p>Redes sociales</p>
            <a href=""></a>
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
.footer__num{
  appearance: none;
  border: none;
  padding: 0;
  margin: 0;
  background: none;
  color: $font;
  cursor: pointer;
}
.footer__num:hover{
  color: rgb(190, 190, 190);
}
.footer__num:active{
  color: rgb(170, 170, 170);
}
</style>
<script setup>
function copyTelephone(){
  navigator.clipboard.writeText(310446954)

}

</script>
