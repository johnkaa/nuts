<template>
  <div
    class="eco"
    style="background: url(/images/eco-banner-bg.jpg) no-repeat center / cover"
  >
    <div class="container">
      <img class="eco__icon" src="/images/icons/eco-icon.svg" />
      <h2 class="eco__title">Эко продукция</h2>
      <p class="eco__text">
        Выращиваем каждое деревцо с любовью, на экологически чистой земле, без
        использования пестицидов и химии
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.eco {
  text-align: center;
  color: #fff;
  padding: 220px 0;
  &__icon {
    margin-bottom: 40px;
  }
  &__title {
    font-size: 45px;
    font-weight: 800;
    margin-bottom: 30px;
  }
  &__text {
    font-size: 22px;
    line-height: 28px;
    max-width: 635px;
    margin: 0 auto;
  }
}
@media (max-width: 600px) {
  .eco {
    padding: 100px 0;
    &__icon {
      margin-bottom: 30px;
    }
    &__title {
      font-size: 36px;
      margin-bottom: 20px;
    }
    &__text {
      font-size: 16px;
      line-height: 24px;
      max-width: 635px;
      margin: 0 auto;
    }
  }
}
</style>