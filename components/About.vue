<template>
      <div class="about">
      <div class="container">
        <div class="about__inner">
          <div class="about__info">
            <h2 class="about__title">О производителе</h2>
            <p class="about__text">{{ about.text }}</p>
            <my-button class="about__btn secondary" @click="$router.push('/about')">Подробнее</my-button>
          </div>
          <div class="about__slider">
            <div v-for="(item, index) in about.gallery" :key="index" class="about__slider-item">
              <img class="about__slider-item-img" :src="item.img" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['about']
}
</script>

<style lang="scss" scoped>
.about {
  padding: 90px 0;
  background-color: #fbfbfb;
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__title {
    font-size: 45px;
    font-weight: 800;
    margin-bottom: 40px;
  }
  &__text {
    margin-bottom: 40px;
    max-width: 480px;
  }
  &__btn {
    max-width: 170px;
  }
  &__slider {
    max-width: 700px;
    img {
      width: 100%;
    }
  }
}
@media (max-width: 1300px) {
  .about {
    &__inner {
      flex-wrap: wrap;
      justify-content: center;
      text-align: center;
      gap: 50px;
    }
    &__title {
      font-size: 38px;
    }
    &__btn {
      max-width: 300px;
    }
  }
}
</style>