<template>
  <div class="gallery-card">
    <my-popup v-if="viewVideo" @close="showVideo">
      <iframe
        v-if="galleryCard.video"
        width="100%"
        height="450"
        :src="`https://www.youtube.com/embed/${
          galleryCard.video.split('/')[galleryCard.video.split('/').length - 1]
        }`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </my-popup>
    <img class="gallery-card__img" :src="galleryCard.img" alt="" />
    <my-play-btn
      v-if="galleryCard.video"
      class="gallery-card__play"
      @play="showVideo"
    />
  </div>
</template>

<script>
export default {
  props: ['galleryCard'],
  data() {
    return {
      viewVideo: false,
    }
  },
  methods: {
    showVideo() {
      this.viewVideo = !this.viewVideo
    },
  },
}
</script>

<style lang="scss">
.gallery-card {
  max-width: 425px;
  height: 320px;
  position: relative;
  display: flex;
  &__img {
    max-width: 100%;
  }
  &__play {
    position: absolute !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>