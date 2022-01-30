<template>
  <div
    class="factory"
    style="background: url(/images/factory-banner-bg.jpg) no-repeat center / cover;"
  >
    <div class="container">
      <my-popup v-if="factoryVideoShow" @close="showVideo">
      <iframe
        width="100%"
        height="450"
        src="https://www.youtube.com/embed/hT4O8VI__XE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </my-popup>
    <div class="factory__title">Наша главная цель - получить максимальную прибыль с одного гектара</div>
    <my-play-btn @play="showVideo" />
    <p class="factory__text">
      Cмотреть видео о производстве
    </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      factoryVideoShow: false,
    }
  },
  methods: {
    showVideo() {
      this.factoryVideoShow = !this.factoryVideoShow
    },
  },
}
</script>

<style lang="scss" scoped>
.factory {
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 220px 0;
  &__title {
    font-size: 45px;
    font-weight: 800;
    max-width: 1060px;
    margin: 0 auto;
    margin-bottom: 70px;
  }
  &__text {
    font-size: 24px;
    font-style: italic;
    margin-top: 25px;
  }
}
@media (max-width: 800px) {
  .factory {
    padding: 150px 0;
    &__title {
      font-size: 34px;
      margin-bottom: 30px;
    }
    &__text {
      font-size: 18px;
    }
  }
}
@media (max-width: 500px) {
  .factory {
    padding: 100px 0;
    &__title {
      font-size: 24px;
    }
  }
}
</style>