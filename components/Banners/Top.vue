<template>
  <div
    class="top-banner"
    :style="`background: url(${banner.img}) no-repeat center / cover;`"
  >
    <div class="container">
      <my-popup v-if="topBannerShow" @close="showVideo">
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
    <div class="top-banner__title">{{ banner.title }}</div>
    <p class="top-banner__text">{{ banner.text }}</p>
    <my-play-btn @play="showVideo" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['banner'],
  data() {
    return {
      topBannerShow: false,
      video: ''
    }
  },
  mounted() {
    this.video = this.banner.video.split('/')[this.banner.video.split('/').length - 1]
  },
  methods: {
    showVideo() {
      this.topBannerShow = !this.topBannerShow
    },
  }
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
    margin: 0 auto;
    margin-bottom: 40px;
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