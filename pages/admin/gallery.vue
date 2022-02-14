<template>
  <div class="gallery">
    <vs-button class="gallery__add" color="success" type="filled" @click="addItem()">Добавить</vs-button>
    <vs-popup
      class="holamundo"
      title="Подтвердите действие"
      :active.sync="popupDelete"
    >
      <h2 class="gallery__popup-title">Вы действительно хотите удалить?</h2>
      <div class="gallery__popup-btns">
        <vs-button
          class="gallery__popup-btn"
          color="danger"
          type="filled"
          @click="deleteItem()"
          >Удалить</vs-button
        >
        <vs-button
          class="gallery__popup-btn"
          color="success"
          type="filled"
          @click="popupDelete = false"
          >Назад</vs-button
        >
      </div>
    </vs-popup>
    <vs-popup class="holamundo" title="Редактировать" :active.sync="popupEdit">
      <my-file-input @getFile="getFileImg">
        <div class="gallery__photo">
          <img
            class="gallery__photo-img"
            :src="
              img ||
              'https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png'
            "
            alt=""
          />
          <span class="gallery__photo-text" :class="{ show: !img }"
            >Загрузить фото</span
          >
        </div>
      </my-file-input>
      <vs-input
        v-model="title"
        class="gallery-edit__field"
        label="Заголовок"
      />
      <vs-input
        v-model="text"
        class="gallery-edit__field"
        label="Текст"
      />
      <vs-input
        v-model="video"
        class="gallery-edit__field"
        label="Видео"
      />
      <div class="gallery__popup-btns">
        <vs-button
          class="gallery__popup-btn"
          color="success"
          type="filled"
          :disabled="loading"
          @click="saveItem()"
          >Сохранить</vs-button
        >
        <vs-button
          class="gallery__popup-btn"
          color="danger"
          type="filled"
          @click="popupEdit = false"
          >Назад</vs-button
        >
      </div>
    </vs-popup>
    <div class="gallery__items">
      <div
        v-for="(item, index) in gallery"
        :key="item.id"
        class="gallery__item"
      >
        <div
          class="gallery__item-delete"
          @click=";(popupDelete = true), (itemIndex = index)"
        >
          <vs-icon icon="close"></vs-icon>
        </div>
        <img
          class="gallery__item-img"
          :src="item.img"
          alt=""
          @click=";(popupEdit = true), (selectedItem = item.id), (itemIndex = index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $readData }) {
    const galleryObj = await $readData('gallery')
    const gallery = []
    Object.keys(galleryObj).forEach((item) => gallery.push(galleryObj[item]))
    return { gallery }
  },
  data() {
    return {
      popupDelete: false,
      popupEdit: false,
      itemIndex: '',
      selectedItem: '',
      file: null,
      img: '',
      title: '',
      text: '',
      video: '',
      loading: false
    }
  },
  watch: {
    async selectedItem() {
      const galleryItem = await this.$readData(`gallery/${this.selectedItem}`)
      if(galleryItem) {
        this.img = galleryItem.img
        this.title = galleryItem.title
        this.text = galleryItem.text
        this.video = galleryItem.video
      } else {
        this.img = ''
        this.title = ''
        this.text = ''
        this.video = ''
      }
    },
  },
  methods: {
    addItem() {
      this.selectedItem = +new Date()
      this.galleryItem = {
        id: this.selectedItem,
        img: '',
        title: '',
        text: '',
        video: ''
      }
      this.popupEdit = true
    },
    async saveItem() {
      this.loading = true
      if(!this.img) {
        this.loading = false
        return this.$vs.notify({
          color: 'danger',
          title: 'Загрузите картинку.',
        })
      }
      if(this.file) {
        const format =
          this.file.name.split('.')[this.file.name.split('.').length - 1]
        this.img = await this.$uploadImg(this.file, `gallery/${this.selectedItem}.${format}`)
      }
      const galleryItem = {
        id: this.selectedItem,
        img: this.img,
        title: this.title || null,
        text: this.text || null,
        video: this.video || null
      }
      if(this.gallery[this.itemIndex]) {
        this.gallery[this.itemIndex] = galleryItem
      } else {
        this.gallery.push(galleryItem)
      }
      await this.$writeData(`gallery/${this.selectedItem}`, galleryItem)
      this.file = null
      this.popupEdit = false
      this.loading = false
      this.$vs.notify({
        color: 'success',
        title: 'Изменения прошли успешно.',
      })
    },
    async deleteItem() {
      const id = this.gallery[this.itemIndex].id
      await this.$writeData(`gallery/${id}`, null)
      this.gallery.splice(this.itemIndex, 1)
      this.popupDelete = false
      this.$vs.notify({
        color: 'success',
        title: 'Удаление прошло успешно.',
      })
    },
    getFileImg(file) {
      this.file = file
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (e) => {
        this.img = e.target.result
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.gallery {
  &__add {
    display: block;
    margin-left: auto;
    margin-bottom: 20px;
  }
  &__popup {
    &-title {
      font-size: 24px;
      text-align: center;
      margin-bottom: 20px;
    }
    &-btns {
      display: flex;
      justify-content: center;
      gap: 10px;
    }
  }
  &__items {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
  &__item {
    position: relative;
    &-delete {
      cursor: pointer;
      border: 2px solid #000;
      border-radius: 50%;
      background-color: #fff;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(50%, -50%);
      padding: 0 1px;
      padding-top: 2px;
      z-index: 10;
    }
    &-img {
      max-width: 350px;
      height: 350px;
      object-fit: cover;
      cursor: pointer;
      &:hover {
        filter: brightness(80%);
      }
    }
  }
  &__photo {
    position: relative;
    cursor: pointer;
    max-width: 355px;
    max-height: 555px;
    margin-left: 30px;
    margin-bottom: 20px;
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
    &:hover .gallery__photo-img {
      filter: brightness(50%);
    }
    &:hover .gallery__photo-text {
      display: block;
      white-space: nowrap;
    }
  }
  &-edit__field {
    margin-bottom: 15px;
    margin-left: 25px;
  }
}
</style>