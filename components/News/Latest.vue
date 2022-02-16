<template>
  <div class="news">
    <div class="container">
      <div class="swiper-container">
        <h2 class="news__title">{{ $t('latestNews.title') }}</h2>
        <p class="news__text">{{ $t('news.text') }}</p>
        <div class="slider-buttons">
          <div class="slider-button slider-button-prev">
            <svg
              class="slider-arrow-prev"
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.16665 0.833496L10.45 2.1168L3.4833 9.0835H22V10.9168H3.4833L10.45 17.8835L9.16665 19.1668L0 10.0001L9.16665 0.833496Z"
                fill="white"
              />
            </svg>
          </div>
          <div class="slider-button slider-button-next">
            <svg
              class="slider-arrow-next"
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8333 0.833496L11.55 2.1168L18.5167 9.0835H0V10.9168H18.5167L11.55 17.8835L12.8333 19.1668L22 10.0001L12.8333 0.833496Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div class="swiper-wrapper">
          <swiper class="swiper" :options="swiperOptions">
            <swiper-slide
              v-for="(item, index) in news"
              :key="index"
              class="swiper-slide"
            >
              <news-card :news="item" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <my-button class="news__btn secondary" @click="$router.push('/news')"
        >{{ $t('latestNews.showAll') }}</my-button
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ['news'],
  data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
            slidesPerGroup: 3,
        loop: true,
        navigation: {
          prevEl: '.slider-button-prev',
          nextEl: '.slider-button-next',
        },
        spaceBetween: 30,
        breakpoints: {
          1000: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          600: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        }
      },
    }
  },
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
.slider {
  &-buttons {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
  }
  &-button {
    background-color: #337d5a;
    padding: 20px 27px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: all 0.3s;
    &-prev {
      &:hover {
        background-color: #fff;
        border-color: #337d5a;
        .slider-arrow-prev {
          path {
            fill: #337d5a;
          }
        }
      }
    }
    &-next {
      &:hover {
        background-color: #fff;
        border-color: #337d5a;
        .slider-arrow-next {
          path {
            fill: #337d5a;
          }
        }
      }
    }
  }
  &-arrow {
    &-prev {
      path {
        transition: fill 0.3s;
      }
    }
    &-next {
      path {
        transition: fill 0.3s;
      }
    }
  }
}
@media (max-width: 600px) {
  .slider-button {
    padding: 5px 10px;
  }
}
</style>