<template>
  <div class="shop">
    <div class="container">
      <div class="shop__pos position secondary">
        <nuxt-link class="shop__pos-link position-link" to="/">{{
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
        <nuxt-link class="shop__pos-link position-link" :to="$route.path"
          >Магазин</nuxt-link
        >
      </div>
    </div>
    <div class="shop__banner">
      <h2 class="shop__banner-title">{{ $t('shop.title') }}</h2>
    </div>
    <div class="shop__catalog">
      <div class="container">
        <div class="shop__filter">
          <div class="shop__filter-settings">
            <div class="shop__filter-title">{{ $t('shop.filter.title') }}</div>
            <div class="shop__filter-selects">
              <my-select
                v-model="type"
                :value="type"
                class="shop__filter-select"
                :options="
                  $i18n.locale === 'ua'
                    ? ['Волоський горіх', 'Фундук', 'Шипшина']
                    : ['Грецкий орех', 'Фундук', 'Шиповник']
                "
                :placeholder="$t('shop.filter.type')"
              />
              <my-select
                v-model="weight"
                :value="weight"
                class="shop__filter-select"
                :options="filterWeight"
                :placeholder="$t('shop.filter.weight')"
              />
            </div>
            <div class="shop__filter-price">
              <span class="shop__filter-price-text" @click="setPriceFilter">{{
                $t('shop.filter.price')
              }}</span
              ><svg
                class="shop__filter-price-arrow bottom"
                :class="{ active: price === 'lower' }"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="price = 'lower'"
              >
                <path
                  d="M7.00001 11L6.3 10.3L10.1 6.5H0V5.50002H10.1L6.3 1.7L7.00001 1.00002L12 6.00001L7.00001 11Z"
                  fill="#8A8A8A"
                />
              </svg>
              <svg
                class="shop__filter-price-arrow top"
                :class="{ active: price === 'upper' }"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                @click="price = 'upper'"
              >
                <path
                  d="M7.00001 11L6.3 10.3L10.1 6.5H0V5.50002H10.1L6.3 1.7L7.00001 1.00002L12 6.00001L7.00001 11Z"
                  fill="#8A8A8A"
                />
              </svg>
            </div>
          </div>
          <div class="shop__filter-actions">
            <my-button class="shop__filter-btn" @click="filtered = true">{{
              $t('shop.filter.submit')
            }}</my-button>
            <div v-if="filtered" class="shop__filter-reset" @click="reset">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="shop__filter-reset-icon"
                  d="M12 1.2L10.8 0L6 4.8L1.2 0L0 1.2L4.8 6L0 10.8L1.2 12L6 7.2L10.8 12L12 10.8L7.2 6L12 1.2Z"
                  fill="#C4C4C4"
                />
              </svg>
              {{ $t('shop.filter.reset') }}
            </div>
          </div>
        </div>
        <div class="shop__items">
          <Product
            v-for="(item, index) in productsToShow"
            :key="index"
            class="shop__item"
            :product="item"
          />
        </div>
        <my-button
          v-if="!showAll && filteredProducts.length > 6"
          class="shop__btn secondary"
          @click="setShow"
          >{{ $t('shop.showAll') }}</my-button
        >
        <my-button
          v-if="showAll && filteredProducts.length > 6"
          class="shop__btn secondary"
          @click="setShow"
          >{{ $t('shop.hideAll') }}</my-button
        >
      </div>
    </div>
    <div class="shop__info">
      <div class="container">
        <div class="shop__info-inner">
          <div class="shop__about">
            <div class="shop__about-title">
              {{ $t('shop.about.title') }}
            </div>
            <div class="shop__about-subtitle">
              {{ $t('shop.about.subtitle') }}
            </div>
            <div class="shop__about-inner">
              <p class="shop__about-text">{{ $t('shop.about.text') }}</p>
            </div>
          </div>
          <div class="shop__slider">
            <img src="/images/shop-slider-1.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $readData, i18n }) {
    const productsObj = await $readData('products')
    const products = []
    if(i18n.locale === 'ua') {
      Object.keys(productsObj).forEach((item) => products.push(productsObj[item].ua))
    } else {
      Object.keys(productsObj).forEach((item) => products.push(productsObj[item]))
    }
    return { products }
  },
  data() {
    return {
      type: '',
      weight: '',
      price: '',
      filterWeight: [],
      filtered: false,
      showAll: false,
    }
  },
  computed: {
    filteredProducts() {
      let products = this.products
      if (this.filtered) {
        if (this.type) {
          products = products.filter((product) => product.type === this.type)
        }
        if (this.weight) {
          products = products.filter(
            (product) => product.weight + 'г' === this.weight
          )
        }
        if (this.price) {
          if (this.price === 'lower') {
            products.sort((a, b) => a.price - b.price)
          } else {
            products.sort((a, b) => b.price - a.price)
          }
        }
      }
      return products
    },
    productsToShow() {
      if (!this.showAll) {
        return this.filteredProducts.slice(0, 6)
      } else {
        return this.filteredProducts
      }
    },
  },
  watch: {
    type() {
      this.weight = ''
      let products = this.productsToShow
      products = products.filter((product) => product.type === this.type)
      this.setWeight(products)
    },
    filtered() {
      this.setWeight(this.productsToShow)
    },
    async '$i18n.locale'() {
      const products = await this.$readData('products')
      this.products = []
      if (this.$i18n.locale === 'ua') {
        Object.keys(products).forEach((product) => {
          this.products.push(products[product].ua)
        })
      } else {
        Object.keys(products).forEach((product) => {
          this.products.push(products[product])
        })
      }
    },
  },
  mounted() {
    this.setWeight(this.productsToShow)
  },
  methods: {
    setPriceFilter() {
      if (this.price) {
        if (this.price === 'lower') {
          this.price = 'upper'
        } else {
          this.price = ''
        }
      } else {
        this.price = 'lower'
      }
    },
    setWeight(products) {
      let weights = []
      if (this.type) {
        products = products.filter((product) => product.type === this.type)
      }
      products.forEach((product) => {
        if (!weights.includes(product.weight)) {
          weights.push(product.weight)
        }
      })
      weights = weights.sort((a, b) => a - b)
      this.filterWeight = []
      weights.forEach((item) => this.filterWeight.push(item + 'г'))
    },
    setShow() {
      this.showAll = !this.showAll
      this.setWeight(this.productsToShow)
    },
    reset() {
      this.type = ''
      this.weight = ''
      this.price = ''
      this.filtered = false
    },
  },
}
</script>

