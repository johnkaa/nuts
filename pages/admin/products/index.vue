<template>
  <div class="products">
    <h2 class="products__title">Товары</h2>
    <vs-popup
      class="holamundo"
      title="Подтвердите действие"
      :active.sync="popupActivo"
    >
      <h2 class="products__popup-title">Вы действительно хотите удалить?</h2>
      <div class="products__popup-btns">
        <vs-button
          class="products__popup-btn"
          color="danger"
          type="filled"
          @click="deleteProduct"
          >Удалить</vs-button
        >
        <vs-button
          class="products__popup-btn"
          color="success"
          type="filled"
          @click="popupActivo = false"
          >Назад</vs-button
        >
      </div>
    </vs-popup>
    <vs-table class="products__table" :data="products">
      <template slot="thead">
        <vs-th class="products__item-title"> № </vs-th>
        <vs-th class="products__item-title"> Название </vs-th>
        <vs-th class="products__item-title"> Цена </vs-th>
        <vs-th class="products__item-title"> Скидка </vs-th>
      </template>
      <template slot-scope="{ data }">
        <vs-tr v-for="product in data" :key="product.id">
          <vs-td :data="product.id">
            {{ product.id }}
          </vs-td>

          <vs-td :data="product.title">
            {{ product.title }}
          </vs-td>

          <vs-td :data="product.price"> {{ product.price }} грн. </vs-td>

          <vs-td :data="product.sale">
            <span v-if="product.sale" class="products__item-sale">
              <vs-icon icon="check" color="green"></vs-icon>
            </span>
            <span v-else class="products__item-sale">
              <vs-icon icon="block" color="red"></vs-icon>
            </span>
          </vs-td>
          <vs-td>
            <span
              class="products__item-action"
              @click="$router.push(`/admin/products/${product.id}`)"
            >
              <vs-icon icon="edit"></vs-icon>
            </span>
            <span
              class="products__item-action"
              @click=";(popupActivo = true), (productId = product.id)"
            >
              <vs-icon icon="delete"></vs-icon>
            </span>
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
    <vs-button
      class="products__btn"
      color="success"
      type="filled"
      @click="$router.push(`/admin/products/${+new Date()}`)"
      >Добавить товар</vs-button
    >
  </div>
</template>

<script>
export default {
  async asyncData({ $readData }) {
    const productsObj = await $readData('products')
    const products = []
    Object.keys(productsObj).forEach((product) =>
      products.push(productsObj[product])
    )
    return { products }
  },
  data() {
    return {
      popupActivo: false,
      productId: 0
    }
  },
  methods: {
    deleteProduct() {
      this.$writeData(`products/${this.productId}`, null)
      this.popupActivo = false
      this.$vs.notify({
        color: 'success',
        title: 'Вы удалили товар.',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.products {
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
    &-sale {
      padding-left: 10px;
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
