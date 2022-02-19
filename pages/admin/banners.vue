<template>
  <div class="banners">
    <h2 class="banners__title">Баннеры</h2>
    <vs-collapse class="banners__items" type="margin">
      <vs-collapse-item class="banners__item">
        <div slot="header">Верхний Баннер</div>
        <validation-observer v-slot="{ invalid }" tag="form" name="top-banner">
          <vs-switch
            v-model="topBannerUa"
            class="product-edit__lang"
            :disabled="invalid"
          >
            <span slot="on">Ua</span>
            <span slot="off">Ru</span>
          </vs-switch>
          <my-file-input
            class="banners__item-banner"
            @getFile="topBannerUpload"
          >
            <div class="banners__item-photo">
              <img class="banners__item-photo-img" :src="topBannerImg" alt="" />
              <span
                class="banners__item-photo-text"
                :class="{ show: !topBannerImg }"
                >Загрузить фото</span
              >
            </div>
          </my-file-input>
          <validation-provider name="title" rules="required">
            <div slot-scope="{ errors }">
              <vs-input
                v-model="topBannerTitle"
                class="banners__item-input"
                :danger="errors.length > 0"
                :danger-text="errors[0]"
                label="Заголовок"
              />
            </div>
          </validation-provider>
          <validation-provider name="text" rules="required">
            <div slot-scope="{ errors }">
              <vs-input
                v-model="topBannerText"
                class="banners__item-input"
                :danger="errors.length > 0"
                :danger-text="errors[0]"
                label="Текст"
              />
            </div>
          </validation-provider>
          <validation-provider name="video" rules="required">
            <div slot-scope="{ errors }">
              <vs-input
                v-model="topBannerVideo"
                class="banners__item-input"
                :danger="errors.length > 0"
                :danger-text="errors[0]"
                label="Видео"
              />
            </div>
          </validation-provider>
          <vs-button
            class="banners__item-btn"
            :disabled="invalid || topBannerUploading"
            color="success"
            type="filled"
            @click="topBannerSubmit"
            >Сохранить</vs-button
          >
        </validation-observer>
      </vs-collapse-item>
      <vs-collapse-item class="banners__item">
        <div slot="header">О производстве</div>
        <validation-observer
          v-slot="{ invalid }"
          tag="form"
          name="factory-banner"
        >
          <vs-switch
            v-model="factoryBannerUa"
            class="product-edit__lang"
            :disabled="invalid"
          >
            <span slot="on">Ua</span>
            <span slot="off">Ru</span>
          </vs-switch>
          <my-file-input
            class="banners__item-banner"
            @getFile="factoryBannerUpload"
          >
            <div class="banners__item-photo">
              <img
                class="banners__item-photo-img"
                :src="factoryBannerImg"
                alt=""
              />
              <span
                class="banners__item-photo-text"
                :class="{ show: !factoryBannerImg }"
                >Загрузить фото</span
              >
            </div>
          </my-file-input>
          <validation-provider name="title" rules="required">
            <div slot-scope="{ errors }">
              <vs-input
                v-model="factoryBannerTitle"
                class="banners__item-input"
                :danger="errors.length > 0"
                :danger-text="errors[0]"
                label="Заголовок"
              />
            </div>
          </validation-provider>
          <validation-provider name="text" rules="required">
            <div slot-scope="{ errors }">
              <vs-input
                v-model="factoryBannerText"
                class="banners__item-input"
                :danger="errors.length > 0"
                :danger-text="errors[0]"
                label="Текст"
              />
            </div>
          </validation-provider>
          <validation-provider name="video" rules="required">
            <div slot-scope="{ errors }">
              <vs-input
                v-model="factoryBannerVideo"
                class="banners__item-input"
                :danger="errors.length > 0"
                :danger-text="errors[0]"
                label="Видео"
              />
            </div>
          </validation-provider>
          <vs-button
            class="banners__item-btn"
            :disabled="invalid || factoryBannerUploading"
            color="success"
            type="filled"
            @click="factoryBannerSubmit"
            >Сохранить</vs-button
          >
        </validation-observer>
      </vs-collapse-item>
      <vs-collapse-item class="banners__item">
        <div slot="header">Эко баннер</div>
        <validation-observer v-slot="{ invalid }" tag="form" name="eco-banner">
          <vs-switch
            v-model="ecoBannerUa"
            class="product-edit__lang"
            :disabled="invalid"
          >
            <span slot="on">Ua</span>
            <span slot="off">Ru</span>
          </vs-switch>
          <my-file-input
            class="banners__item-banner"
            @getFile="ecoBannerUpload"
          >
            <div class="banners__item-photo">
              <img class="banners__item-photo-img" :src="ecoBannerImg" alt="" />
              <span
                class="banners__item-photo-text"
                :class="{ show: !ecoBannerImg }"
                >Загрузить фото</span
              >
            </div>
          </my-file-input>
          <validation-provider name="title" rules="required">
            <div slot-scope="{ errors }">
              <vs-input
                v-model="ecoBannerTitle"
                class="banners__item-input"
                :danger="errors.length > 0"
                :danger-text="errors[0]"
                label="Заголовок"
              />
            </div>
          </validation-provider>
          <validation-provider name="text" rules="required">
            <div slot-scope="{ errors }">
              <vs-input
                v-model="ecoBannerText"
                class="banners__item-input"
                :danger="errors.length > 0"
                :danger-text="errors[0]"
                label="Текст"
              />
            </div>
          </validation-provider>
          <vs-button
            class="banners__item-btn"
            :disabled="invalid || ecoBannerUploading"
            color="success"
            type="filled"
            @click="ecoBannerSubmit"
            >Сохранить</vs-button
          >
        </validation-observer>
      </vs-collapse-item>
    </vs-collapse>
  </div>
