<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <swiper ref="swiper" class="swiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in items" :key="index" class="swiper-slide">
        <Product :product="item" :slide="true" />
      </swiper-slide>
    </swiper>
    <div slot='pagination' class='swiper-pagination'></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['items'],
  data() {
    return {
      swiperOptions: {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        pagination: {
          el: '.swiper-pagination'
        },
        spaceBetween: 30,
      },
    }
  },
}
</script>

<style lang='scss'>
.swiper {
  min-width: 0;
  &-container {
    padding-bottom: 38px;
  }
  &-pagination {
    bottom: 0;
    left: 50%;
    &-bullet {
      margin: 0 5px;
      background-color: #337d5a !important;
    }
  }
}
</style>