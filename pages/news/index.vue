<template>
  <div class="news">
    <div class="container">
      <div class="news__pos position">
        <nuxt-link class="news__pos-link position-link" to="/"
          >Главная</nuxt-link
        >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.00001 11L6.3 10.3L10.1 6.5H0V5.50002H10.1L6.3 1.7L7.00001 1.00002L12 6.00001L7.00001 11Z"
            fill="#8a8a8a"
          />
        </svg>
        <nuxt-link class="news__pos-link position-link" :to="$route.path"
          >Новости и статьи</nuxt-link
        >
      </div>
      <h2 class="news__title">Новости и статьи</h2>
      <p class="news__text">Свежие новости и полезная информация</p>
      <div class="news__items">
        <news-card v-for="item in amount" :key="item" class="news__item" :class="{big: item === 1}"/>
      </div>
      <my-button class="news__btn secondary" @click="amount = 10">Посмотреть ещё</my-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: 7
    }
  }
}
</script>

<style lang="scss" scoped>
.news {
  padding: 40px 0 90px;
  &__title {
    text-align: center;
    margin: 20px 0 30px;
    font-size: 45px;
    font-weight: 800;
  }
  &__text {
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 68px;
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
    max-width: 200px;
    margin: 0 auto;
  }
}
</style>