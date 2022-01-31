<template>
  <div
    class="factory"
    :style="`background: url(${banner.img}) no-repeat center / cover;`"
  >
    <div class="container">
      <my-popup v-if="factoryVideoShow" @close="showVideo">
      <iframe
        width="100%"
        height="450"
        :src="`https://www.youtube.com/embed/${video}`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </my-popup>
    <div class="factory__title">{{ banner.title }}</div>
    <my-play-btn @play="showVideo" />
    <p class="factory__text">{{ banner.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['banner'],
  data() {
    return {
      factoryVideoShow: false,
      video: ''
    }
  },
  mounted() {
    this.video = this.banner.video.split('/')[this.banner.video.split('/').length - 1]
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