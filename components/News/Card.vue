<template>
  <div class="news-card">
    <img class="news-card__img" :src="news.img" />
    <div class="news-card__inner">
      <div class="news-card__date">{{ news.date }}</div>
      <div class="news-card__title">
        {{ news.title }}
      </div>
      <div class="news-card__text">
        {{ news.text.slice(0, 150) }}
        <template v-if="news.text.length > 150">...</template>
      </div>
      <nuxt-link class="news-card__link" :to="`/news/${news.id}`">
        Читать
        <svg
          width="14"
          height="14"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="news-card__link-arrow"
            d="M7.00001 11L6.3 10.3L10.1 6.5H0V5.50002H10.1L6.3 1.7L7.00001 1.00002L12 6.00001L7.00001 11Z"
            fill="#1A2F3F"
          />
        </svg>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['news']
}
</script>

<style lang="scss" scoped>
.news-card {
  max-width: 408px;
  background-color: #fff;
  padding-bottom: 30px;
  &__img {
    margin-bottom: 20px;
    height: 270px;
    object-fit: cover;
    width: 100%;
  }
  &__date,
  &__title,
  &__text,
  &__link {
    padding-left: 24px;
  }
  &__date {
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    color: #8a8a8a;
    margin-bottom: 15px;
  }
  &__title {
    max-width: 350px;
    font-weight: 700;
    line-height: 20px;
    margin-bottom: 20px;
    min-height: 40px;
  }
  &__text {
    max-width: 350px;
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 20px;
  }
  &__link {
    font-size: 14px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: color 0.3s;
    &-arrow {
      transition: fill 0.3s;
    }
    &:hover {
      color: #337d5a;
      path {
        fill: #337d5a;
      }
    }
  }
  &.big {
    display: flex;
    gap: 50px;
    max-width: 100%;
    .news-card {
      &__img {
        max-width: 850px;
      }
      &__text {
        max-width: 400px;
      }
    }
  }
  &.mini-card {
    .news-card {
      max-width: 220px;
      &__date,
      &__title,
      &__text,
      &__link {
        padding-left: 0;
      }
      &__img {
        max-width: 220px;
        margin-bottom: 13px;
      }
      &__date {
        margin-bottom: 10px;
      }
      &__title {
        max-width: 220px;
        font-size: 15px;
        margin-bottom: 15px;
      }
      &__text {
        display: none;
      }
    }
  }
}
@media (max-width: 1335px) {
  .news-card.big {
    max-width: 408px;
    display: block;
    .news-card__text {
      max-width: 350px;
    }
  }
}
</style>