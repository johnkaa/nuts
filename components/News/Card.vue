<template>
  <div class="news-card">
    <img class="news-card__img" src="/images/news-1.jpg" />
    <div class="news-card__date">12.04.2019</div>
    <div class="news-card__title">
      Центр поддержки экспорта, в студии Павел Тулба
    </div>
    <div class="news-card__text">
      Как уже упоминал Павел Тулба, шиповник цветёт. Эта культура очень
      недооценена среди наших садоводов, не смотря на большой спрос в Европе и
      отличную...
    </div>
    <nuxt-link class="news-card__link" to="/news/1">
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
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.news-card {
  max-width: 408px;
  background-color: #fff;
  padding-bottom: 30px;
  &__img {
    margin-bottom: 20px;
    width: 100%;
  }
  &__date, &__title, &__text, &__link {
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
    transition: color .3s;
    &-arrow {
      transition: fill .3s;
    }
    &:hover {
      color: #337D5A;
      path {
        fill: #337D5A;
      }
    }
  }
}
</style>