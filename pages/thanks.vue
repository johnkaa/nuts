<template>
  <div class="thanks">
    <h2 class="thanks__title">Благодарим Вас за заказ!</h2>
    <p class="thanks__text">Наши менеджеры свяжутся с Вами в ближайшее время</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.thanks {
  background-image: url(/images/thanks-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 210px 0 190px;
  color: #fff;
  text-align: center;
  &__title {
    font-size: 45px;
    font-weight: 800;
    margin-bottom: 25px;
  }
  &__text {
    font-size: 24px;
    max-width: 420px;
    margin: 0 auto;
  }
}
</style>