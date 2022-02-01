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
    <div v-if="galleryCard.title || galleryCard.text" class="gallery-card__content" :class="{ video: galleryCard.video, img: !galleryCard.video }">
      <div class="gallery-card__title">{{ galleryCard.title.slice(0, 15) }}<span v-if="galleryCard.title.length > 15">...</span></div>
      <p class="gallery-card__text">{{ galleryCard.text }}</p>
    </div>
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
    z-index: 10;
  }
  &__content {
    font-family: 'Montserrat', sans-serif;
    position: absolute;
    color: #fff;
    padding: 24px;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    .gallery-card {
      &__title {
        font-size: 22px;
        font-weight: 800;
        width: 100%;
        margin-bottom: 20px;
      }
      &__text {
        font-size: 14px;
        line-height: 21px;
        width: 80%;
      }
    }
    &.img {
      background-color: #337D5A;
      opacity: 0;
      cursor: pointer;
      transition: opacity .3s;
      &:hover {
        opacity: 1;
      }
    }
    &.video {
      text-align: center;
      background-color: rgba(#000, .3);
      .gallery-card {
        &__title, &__text {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
        &__title {
          top: 65%;
        }
        &__text {
          top: 75%;
        }
      }
    }
    &.text {

    }
  }
}
</style>