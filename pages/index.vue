<template>
  <div class="main-page">
    <my-popup v-if="topBannerShow" @close="showVideo">
      <iframe
        width="100%"
        height="450"
        src="https://www.youtube.com/embed/lVCxWs8OpjE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </my-popup>
    <div
      class="top-banner"
      style="background: url(/images/main-page-banner.jpg) no-repeat center / cover;"
    >
      <div class="top-banner__title">Орех Причерноморья</div>
      <p class="top-banner__text">
        Единственный в Украине сад совместного выращивание фундука и грецкого
        ореха
      </p>
      <my-play-btn @play="showVideo" />
    </div>

    <div class="products">
      <div class="container">
        <h2 class="products__title">Продукция</h2>
        <p class="products__text">
          Экологически чистые, качественные ядра грецкого ореха и фундука, а
          также плоды шиповника в удобной, надежной, вакуумной упаковке разного
          объема
        </p>
        <div class="products__items">
          <product v-for="i in 6" :key="i" />
        </div>
        <nuxt-link to="/shop">
          <my-button class="products__btn secondary"
            >Перейти в магазин</my-button
          >
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topBannerShow: false,
    }
  },
  methods: {
    showVideo() {
      this.topBannerShow = !this.topBannerShow
    },
  },
}
</script>

<style lang="scss" scoped>
.top-banner {
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 190px;
  padding-bottom: 140px;
  &__title {
    font-size: 62px;
    font-weight: 800;
    margin-bottom: 50px;
  }
  &__text {
    font-size: 25px;
    font-weight: 600;
    max-width: 555px;
    margin-bottom: 40px;
  }
}
.products {
  padding: 90px 0;
  color: #1a2f3f;
  &__title {
    font-size: 45px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 30px;
  }
  &__text {
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 70px;
    max-width: 620px;
  }
  &__items {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 70px;
  }
  &__btn {
    max-width: 200px;
    margin: 0 auto;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
}
@media (max-width: 700px) {
  .top-banner {
    &__title {
      font-size: 30px;
      margin-bottom: 15px;
    }
    &__text {
      font-size: 18px;
    }
  }
}
</style>
