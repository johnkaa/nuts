<template>
  <div class="gallery">
    <div class="container">
      <div class="gallery__pos position secondary">
        <nuxt-link class="gallery__pos-link position-link" to="/">{{
          $t('home.position')
        }}</nuxt-link>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.00001 11L6.3 10.3L10.1 6.5H0V5.50002H10.1L6.3 1.7L7.00001 1.00002L12 6.00001L7.00001 11Z"
            fill="#fff"
          />
        </svg>
        <nuxt-link class="gallery__pos-link position-link" :to="$route.path">{{
          $t('gallery.title')
        }}</nuxt-link>
      </div>
    </div>
    <div class="gallery__banner">
      <h2 class="gallery__banner-title">{{ $t('gallery.title') }}</h2>
      <p class="gallery__banner-text">{{ $t('gallery.text') }}</p>
    </div>
    <div class="container">
      <div class="gallery__items">
        <gallery-card
          v-for="(item, index) in gallery"
          :key="index"
          class="gallery__item"
          :gallery-card="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $readData }) {
    const gallery = await $readData('gallery')
    return { gallery }
  },
  watch: {
    async '$i18n.locale'() {
      if (this.$i18n.locale === 'ua') {
        Object.keys(this.gallery).forEach((item) => {
          this.gallery[item] = this.gallery[item].ua
        })
      } else {
        this.gallery = await this.$readData('gallery')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.gallery {
  padding-bottom: 90px;
  &__banner {
    color: #fff;
    text-align: center;
    background-image: url(/images/gallery-banner-bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 230px 0;
    &-title {
      font-size: 62px;
      font-weight: 800;
      margin-bottom: 10px;
    }
    &-text {
      font-size: 25px;
    }
  }
  &__items {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 6px;
    padding: 90px 0 50px;
  }
  &__btn {
    display: block;
    max-width: 200px;
    margin: 0 auto;
  }
}
@media (max-width: 500px) {
  .gallery {
    &__banner {
      padding: 130px 0;
      &-title {
        font-size: 50px;
      }
      &-text {
        font-size: 18px;
      }
    }
  }
}
</style>