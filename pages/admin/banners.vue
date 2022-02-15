<template>
  <div class="banners">
    <h2 class="banners__title">Баннеры</h2>
    <vs-collapse class="banners__items" type="margin">
      <vs-collapse-item class="banners__item">
        <div slot="header">Верхний Баннер</div>
        <validation-observer v-slot="{ invalid }" tag="form" name="top-banner">
          <my-file-input
            class="banners__item-banner"
            @getFile="topBannerUpload"
          >
            <div class="banners__item-photo">
              <img
                class="banners__item-photo-img"
                :src="topBanner.img"
                alt=""
              />
              <span
                class="banners__item-photo-text"
                :class="{ show: !topBanner.img }"
                >Загрузить фото</span
              >
            </div>
          </my-file-input>
          <validation-provider name="title" rules="required">
            <div slot-scope="{ errors }">
              <vs-input
                v-model="topBanner.title"
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
                v-model="topBanner.text"
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
                v-model="topBanner.video"
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
          <my-file-input
            class="banners__item-banner"
            @getFile="factoryBannerUpload"
          >
            <div class="banners__item-photo">
              <img
                class="banners__item-photo-img"
                :src="factoryBanner.img"
                alt=""
              />
              <span
                class="banners__item-photo-text"
                :class="{ show: !factoryBanner.img }"
                >Загрузить фото</span
              >
            </div>
          </my-file-input>
          <validation-provider name="title" rules="required">
            <div slot-scope="{ errors }">
              <vs-input
                v-model="factoryBanner.title"
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
                v-model="factoryBanner.text"
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
                v-model="factoryBanner.video"
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
          <my-file-input
            class="banners__item-banner"
            @getFile="ecoBannerUpload"
          >
            <div class="banners__item-photo">
              <img
                class="banners__item-photo-img"
                :src="ecoBanner.img"
                alt=""
              />
              <span
                class="banners__item-photo-text"
                :class="{ show: !ecoBanner.img }"
                >Загрузить фото</span
              >
            </div>
          </my-file-input>
          <validation-provider name="title" rules="required">
            <div slot-scope="{ errors }">
              <vs-input
                v-model="ecoBanner.title"
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
                v-model="ecoBanner.text"
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
      topBannerFile: null,
      topBannerUploading: false,
      factoryBannerFile: null,
      factoryBannerUploading: false,
      ecoBannerFile: null,
      ecoBannerUploading: false,
    }
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
      await this.$writeData('banners/top', this.topBanner)
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
      await this.$writeData('banners/factory', this.factoryBanner)
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
      await this.$writeData('banners/eco', this.ecoBanner)
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