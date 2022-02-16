<template>
  <div class="product-edit">
    <vs-switch v-model="ua" class="product-edit__lang">
      <span slot="on">Ua</span>
      <span slot="off">Ru</span>
    </vs-switch>
    <div class="product-edit__img product-edit__field">
      <div class="product-edit__img-title">Фото:</div>
      <my-file-input @getFile="getFileImg">
        <div class="product-edit__photo">
          <img
            class="product-edit__photo-img"
            :src="
              img ||
              'https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png'
            "
            alt=""
          />
          <span class="product-edit__photo-text" :class="{ show: !img }"
            >Загрузить фото</span
          >
        </div>
      </my-file-input>
    </div>
    <div class="product-edit__type product-edit__field">
      <vs-select v-model="type" class="selectExample" label="Тип ореха">
        <vs-select-item
          v-for="(item, index) in ua
            ? ['Волоський горіх', 'Фундук', 'Шипшина']
            : ['Грецкий орех', 'Фундук', 'Шиповник']"
          :key="index"
          :value="item"
          :text="item"
        />
      </vs-select>
    </div>
    <div class="product-edit__title product-edit__field">
      <vs-input v-model="title" class="product-edit__input" label="Название" />
    </div>
    <div class="product-edit__composition product-edit__field">
      <vs-textarea v-model="composition" label="Состав" />
    </div>
    <div class="product-edit__conditions product-edit__field">
      <vs-textarea v-model="conditions" label="Условия хранения" />
    </div>
    <div class="product-edit__experation product-edit__field">
      <vs-input
        v-model="experation"
        class="product-edit__input"
        label="Срок годности"
      />
    </div>
    <div class="product-edit__calories product-edit__field">
      <vs-input-number
        v-model="calories"
        class="product-edit__number-input"
        label="Энергетическая ценность:"
        :step="50"
      />
    </div>
    <div class="product-edit__price product-edit__field">
      <vs-input-number
        v-model="price"
        class="product-edit__number-input"
        label="Цена:"
        :step="5"
      />
    </div>
    <div class="product-edit__weight product-edit__field">
      <vs-input-number
        v-model="weight"
        class="product-edit__number-input"
        label="Вес:"
        :step="5"
      />
    </div>
    <div class="product-edit__new product-edit__field">
      <vs-checkbox v-model="newProduct" class="product-edit__checkbox"
        >Новый товар</vs-checkbox
      >
    </div>
    <div class="product-edit__sale product-edit__field">
      <vs-checkbox v-model="sale" class="product-edit__checkbox"
        >Скидка</vs-checkbox
      >
    </div>
    <div v-if="sale" class="product-edit__discount product-edit__field">
      <vs-input-number
        v-model="discount"
        class="product-edit__number-input"
        min="1"
        label="Процент скидки"
      />
    </div>
    <div class="product-edit__btns">
      <vs-button
        class="product-edit__btn"
        color="success"
        type="filled"
        @click="submit"
        >Сохранить</vs-button
      >
      <vs-button
        class="product-edit__btn"
        color="danger"
        type="filled"
        @click="$router.push('/admin/products')"
        >Назад</vs-button
      >
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $readData, params }) {
    const product = await $readData(`/products/${params.id}`)
    return { product }
  },
  data() {
    return {
      ua: false,
      id: '',
      calories: 0,
      composition: '',
      conditions: '',
      discount: 1,
      experation: '',
      img: '',
      file: null,
      newProduct: false,
      price: 0,
      sale: false,
      title: '',
      type: 'Грецкий орех',
      weight: 0,
      productRu: {},
      productUa: {},
    }
  },
  watch: {
    ua() {
      const id = this.$route.params.id
      if (this.ua) {
        this.productRu = {
          id,
          calories: this.calories,
          composition: this.composition,
          conditions: this.conditions,
          experation: this.experation,
          img: this.img,
          newProduct: this.newProduct,
          price: this.price,
          sale: this.sale,
          discount: this.sale ? this.discount : 0,
          title: this.title,
          type: this.type,
          weight: this.weight,
          ua: this.productUa || {},
        }
        if (this.productUa) {
          this.composition = this.productUa.composition || ''
          this.conditions = this.productUa.conditions || ''
          this.experation = this.productUa.experation || ''
          this.title = this.productUa.title || ''
        }
        this.type =
          this.type === 'Грецкий орех'
            ? 'Волоський горіх'
            : this.type === 'Шиповник'
            ? 'Шипшина'
            : this.type
      } else {
        this.productUa = {
          id,
          calories: this.calories,
          composition: this.composition,
          conditions: this.conditions,
          experation: this.experation,
          img: this.img,
          newProduct: this.newProduct,
          price: this.price,
          sale: this.sale,
          discount: this.sale ? this.discount : 0,
          title: this.title,
          type: this.type,
          weight: this.weight,
        }
        this.composition = this.productRu.composition
        this.conditions = this.productRu.conditions
        this.experation = this.productRu.experation
        this.title = this.productRu.title
        this.type =
          this.type === 'Волоський горіх'
            ? 'Грецкий орех'
            : this.type === 'Шипшина'
            ? 'Шиповник'
            : this.type
        this.productRu.ua = this.productUa
      }
    },
  },
  mounted() {
    if (this.product) {
      this.calories = this.product.calories
      this.composition = this.product.composition
      this.conditions = this.product.conditions
      this.discount = this.product.discount || 1
      this.experation = this.product.experation
      this.img = this.product.img
      this.newProduct = this.product.newProduct
      this.price = this.product.price
      this.sale = this.product.sale
      this.title = this.product.title
      this.type = this.product.type
      this.weight = this.product.weight
      this.productUa = this.product.ua
      this.productRu = {
        id: this.product.id,
        calories: this.calories,
        composition: this.composition,
        conditions: this.conditions,
        experation: this.experation,
        img: this.img,
        newProduct: this.newProduct,
        price: this.price,
        sale: this.sale,
        discount: this.sale ? this.discount : null,
        title: this.title,
        type: this.type,
        weight: this.weight,
        ua: this.productUa || {},
      }
    }
  },
  methods: {
    async submit() {
      const id = this.$route.params.id
      if (
        !this.title ||
        !this.composition ||
        !this.conditions ||
        !this.experation
      ) {
        return this.$vs.notify({
          color: 'danger',
          title: 'Заполните все поля.',
        })
      }
      if (this.file) {
        const format =
          this.file.name.split('.')[this.file.name.split('.').length - 1]
        this.img = await this.$uploadImg(this.file, `products/${id}.${format}`)
      }
      if (this.ua) {
        this.productRu.weight = this.weight
        this.productRu.sale = this.sale
        this.productRu.discount = this.sale ? this.discount : null
        this.productRu.img = this.img
        this.productRu.ua = {
          id,
          calories: this.calories,
          composition: this.composition,
          conditions: this.conditions,
          experation: this.experation,
          img: this.img,
          newProduct: this.newProduct,
          price: this.price,
          sale: this.sale,
          discount: this.sale ? this.discount : null,
          title: this.title,
          type: this.type,
          weight: this.weight
        }
      } else {
        this.productUa.weight = this.weight
        this.productUa.sale = this.sale
        this.productUa.discount = this.sale ? this.discount : null
        this.productUa.img = this.img
        this.productRu = {
          id,
          calories: this.calories,
          composition: this.composition,
          conditions: this.conditions,
          experation: this.experation,
          img: this.img,
          newProduct: this.newProduct,
          price: this.price,
          sale: this.sale,
          discount: this.sale ? this.discount : 0,
          title: this.title,
          type: this.type,
          weight: this.weight,
          ua: this.productUa || {},
        }
      }
      this.$writeData(`products/${id}`, this.productRu)
      this.$vs.notify({
        color: 'success',
        title: 'Вы изменили данные о товаре.',
      })
      this.$router.push(`/admin/products`)
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
.product-edit {
  &__lang {
    margin-bottom: 20px;
  }
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
    &:hover .product-edit__photo-img {
      filter: brightness(50%);
    }
    &:hover .product-edit__photo-text {
      display: block;
      white-space: nowrap;
    }
  }
  &__calories {
    .product-edit__number-input {
      max-width: 300px;
    }
  }
  &__discount {
    .product-edit__number-input {
      max-width: 250px;
    }
  }
  &__number-input {
    max-width: 140px;
    justify-content: space-between;
  }
}
</style>