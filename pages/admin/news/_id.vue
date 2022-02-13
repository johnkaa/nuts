<template>
  <div class="news-edit">
     <validation-observer
      v-slot="{ invalid }"
      tag="form"
      name="news-edit"
    >
    <div class="news-edit__img news-edit__field">
      <div class="news-edit__img-title">Фото:</div>
      <my-file-input @getFile="getFileImg">
        <div class="news-edit__photo">
          <img
            class="news-edit__photo-img"
            :src="img"
            alt=""
          />
          <span class="news-edit__photo-text" :class="{ show: !img }"
            >Загрузить фото</span
          >
        </div>
      </my-file-input>
    </div>
    <div class="news-edit__title news-edit__field">
       <validation-provider name="title" rules="required">
        <div slot-scope="{ errors }">
          <vs-input v-model="title" class="news-edit__input" :danger="errors.length > 0" :danger-text="errors[0]" label="Заголовок" />
        </div>
      </validation-provider>
    </div>
    <div class="news-edit__composition news-edit__field">
      <vs-textarea v-model="text" label="Текст" />
    </div>
    <div class="news-edit__btns">
      <vs-button
        class="news-edit__btn"
        :disabled="invalid"
        color="success"
        type="filled"
        @click="submit"
        >Сохранить</vs-button
      >
      <vs-button
        class="news-edit__btn"
        color="danger"
        type="filled"
        @click="$router.push('/admin/news')"
        >Назад</vs-button
      >
    </div>
     </validation-observer>
  </div>
</template>

<script>
export default {
  async asyncData({ $readData, params }) {
    const news = await $readData(`news/${params.id}`)
    return { news }
  },
  data() {
    return {
       date: '',
      img: 'https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png',
      text: '',
      title: '',
    }
  },
  mounted() {
    if (this.news) {
      this.date = this.news.date 
      this.img = this.news.img
      this.text = this.news.text
      this.title = this.news.title
    }
  },
  methods: {
    async submit() {
      const id = this.$route.params.id
      let date = this.date
      if (!date) {
        const day =
          new Date().getDate() > 9
            ? new Date().getDate()
            : '0' + new Date().getDate()
        const month =
          new Date().getMonth() + 1 > 9
            ? new Date().getMonth() + 1
            : '0' + (new Date().getMonth() + 1)
        date = day + '.' + month + '.' + new Date().getFullYear()
      }
      const news = {
        id,
        date,
        img: this.img,
        title: this.title,
        text: this.text,
      }
      if (this.file) {
        const format =
          this.file.name.split('.')[this.file.name.split('.').length - 1]
        this.img = await this.$uploadImg(this.file, `news/${id}.${format}`)
      }
      await this.$writeData(`news/${id}`, news)
      this.$vs.notify({
        color: 'success',
        title: 'Вы изменили новость.',
      })
      this.$router.push(`/admin/news`)
    },
    getFileImg(file) {
      this.file = file
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (e) => {
        this.img = e.target.result
      }
    },
  },
}
</script>

<style lang="scss">
.news-edit {
  &__img {
    display: flex;
    align-items: center;
  }
  &__input {
    width: 300px;
  }
  &__field {
    margin-bottom: 20px;
  }
  &__btns {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  &__photo {
    position: relative;
    cursor: pointer;
    max-width: 355px;
    max-height: 555px;
    margin-left: 30px;
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
    &:hover .news-edit__photo-img {
      filter: brightness(50%);
    }
    &:hover .news-edit__photo-text {
      display: block;
      white-space: nowrap;
    }
  }
}
</style>