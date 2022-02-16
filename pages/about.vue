<template>
  <div class="about">
    <div class="container">
      <div class="about__pos position secondary">
        <nuxt-link class="about__pos-link position-link" to="/">{{
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
        <nuxt-link class="about__pos-link position-link" :to="$route.path">{{
          $t('about.position')
        }}</nuxt-link>
      </div>
    </div>
    <banners-top class="about__banner-top" :banner="topBanner" />
    <About class="about__about" />
    <div class="about__info">
      <div class="container">
        <my-popup
          v-if="showWriteModal"
          class="about-modal"
          @close="showWriteModal = false"
        >
          <validation-observer
            v-slot="{ invalid }"
            class="about-modal__form"
            tag="form"
            name="write"
            @submit.prevent="writeSubmit"
          >
            <h2 class="about-modal__title">{{ $t('about.writeUs.title') }}</h2>
            <validation-provider name="name" rules="required">
              <div slot-scope="{ errors }" class="about-modal__field">
                <my-input
                  v-model="writeName"
                  class="about-modal__input"
                  :placeholder="$t('about.writeUs.name')"
                  :errors="errors"
                />
              </div>
            </validation-provider>
            <validation-provider name="email" rules="required|email">
              <div slot-scope="{ errors }" class="about-modal__field">
                <my-input
                  v-model="writeEmail"
                  class="about-modal__input"
                  :placeholder="$t('about.writeUs.email')"
                  :errors="errors"
                />
              </div>
            </validation-provider>
            <validation-provider name="message" rules="required">
              <div slot-scope="{ errors }" class="about-modal__field">
                <my-input
                  v-model="writeMessage"
                  class="about-modal__input"
                  :placeholder="$t('about.writeUs.message')"
                  :errors="errors"
                />
              </div>
            </validation-provider>
            <my-button class="about-modal__btn" :disabled="invalid">{{
              $t('about.writeUs.submit')
            }}</my-button>
          </validation-observer>
        </my-popup>
        <div class="about__info-inner">
          <div class="about__chief">
            <img class="about__chief-img" src="/images/chief.jpg" />
            <div class="about__chief-info">
              <div class="about__chief-name">{{ $t('about.chief.name') }}</div>
              <div class="about__chief-pos">
                {{ $t('about.chief.pos') }}
              </div>
              <p class="about__chief-quote">
                {{ $t('about.chief.quote') }}
              </p>
              <my-button
                class="about__chief-btn secondary"
                @click="showWriteModal = true"
                >{{ $t('about.chief.writeUs') }}</my-button
              >
            </div>
          </div>
          <div class="about__history">
            <div class="about__history-title">
              {{ $t('about.history.title') }}
            </div>
            <p class="about__history-text">{{ $t('about.history.text1') }}</p>
            <p class="about__history-text">{{ $t('about.history.text2') }}</p>
            <p class="about__history-text">{{ $t('about.history.text3') }}</p>
          </div>
        </div>
      </div>
    </div>
    <banners-area class="about__area" />
    <div class="about__gallery">
      <div class="container">
        <h2 class="about__gallery-title">{{ $t('about.gallery.title') }}</h2>
        <p class="about__gallery-text">{{ $t('about.gallery.text') }}</p>
        <div class="about__gallery-items">
          <gallery-card
            v-for="(item, index) in latestGallery"
            :key="index"
            class="about__gallery-item"
            :gallery-card="item"
          />
        </div>
        <my-button
          class="about__gallery-btn secondary"
          @click="$router.push('/gallery')"
          >{{ $t('about.gallery.showAll') }}</my-button
        >
      </div>
    </div>
    <banners-eco class="about__eco" :banner="ecoBanner" />
    <news-latest class="about__news" :news="news" />
  </div>
</template>

<script>
export default {
  async asyncData({ $readData }) {
    const topBanner = await $readData('banners/top')
    const gallery = await $readData('gallery')
    const ecoBanner = await $readData('banners/eco')
    const news = await $readData('news')
    let latestGallery = []
    Object.keys(gallery).forEach((item) => latestGallery.push(gallery[item]))
    latestGallery = latestGallery.slice(0, 6)
    return { topBanner, latestGallery, ecoBanner, news }
  },
  data() {
    return {
      showWriteModal: false,
      writeName: '',
      writeEmail: '',
      writeMessage: '',
    }
  },
  watch: {
    async '$i18n.locale'() {
      if (this.$i18n.locale === 'ua') {
        this.topBanner = await this.$readData('banners/top/ua')
        this.ecoBanner = await this.$readData('banners/eco/ua')
        Object.keys(this.news).forEach((item) => {
          this.news[item] = this.news[item].ua
        })
        const gallery = await this.$readData('gallery')
        this.latestGallery = []
        Object.keys(gallery).forEach((item) =>
          this.latestGallery.push(gallery[item].ua)
        )
        this.latestGallery = this.latestGallery.slice(0, 6)
      } else {
        this.topBanner = await this.$readData('banners/top')
        this.ecoBanner = await this.$readData('banners/eco')
        this.news = await this.$readData('news')
        const gallery = await this.$readData('gallery')
        this.latestGallery = []
        Object.keys(gallery).forEach((item) =>
          this.latestGallery.push(gallery[item])
        )
        this.latestGallery = this.latestGallery.slice(0, 6)
      }
    },
  },
  methods: {
    writeSubmit() {
      const messageData = {
        name: this.writeName,
        email: this.writeEmail,
        message: this.writeMessage,
      }
      this.$writeData(`messages/${+new Date()}`, messageData)
      this.showWriteModal = false
      this.$toasted.success('Ваше сообщение доставлено.')
    },
  },
}
</script>

<style lang="scss" scoped>
.about {
  &__info {
    padding: 90px 0;
    &-inner {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 50px;
    }
  }
  &__chief {
    display: flex;
    gap: 40px;
    &-name {
      font-size: 32px;
      font-weight: 800;
      margin: 25px 0;
    }
    &-pos {
      line-height: 21px;
      margin-bottom: 40px;
      max-width: 285px;
    }
    &-quote {
      font-size: 15px;
      line-height: 13px;
      font-style: italic;
      padding-left: 38px;
      max-width: 400px;
      margin-bottom: 60px;
      position: relative;
      &::before {
        content: '';
        width: 26px;
        height: 26px;
        background-image: url(/images/icons/quotes.svg);
        position: absolute;
        top: -10px;
        left: 0;
      }
    }
    &-btn {
      max-width: 190px;
    }
  }
  &-modal {
    &__form {
      padding: 50px;
      background-color: #fff;
      border-radius: 5px;
    }
    &__title {
      font-size: 32px;
      font-weight: 800;
      text-align: center;
      margin-bottom: 20px;
    }
    &__field {
      margin-bottom: 10px;
    }
  }
  &__history {
    background-image: url(/images/history-bg.jpg);
    background-repeat: no-repeat;
    max-width: 450px;
    color: #fff;
    padding: 40px;
    &-title {
      text-align: center;
      font-size: 32px;
      font-weight: 800;
      margin-bottom: 40px;
    }
    &-text {
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
      line-height: 22px;
      color: #fcfcfc;
      max-width: 370px;
      & + & {
        margin-top: 18px;
      }
    }
  }
  &__gallery {
    padding: 90px 0;
    background-color: #fbfbfb;
    text-align: center;
    &-title {
      font-size: 45px;
      font-weight: 800;
      margin-bottom: 30px;
    }
    &-text {
      font-size: 18px;
      margin-bottom: 60px;
    }
    &-items {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 6px;
    }
    &-btn {
      display: block;
      max-width: 235px;
      margin: 0 auto;
      margin-top: 65px;
    }
  }
}
@media (max-width: 700px) {
  .about__chief-img {
    display: none;
  }
}
@media (max-width: 600px) {
  .about-modal {
    &__form {
      padding: 50px 20px;
    }
    &__title {
      font-size: 19px;
    }
  }
}
@media (max-width: 500px) {
  .about__history {
    padding: 20px;
    &-title {
      margin-bottom: 20px;
      font-size: 26px;
    }
    &-text {
      font-size: 12px;
      & + & {
        margin-top: 10px;
      }
    }
  }
}
</style>