<style lang="scss" scoped>
.shop {
  &__banner {
    color: #fff;
    text-align: center;
    background-image: url(/images/shop-banner-bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 110px 0;
    &-title {
      font-size: 62px;
      font-weight: 800;
    }
  }
  &__filter {
    margin-bottom: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-settings,
    &-actions {
      display: flex;
      align-items: center;
    }
    &-title {
      font-size: 17px;
      font-weight: 700;
      padding-right: 35px;
      position: relative;
      margin-right: 60px;
      &::after {
        content: '';
        background-image: url(/images/icons/settings.svg);
        width: 23px;
        height: 21px;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    &-selects {
      display: flex;
    }
    &-select {
      width: 250px;
      & + & {
        width: 130px;
        margin-left: 25px;
        margin-right: 50px;
      }
    }
    &-price {
      display: flex;
      align-items: center;
      font-size: 17px;
      font-weight: 700;
      cursor: pointer;
      .top,
      .bottom {
        &.active {
          path {
            transition: fill 0.3s;
            fill: #337d5a;
          }
        }
      }
      .top {
        cursor: pointer;
        transform: rotate(270deg);
      }
      .bottom {
        cursor: pointer;
        margin-left: 10px;
        margin-right: 5px;
        transform: rotate(90deg);
        .active {
          fill: #337d5a;
        }
      }
    }
    &-btn {
      width: 150px;
      margin-right: 45px;
    }
    &-reset {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #8a8a8a;
      cursor: pointer;
      transition: color 0.3s;
      &-icon {
        transition: fill 0.3s;
      }
      &:hover {
        color: #337d5a;
        .shop__filter-reset-icon {
          fill: #337d5a;
        }
      }
    }
  }
  &__catalog {
    padding: 90px 0;
  }
  &__items {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 70px;
  }
  &__btn {
    max-width: 200px;
    display: block;
    margin: 0 auto;
  }
  &__info {
    background-color: #fbfbfb;
    padding: 90px 0;
    &-inner {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 70px;
    }
  }
  &__about {
    max-width: 520px;
    &-title {
      font-size: 45px;
      font-weight: 800;
      margin-bottom: 20px;
    }
    &-subtitle {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 30px;
    }
    &-inner {
      overflow-y: auto;
      max-height: 314px;
      padding-right: 40px;
      &::-webkit-scrollbar {
        width: 6px;
      }
    }
    &-text {
      line-height: 30px;
    }
  }
  &__slider {
    max-width: 700px;
    img {
      width: 100%;
    }
  }
}
@media (max-width: 1330px) {
  .shop__about {
    max-width: 800px;
    &-title {
      max-width: 530px;
    }
  }
}
@media (max-width: 1100px) {
  .shop__filter {
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
  }
}
@media (max-width: 800px) {
  .shop__filter {
    &-title {
      margin-right: 30px;
    }
    &-selects {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin-right: 20px;
    }
    &-select {
      width: 160px;
    }
    &-select + &-select {
      width: 160px;
      margin: 0;
      order: 0;
    }
  }
}
@media (max-width: 530px) {
  .shop {
    &__about-title {
      font-size: 32px;
    }
    &__filter-settings {
      flex-direction: column;
      gap: 20px;
    }
  }
}
</style>