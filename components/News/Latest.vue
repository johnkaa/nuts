<template>
  <div class="news">
    <div class="container">
      <h2 class="news__title">Новости</h2>
      <p class="news__text">Свежие новости и полезная информация</p>
      <div class="news__items">
        <news-card v-for="item in 3" :key="item" />
      </div>
      <nuxt-link class="news__link" to="/news">
        <my-button class="news__btn secondary">Смотреть все новости</my-button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.news {
  background-color: #f9f9f9;
  padding: 90px 0;
  &__title {
    font-size: 45px;
    font-weight: 800;
    margin-bottom: 40px;
  }
  &__text {
    font-size: 18px;
    margin-bottom: 50px;
  }
  &__items {
    margin-bottom: 60px;
    display: flex;
    justify-content: center;
    gap: 35px;
    flex-wrap: wrap;
  }
  &__link {
    display: block;
    max-width: 225px;
    margin: 0 auto;
  }
}
</style>