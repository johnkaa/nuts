<template>
  <div class="news">
    <div class="container">
      <h2 class="news__title">Новости</h2>
      <p class="news__text">Свежие новости и полезная информация</p>
      <div class="news__items">
        <div v-for="item in news" :key="item.id" class="news__item">
          <news-card :news="item"/>
        </div>
      </div>
      <my-button class="news__btn secondary" @click="$router.push('/news')">Смотреть все новости</my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['news'],
}
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
  &__btn {
    display: block;
    max-width: 225px;
    margin: 0 auto;
  }
}
</style>