</template>

<script>
export default {
  async asyncData({ $readData }) {
    const topBanner = await $readData('banners/top')
    const factoryBanner = await $readData('banners/factory')
    const ecoBanner = await $readData('banners/eco')
    return { topBanner, factoryBanner, ecoBanner }
  },
  data() {
    return {
      topBannerUa: false,
      topBannerFile: null,
      topBannerUploading: false,
      topBannerImg: '',
      topBannerTitle: '',
      topBannerText: '',
      topBannerVideo: '',
      topBannerRussian: {},
      topBannerUkrainian: {},
      factoryBannerUa: false,
      factoryBannerFile: null,
      factoryBannerUploading: false,
      factoryBannerImg: '',
      factoryBannerTitle: '',
      factoryBannerText: '',
      factoryBannerVideo: '',
      factoryBannerRussian: {},
      factoryBannerUkrainian: {},
      ecoBannerUa: false,
      ecoBannerFile: null,
      ecoBannerUploading: false,
      ecoBannerImg: '',
      ecoBannerTitle: '',
      ecoBannerText: '',
      ecoBannerVideo: '',
      ecoBannerRussian: {},
      ecoBannerUkrainian: {},
    }
  },
  watch: {
    topBannerUa() {
      if (this.topBannerUa) {
        this.topBannerRussian = {
          img: this.topBannerImg,
          title: this.topBannerTitle,
          text: this.topBannerText,
          video: this.topBannerVideo,
          ua: this.topBannerUkrainian || {},
        }
        this.topBannerTitle = this.topBannerUkrainian.title || ''
        this.topBannerText = this.topBannerUkrainian.text || ''
        this.topBannerVideo = this.topBannerUkrainian.video || ''
      } else {
        this.topBannerUkrainian = {
          img: this.topBannerImg,
          title: this.topBannerTitle,
          text: this.topBannerText,
          video: this.topBannerVideo,
        }
        this.topBannerTitle = this.topBannerRussian.title
        this.topBannerText = this.topBannerRussian.text
        this.topBannerVideo = this.topBannerRussian.video
        this.topBannerRussian.ua = this.topBannerUkrainian
      }
    },
    factoryBannerUa() {
      if (this.factoryBannerUa) {
        this.factoryBannerRussian = {
          img: this.factoryBannerImg,
          title: this.factoryBannerTitle,
          text: this.factoryBannerText,
          video: this.factoryBannerVideo,
          ua: this.factoryBannerUkrainian,
        }
        this.factoryBannerTitle = this.factoryBannerUkrainian.title
        this.factoryBannerText = this.factoryBannerUkrainian.text
        this.factoryBannerVideo = this.factoryBannerUkrainian.video
      } else {
        this.factoryBannerUkrainian = {
          img: this.factoryBannerImg,
          title: this.factoryBannerTitle,
          text: this.factoryBannerText,
          video: this.factoryBannerVideo,
        }
        this.factoryBannerTitle = this.factoryBannerRussian.title
        this.factoryBannerText = this.factoryBannerRussian.text
        this.factoryBannerVideo = this.factoryBannerRussian.video
      }
    },
    ecoBannerUa() {
      if (this.ecoBannerUa) {
        this.ecoBannerRussian = {
          img: this.ecoBannerImg,
          title: this.ecoBannerTitle,
          text: this.ecoBannerText,
          ua: this.ecoBannerUkrainian,
        }
        this.ecoBannerTitle = this.ecoBannerUkrainian.title
        this.ecoBannerText = this.ecoBannerUkrainian.text
      } else {
        this.ecoBannerUkrainian = {
          img: this.ecoBannerImg,
          title: this.ecoBannerTitle,
          text: this.ecoBannerText,
        }
        this.ecoBannerTitle = this.ecoBannerRussian.title
        this.ecoBannerText = this.ecoBannerRussian.text
      }
    },
  },
  mounted() {
    this.topBannerImg = this.topBanner.img
    this.topBannerTitle = this.topBanner.title
    this.topBannerText = this.topBanner.text
    this.topBannerVideo = this.topBanner.video
    this.topBannerRussian = {
      img: this.topBanner.img,
      title: this.topBanner.title,
      text: this.topBanner.text,
      video: this.topBanner.video,
      ua: this.topBanner.ua || {},
    }
    this.topBannerUkrainian = this.topBanner.ua
    this.factoryBannerImg = this.factoryBanner.img
    this.factoryBannerTitle = this.factoryBanner.title
    this.factoryBannerText = this.factoryBanner.text
    this.factoryBannerVideo = this.factoryBanner.video
    this.factoryBannerRussian = {
      img: this.factoryBanner.img,
      title: this.factoryBanner.title,
      text: this.topBanner.text,
      video: this.factoryBanner.video,
      ua: this.factoryBanner.ua || {},
    }
    this.factoryBannerUkrainian = this.factoryBanner.ua
    this.ecoBannerImg = this.ecoBanner.img
    this.ecoBannerTitle = this.ecoBanner.title
    this.ecoBannerText = this.ecoBanner.text
    this.ecoBannerRussian = {
      img: this.ecoBanner.img,
      title: this.ecoBanner.title,
      text: this.ecoBanner.text,
      ua: this.ecoBanner.ua || {},
    }
    this.ecoBannerUkrainian = this.ecoBanner.ua
  },
  methods: {
    topBannerUpload(file) {
      this.topBannerFile = file
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (e) => {
        this.topBanner.img = e.target.result
      }
    },
    async topBannerSubmit() {
      this.topBannerUploading = true
      if (this.topBannerFile) {
        const format =
          this.topBannerFile.name.split('.')[
            this.topBannerFile.name.split('.').length - 1
          ]
        this.topBanner.img = await this.$uploadImg(
          this.topBannerFile,
          `banners/top.${format}`
        )
      }
      if (this.topBannerUa) {
        this.topBannerRussian.img = this.topBannerImg
        this.topBannerRussian.ua = {
          img: this.topBannerImg,
          title: this.topBannerTitle,
          text: this.topBannerText,
          video: this.topBannerVideo,
        }
      } else {
        this.topBannerUkrainian.img = this.topBannerImg
        this.topBannerRussian = {
          img: this.topBannerImg,
          title: this.topBannerTitle,
          text: this.topBannerText,
          video: this.topBannerVideo,
          ua: this.topBannerUkrainian,
        }
      }
      await this.$writeData('banners/top', this.topBannerRussian)
      this.$vs.notify({
        color: 'success',
        title: 'Вы изменили верхний баннер.',
      })
      this.topBannerUploading = false
    },
    factoryBannerUpload(file) {
      this.factoryBannerFile = file
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (e) => {
        this.factoryBanner.img = e.target.result
      }
    },
    async factoryBannerSubmit() {
      this.factoryBannerUploading = true
      if (this.factoryBannerFile) {
        const format =
          this.factoryBannerFile.name.split('.')[
            this.factoryBannerFile.name.split('.').length - 1
          ]
        this.factoryBanner.img = await this.$uploadImg(
          this.factoryBannerFile,
          `banners/factory.${format}`
        )
      }
      if (this.factoryBannerUa) {
        this.factoryBannerRussian.img = this.factoryBannerImg
        this.factoryBannerRussian.ua = {
          img: this.factoryBannerImg,
          title: this.factoryBannerTitle,
          text: this.factoryBannerText,
          video: this.factoryBannerVideo,
        }
      } else {
        this.factoryBannerUkrainian.img = this.factoryBannerImg
        this.factoryBannerRussian = {
          img: this.factoryBannerImg,
          title: this.factoryBannerTitle,
          text: this.factoryBannerText,
          video: this.factoryBannerVideo,
          ua: this.factoryBannerUkrainian,
        }
      }
      await this.$writeData('banners/factory', this.factoryBannerRussian)
      this.$vs.notify({
        color: 'success',
        title: 'Вы изменили баннер о производстве.',
      })
      this.factoryBannerUploading = false
    },
    ecoBannerUpload(file) {
      this.ecoBannerFile = file
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (e) => {
        this.ecoBanner.img = e.target.result
      }
    },
    async ecoBannerSubmit() {
      this.ecoBannerUploading = true
      if (this.ecoBannerFile) {
        const format =
          this.ecoBannerFile.name.split('.')[
            this.ecoBannerFile.name.split('.').length - 1
          ]
        this.ecoBanner.img = await this.$uploadImg(
          this.ecoBannerFile,
          `banners/eco.${format}`
        )
      }
      if (this.ecoBannerUa) {
        this.ecoBannerRussian.img = this.ecoBannerImg
        this.ecoBannerRussian.ua = {
          img: this.ecoBannerImg,
          title: this.ecoBannerTitle,
          text: this.ecoBannerText,
        }
      } else {
        this.ecoBannerUkrainian.img = this.ecoBannerImg
        this.ecoBannerRussian = {
          img: this.ecoBannerImg,
          title: this.ecoBannerTitle,
          text: this.ecoBannerText,
          ua: this.ecoBannerUkrainian,
        }
      }
      await this.$writeData('banners/eco', this.ecoBannerRussian)
      this.$vs.notify({
        color: 'success',
        title: 'Вы изменили эко баннер.',
      })
      this.ecoBannerUploading = false
    },
  },
}
</script>

<style lang="scss" scoped>
.banners {
  &__title {
    font-size: 32px;
    text-align: center;
    margin-bottom: 30px;
  }
  &__item {
    &-title {
      font-size: 20px;
      margin-bottom: 10px;
    }
    &-banner {
      max-width: 755px;
      margin-bottom: 20px;
    }
    &-photo {
      position: relative;
      cursor: pointer;
      max-width: 755px;
      max-height: 355px;
      &-text {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        font-size: 13px;
        color: #fff;
        font-weight: 600;
        border-bottom: 1px dashed #fff;
        display: none;
        &.show {
          display: block;
        }
      }
      &-img {
        width: 100%;
        height: 100%;
      }
      &:hover .banners__item-photo-img {
        filter: brightness(50%);
      }
      &:hover .banners__item-photo-text {
        display: block;
        white-space: nowrap;
      }
    }
    &-input {
      margin-bottom: 20px;
    }
  }
}
</style>