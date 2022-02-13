<template>
  <div class="news">
    <h2 class="news__title">Новости</h2>
    <vs-popup
      class="holamundo"
      title="Подтвердите действие"
      :active.sync="popupActivo"
    >
      <h2 class="news__popup-title">Вы действительно хотите удалить?</h2>
      <div class="news__popup-btns">
        <vs-button
          class="news__popup-btn"
          color="danger"
          type="filled"
          @click="deleteNews"
          >Удалить</vs-button
        >
        <vs-button
          class="news__popup-btn"
          color="success"
          type="filled"
          @click="popupActivo = false"
          >Назад</vs-button
        >
      </div>
    </vs-popup>
    <vs-table class="news__table" :data="news">
      <template slot="thead">
        <vs-th class="news__item-title"> № </vs-th>
        <vs-th class="news__item-title"> Заголовок </vs-th>
        <vs-th class="news__item-title"> Дата </vs-th>
      </template>
      <template slot-scope="{ data }">
        <vs-tr v-for="(news, index) in data" :key="news.id">
          <vs-td :data="news.id">
            {{ news.id }}
          </vs-td>

          <vs-td :data="news.title">
            {{ news.title }}
          </vs-td>

          <vs-td :data="news.date">
            {{ news.date }}
          </vs-td>

          <vs-td>
            <span
              class="news__item-action"
              @click="$router.push(`/admin/news/${news.id}`)"
            >
              <vs-icon icon="edit"></vs-icon>
            </span>
            <span
              class="news__item-action"
              @click="(popupActivo = true), (newsId = news.id), (newsIndex = index)"
            >
              <vs-icon icon="delete"></vs-icon>
            </span>
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
    <vs-button
      class="news__btn"
      color="success"
      type="filled"
      @click="$router.push(`/admin/news/${+new Date()}`)"
      >Добавить новость</vs-button
    >
  </div>
</template>

<script>
export default {
  async asyncData({ $readData }) {
    const newsObj = await $readData('news')
    const news = []
    Object.keys(newsObj).forEach((id) => news.push(newsObj[id]))
    return { news }
  },
  data() {
    return {
      popupActivo: false,
      newsId: 0,
      newsIndex: 0
    }
  },
  methods: {
    deleteNews() {
      this.$writeData(`news/${this.newsId}`, null)
      this.news.splice(this.newsIndex, 1)
      this.popupActivo = false
      this.$vs.notify({
        color: 'success',
        title: 'Вы удалили новость.',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.news {
  &__title {
    font-size: 32px;
    text-align: center;
    margin-bottom: 30px;
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
  &__item {
    &-title {
      padding: 10px;
      text-align: center;
      background-color: #dddddd;
    }
    &-action {
      cursor: pointer;
    }
  }
  &__btn {
    margin: 0 auto;
    display: block;
    padding: 20px;
    margin-top: 50px;
  }
}
</style>
