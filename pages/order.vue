<template>
  <div class="order">
    <div class="container">
      <div class="order__pos position">
        <nuxt-link class="order__pos-link position-link" :to="($i18n.locale === 'ua' ? '/ua' : '') + '/'">{{
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
            fill="#8a8a8a"
          />
        </svg>
        <nuxt-link class="order__pos-link position-link" :to="$route.path">{{
          $t('order.title')
        }}</nuxt-link>
      </div>
      <div class="order__top">
        <h2 class="order__title">{{ $t('order.title') }}</h2>
        <div class="order__manager">
          <div class="order__manager-name">{{ $t('cabinet.manager') }}</div>
          <a class="order__manager-phone" href="tel:380677771412">
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_408_133)">
                <path
                  d="M14.314 10.8474C14.2744 10.7281 14.0222 10.5524 13.5576 10.3206C13.4318 10.2475 13.2524 10.1482 13.0204 10.0222C12.7881 9.89627 12.5773 9.7802 12.3883 9.67412C12.199 9.56807 12.0215 9.46533 11.8558 9.36605C11.8293 9.34616 11.7463 9.28825 11.607 9.19192C11.4675 9.09587 11.3499 9.02458 11.2535 8.97808C11.1573 8.93187 11.0627 8.90861 10.9698 8.90861C10.8371 8.90861 10.6714 9.00312 10.4724 9.19192C10.2734 9.38095 10.0908 9.58629 9.92503 9.80855C9.75919 10.0307 9.5833 10.236 9.3977 10.425C9.21181 10.614 9.05908 10.7084 8.93978 10.7084C8.87989 10.7084 8.80521 10.6917 8.71572 10.6588C8.62626 10.6257 8.55821 10.5973 8.5115 10.5744C8.4652 10.551 8.38575 10.5048 8.27287 10.435C8.15977 10.3653 8.09688 10.3272 8.08363 10.3206C7.1746 9.81666 6.39497 9.23994 5.74462 8.59054C5.09447 7.94076 4.51708 7.16201 4.01279 6.25382C4.00617 6.24055 3.96793 6.17755 3.89831 6.06492C3.82858 5.95219 3.78211 5.87275 3.75889 5.82622C3.73567 5.77987 3.70747 5.71189 3.67435 5.62242C3.64123 5.53295 3.6246 5.45843 3.6246 5.3987C3.6246 5.27945 3.71918 5.12692 3.90831 4.94129C4.09741 4.75577 4.30316 4.58004 4.52537 4.41444C4.74776 4.24885 4.95331 4.0665 5.14247 3.86771C5.33157 3.66882 5.42611 3.50319 5.42611 3.37064C5.42611 3.2779 5.40289 3.18334 5.35649 3.08726C5.31006 2.99097 5.23873 2.87346 5.14247 2.73419C5.04618 2.59499 4.98814 2.51221 4.9682 2.48557C4.86877 2.31997 4.76603 2.14267 4.65973 1.95374C4.55344 1.76484 4.43742 1.55429 4.31129 1.32231C4.18526 1.09044 4.0858 0.911398 4.01272 0.785467C3.78061 0.321549 3.6048 0.0695476 3.48533 0.0299156C3.43886 0.0100299 3.36913 0 3.27633 0C3.09707 0 2.86321 0.0330847 2.57458 0.0994632C2.28585 0.165737 2.05866 0.23525 1.89275 0.30828C1.56096 0.44741 1.20931 0.851741 0.837673 1.52113C0.499265 2.1441 0.330078 2.7607 0.330078 3.37046C0.330078 3.5493 0.341687 3.72329 0.364906 3.89247C0.388124 4.06148 0.42961 4.25209 0.489399 4.46425C0.549083 4.67634 0.597228 4.83389 0.633624 4.93649C0.670055 5.03915 0.738072 5.22307 0.837639 5.48831C0.937066 5.75347 0.996855 5.9158 1.01676 5.97545C1.24898 6.6251 1.52436 7.20506 1.84282 7.7155C2.3668 8.56393 3.08187 9.44075 3.98759 10.3456C4.89335 11.2504 5.7709 11.9647 6.62029 12.4883C7.13119 12.8064 7.71197 13.0815 8.36218 13.3136C8.42194 13.3334 8.58443 13.393 8.84977 13.4927C9.11521 13.592 9.29939 13.66 9.40216 13.6965C9.50497 13.733 9.66272 13.7811 9.87486 13.8408C10.0874 13.9005 10.2781 13.942 10.4473 13.9653C10.6166 13.9882 10.7908 14 10.9698 14C11.5802 14 12.1975 13.8309 12.8212 13.4929C13.4912 13.1218 13.8958 12.7704 14.0352 12.4387C14.1085 12.2732 14.1779 12.0462 14.2442 11.7577C14.3108 11.4694 14.3438 11.2359 14.3438 11.0568C14.344 10.9637 14.334 10.8942 14.314 10.8474Z"
                  fill="#337D5A"
                />
              </g>
              <defs>
                <clipPath id="clip0_408_133">
                  <rect
                    width="14.0146"
                    height="14"
                    fill="white"
                    transform="translate(0.328125)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span>+38 067 777 14 12</span>
          </a>
        </div>
      </div>
      <div class="order__basket">
        <div class="order__basket-item">
          <div
            class="order__basket-item-title item-title"
            @click="sort = 'title'"
          >
            Товар
            <svg
              class="item-title-icon"
              :class="{ active: sort === 'title' }"
              width="10"
              height="8"
              viewBox="0 0 8 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.99485 4.07389L0.978121 1.2L0 2.20892L3.99485 6L8 2.20892L7.02188 1.2L3.99485 4.07389Z"
                fill="#8A8A8A"
              />
            </svg>
          </div>
          <div
            class="order__basket-item-value item-title"
            @click="sort = 'value'"
          >
            {{ $t('order.amount')
            }}<svg
              class="item-title-icon"
              :class="{ active: sort === 'value' }"
              width="10"
              height="8"
              viewBox="0 0 8 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.99485 4.07389L0.978121 1.2L0 2.20892L3.99485 6L8 2.20892L7.02188 1.2L3.99485 4.07389Z"
                fill="#8A8A8A"
              />
            </svg>
          </div>
          <div
            class="order__basket-item-price item-title"
            @click="sort = 'price'"
          >
            {{ $t('order.price')
            }}<svg
              class="item-title-icon"
              :class="{ active: sort === 'price' }"
              width="10"
              height="8"
              viewBox="0 0 8 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.99485 4.07389L0.978121 1.2L0 2.20892L3.99485 6L8 2.20892L7.02188 1.2L3.99485 4.07389Z"
                fill="#8A8A8A"
              />
            </svg>
          </div>
          <div
            class="order__basket-item-totalPrice item-title"
            @click="sort = 'totalPrice'"
          >
            {{ $t('order.sum')
            }}<svg
              class="item-title-icon"
              :class="{ active: sort === 'totalPrice' }"
              width="10"
              height="8"
              viewBox="0 0 8 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.99485 4.07389L0.978121 1.2L0 2.20892L3.99485 6L8 2.20892L7.02188 1.2L3.99485 4.07389Z"
                fill="#8A8A8A"
              />
            </svg>
          </div>
        </div>
        <div
          v-for="(item, index) in sortedBasket"
          :key="index"
          class="order__basket-item"
        >
          <div class="order__basket-item-title item-info">
            {{ item.title }}
          </div>
          <div class="order__basket-item-value item-info">
            <svg
              class="order__basket-decrement order__basket-arrow"
              width="10"
              height="7"
              viewBox="0 0 8 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              @click="decrementBasketItemValue(item.index)"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.99485 4.07389L0.978121 1.2L0 2.20892L3.99485 6L8 2.20892L7.02188 1.2L3.99485 4.07389Z"
                fill="#8A8A8A"
              />
            </svg>
            <span class="order__basket-item-value-num">{{ item.value }}</span>
            <svg
              class="order__basket-increment order__basket-arrow"
              width="10"
              height="7"
              viewBox="0 0 8 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              @click="incrementBasketItemValue(item.index)"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.99485 4.07389L0.978121 1.2L0 2.20892L3.99485 6L8 2.20892L7.02188 1.2L3.99485 4.07389Z"
                fill="#8A8A8A"
              />
            </svg>
          </div>
          <template v-if="item.sale">
            <div class="order__basket-item-price item-info">
              {{ item.price - (item.price / 100) * item.discount }} грн.
            </div>
            <div class="order__basket-item-total-price item-info">
              {{
                (item.price - (item.price / 100) * item.discount) * item.value
              }}
              грн.
            </div>
          </template>
          <template v-else>
            <div class="order__basket-item-price item-info">
              {{ item.price }} грн.
            </div>
            <div class="order__basket-item-total-price item-info">
              {{ item.price * item.value }} грн.
            </div>
          </template>
        </div>
        <div class="order__basket-bottom">
          <nuxt-link class="order__basket-link" :to="($i18n.locale === 'ua' ? '/ua' : '') + '/shop'">
            <my-button class="order__basket-btn">{{
              $t('order.back')
            }}</my-button>
          </nuxt-link>
          <template v-if="user">
            <div v-if="user.sale" class="order__basket-price">
              {{ $t('product.price') }}
              <span class="order__basket-price-num">(-{{ user.sale }}%):</span>
              <span class="order__basket-price-num"
                >{{ (price - (price / 100) * user.sale).toFixed(2) }} грн.</span
              >
            </div>
          </template>
          <div v-else class="order__basket-price">
            {{ $t('order.total') }}
            <span class="order__basket-price-num">{{ price }} грн.</span>
          </div>
        </div>
      </div>
      <validation-observer
        v-if="user"
        v-slot="{ invalid }"
        class="order__form"
        tag="form"
        name="order"
        @submit.prevent="submitOrder"
      >
        <div class="order__form-block">
          <div class="order__form-title">
            1. {{ $t('register.contactDetails') }}
          </div>
          <validation-provider name="name" rules="required">
            <div slot-scope="{ errors }" class="order__form-field">
              <my-input
                v-model="name"
                :value="name"
                type="text"
                :placeholder="$t('register.name')"
                :errors="errors"
              />
            </div>
          </validation-provider>
          <validation-provider name="email" rules="required">
            <div slot-scope="{ errors }" class="order__form-field">
              <my-input
                v-model="email"
                :value="email"
                type="text"
                placeholder="Email*"
                :errors="errors"
              />
            </div>
          </validation-provider>
          <validation-provider name="phone" rules="required">
            <div slot-scope="{ errors }" class="order__form-field">
              <my-input
                v-model="phone"
                :value="phone"
                type="text"
                placeholder="Телефон*"
                :errors="errors"
              />
            </div>
          </validation-provider>
        </div>
        <div class="order__form-block">
          <div class="order__form-title">
            2. {{ $t('order.delivery.title') }}
          </div>
          <div
            class="order__form-delivery-title"
            :class="{ active: delivery === 'post' }"
            @click="delivery = 'post'"
          >
            {{ $t('order.delivery.title') }}
          </div>
          <div v-if="delivery === 'post'" class="order__form-delivery-item">
            <validation-provider name="area" rules="required">
              <div slot-scope="{ errors }" class="order__form-field">
                <my-select
                  v-model="area"
                  :options="areas"
                  :errors="errors"
                  :placeholder="$t('register.region')"
                />
              </div>
            </validation-provider>
            <validation-provider name="city" rules="required">
              <div slot-scope="{ errors }" class="order__form-field">
                <my-select
                  v-model="city"
                  :value="city"
                  :options="cities"
                  :errors="errors"
                  :placeholder="$t('register.city')"
                />
              </div>
            </validation-provider>
            <validation-provider name="warehouse" rules="required">
              <div slot-scope="{ errors }" class="order__form-field">
                <my-select
                  v-model="warehouse"
                  :value="warehouse"
                  :options="warehouses"
                  :errors="errors"
                  :placeholder="$t('order.delivery.warehouse')"
                />
              </div>
            </validation-provider>
          </div>
          <div
            class="order__form-delivery-title"
            :class="{ active: delivery === 'courier' }"
            @click="delivery = 'courier'"
          >
            {{ $t('order.delivery.courier') }}
          </div>
          <div v-if="delivery === 'courier'" class="order__form-delivery-item">
            <validation-provider name="address" rules="required">
              <div slot-scope="{ errors }" class="order__form-field">
                <my-input
                  v-model="address"
                  :value="address"
                  type="text"
                  :placeholder="$t('register.address') + '*'"
                  :errors="errors"
                />
              </div>
            </validation-provider>
          </div>
          <div
            class="order__form-delivery-title"
            :class="{ active: delivery === 'self' }"
            @click="delivery = 'self'"
          >
            {{ $t('order.delivery.self') }}
          </div>
        </div>
        <div class="order__form-block">
          <div class="order__form-title">3. {{ $t('order.payment') }}</div>
          <my-radio-select
            v-model="payment"
            class="order__form-payment"
            :selects="
              $i18n.locale === 'ua'
                ? [
                    'Безготівковий розрахунок',
                    'LiqPay / Приват24',
                    'Готiвкою при отриманні(Післяплатою)',
                  ]
                : [
                    'Безналичный расчет',
                    'LiqPay / Приват24',
                    'Наличными при получении (Наложенным платежом)',
                  ]
            "
            :select-value="payment"
            name="payment"
          />
        </div>
        <my-button class="order__form-btn" :disabled="invalid">{{
          $t('register.submit')
        }}</my-button>
      </validation-observer>
      <div v-else class="order__auth">
        <div class="order__auth-title">{{ $t('order.auth') }}</div>
        <div class="oruder__auth-links">
          <nuxt-link class="order__auth-link" :to="($i18n.locale === 'ua' ? '/ua' : '') + '/auth/login'">{{
            $t('order.login')
          }}</nuxt-link>
          <span class="order__auth-text">{{ $t('order.or') }}</span>
          <nuxt-link class="order__auth-link" :to="($i18n.locale === 'ua' ? '/ua' : '') + '/auth/register'">{{
            $t('order.register')
          }}</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const apiKey = '754a3b820f50eabada6a42ea7ca86e13'

export default {
  data() {
    return {
      sort: '',
      price: 0,
      name: '',
      email: '',
      phone: '',
      delivery: 'post',
      area: '',
      areaRef: '',
      areas: [],
      city: '',
      cityRef: '',
      cities: [],
      warehouse: '',
      warehouses: [],
      address: '',
      payment: 'LiqPay / Приват24',
    }
  },
  computed: {
    sortedBasket() {
      let basket = []
      Object.keys(this.basket).forEach((item, index) => {
        const nut = this.basket[item]
        nut.index = index
        basket.push(nut)
      })
      if (this.sort === 'title') {
        basket = basket.sort((a, b) => a.title.localeCompare(b.title))
      }
      if (this.sort === 'value') {
        basket = basket.sort((a, b) => a.value - b.value)
      }
      if (this.sort === 'price') {
        basket = basket.sort((a, b) => a.price - b.price)
      }
      if (this.sort === 'totalPrice') {
        basket = basket.sort((a, b) => a.price * a.value - b.price * b.value)
      }
      return basket
    },
    basket() {
      return this.$store.state.basket
    },
    user() {
      return this.$store.state.user
    },
  },
  watch: {
    basket() {
      this.countPrice()
    },
    async area() {
      const res = await this.$axios.post(
        'https://api.novaposhta.ua/v2.0/json/',
        {
          modelName: 'Address',
          calledMethod: 'getAreas',
          apiKey,
        }
      )
      const areas = res.data.data
      areas.forEach((area) => {
        if ((this.$i18n.locale === 'ua' ? area.Description : area.DescriptionRu) === this.area) {
          this.areaRef = area.Ref
        }
      })
      this.getCities(this.areaRef)
      this.city = ''
      this.warehouse = ''
    },
    async city() {
      const res = await this.$axios.post(
        'https://api.novaposhta.ua/v2.0/json/',
        {
          modelName: 'Address',
          calledMethod: 'getCities',
          methodProperties: {
            AreaRef: this.areaRef,
          },
          apiKey,
        }
      )
      const cities = res.data.data
      cities.forEach((city) => {
        if (city.DescriptionRu === this.city) {
          this.getWarehouses(city.Ref)
        }
      })
      this.warehouse = ''
    },
  },
  mounted() {
    this.countPrice()
    if (this.user) {
      this.name = this.user.name
      this.email = this.user.email
      this.phone = this.user.phone
      this.address = this.user.address.address
      this.getAreas()
    }
  },
  methods: {
    async submitOrder() {
      const id = +new Date()
      let date = new Date().toJSON().slice(0, 10).split('-')
      date = date[2] + '.' + date[1] + '.' + date[0]
      let amount = 0
      this.basket.forEach((item) => {
        amount += item.value
      })
      const price = this.user.sale
        ? (this.price - (this.price / 100) * this.user.sale).toFixed(2)
        : this.price
      const order = {
        id,
        date,
        amount,
        status: 'Отправлено',
        price,
        delivery: this.delivery,
        payment: this.payment,
      }
      await this.$writeData(`/users/${this.user.id}/orders/${id}`, order)
      order.user = {
        name: this.name,
        email: this.email,
        phone: this.phone,
      }
      if (this.delivery === 'post') {
        order.user.address = {
          area: this.area,
          city: this.city,
          warehouse: this.warehouse,
        }
      }
      if (this.delivery === 'courier') {
        order.user.address = this.address
      }
      await this.$writeData(`/orders/${id}`, order)
      this.$store.dispatch('deleteBasketAction')
      this.$router.push((this.$i18n.locale === 'ua' ? '/ua' : '') + '/thanks')
    },
    countPrice() {
      this.price = 0
      this.basket.forEach((item) => {
        if (item.sale) {
          this.price +=
            (item.price - (item.price / 100) * item.discount) * item.value
        } else {
          this.price += item.price * item.value
        }
      })
    },
    async getAreas() {
      const res = await this.$axios.post(
        'https://api.novaposhta.ua/v2.0/json/',
        {
          modelName: 'Address',
          calledMethod: 'getAreas',
          apiKey,
        }
      )
      const areas = res.data.data
      areas.forEach((area) => {
        if (area.DescriptionRu !== 'АРК') {
          this.areas.push(this.$i18n.locale === 'ua' ? area.Description : area.DescriptionRu)
        }
      })
    },
    async getCities(area) {
      const res = await this.$axios.post(
        'https://api.novaposhta.ua/v2.0/json/',
        {
          modelName: 'Address',
          calledMethod: 'getCities',
          methodProperties: {
            AreaRef: area,
          },
          apiKey,
        }
      )
      const cities = res.data.data
      this.cities = []
      cities.forEach((city) => {
        if (!this.cities.includes(city.DescriptionRu)) {
          this.cities.push(this.$i18n.locale === 'ua' ? city.Description : city.DescriptionRu)
        }
      })
    },
    async getWarehouses(city) {
      const res = await this.$axios.post(
        'https://api.novaposhta.ua/v2.0/json/',
        {
          modelName: 'AddressGeneral',
          calledMethod: 'getWarehouses',
          methodProperties: {
            CityRef: city,
          },
          apiKey,
        }
      )
      const warehouses = res.data.data
      this.warehouses = []
      warehouses.forEach((warehouse) =>
        this.warehouses.push(this.$i18n.locale === 'ua' ? warehouse.Description : warehouse.DescriptionRu)
      )
    },
    incrementBasketItemValue(index) {
      this.$store.dispatch('incrementBasketItemValueAction', index)
    },
    decrementBasketItemValue(index) {
      this.$store.dispatch('decrementBasketItemValueAction', index)
    },
  },
}
</script>

<style lang="scss" scoped>
.order {
  padding: 30px 0 90px;
  &__top {
    display: flex;
    gap: 60px;
    line-height: 32px;
    margin-bottom: 40px;
  }
  &__title {
    font-size: 32px;
    font-weight: 800;
  }
  &__manager {
    &-phone {
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      font-size: 14px;
      color: #337d5a;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
  &__basket {
    &-item {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      text-align: center;
      padding: 20px 30px;
      transition: background-color 0.3s;
      & + & {
        border-bottom: 1px solid rgba(#000, 0.08);
        &:hover {
          background-color: rgba(#337d5a, 0.1);
        }
      }
      &:first-child {
        background-color: #fbfbfb;
      }
      &-title {
        text-align: left;
      }
      &-value-num {
        padding: 5px 15px;
        border: 1px solid rgba(#000, 0.15);
      }
    }
    &-increment {
      transform: rotate(270deg);
    }
    &-decrement {
      transform: rotate(90deg);
    }
    &-arrow {
      margin: 0 5px;
      cursor: pointer;
      path {
        transition: fill 0.3s;
      }
      &:hover {
        path {
          fill: #337d5a;
        }
      }
    }
    &-bottom {
      margin-top: 35px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &-price {
      display: flex;
      gap: 10px;
      font-size: 18px;
      font-weight: 700;
      &-num {
        font-family: 'Montserrat', sans-serif;
        color: #337d5a;
      }
    }
    margin-bottom: 60px;
  }
  &__auth {
    text-align: center;
    &-title {
      font-size: 28px;
      font-weight: 800;
      margin-bottom: 20px;
    }
    &-links {
      font-size: 18px;
    }
    &-link {
      color: #337d5a;
      font-weight: 600;
      padding-bottom: 2px;
      border-bottom: 1px solid transparent;
      transition: border-color 0.3s;
      &:hover {
        border-color: #337d5a;
      }
    }
  }
  &__form {
    max-width: 440px;
    &-title {
      font-family: 'Montserrat', sans-serif;
      font-size: 17px;
      font-weight: 700;
      margin-bottom: 25px;
    }
    &-block {
      margin-bottom: 40px;
    }
    &-field {
      margin-bottom: 10px;
    }
    &-btn {
      max-width: 250px;
    }
    &-delivery {
      &-title {
        margin-bottom: 10px;
        padding-left: 25px;
        position: relative;
        cursor: pointer;
        &::before,
        &::after {
          content: '';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          border-radius: 50%;
        }
        &::before {
          left: 0;
          width: 15px;
          height: 15px;
          border: 2px solid #337d5a;
        }
        &::after {
          width: 7px;
          height: 7px;
          left: 4px;
        }
        &.active {
          &::after {
            background-color: #337d5a;
          }
        }
      }
    }
  }
}
.item-title {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-weight: 700;
  &:first-child {
    justify-content: flex-start;
  }
  &-icon {
    path {
      transition: fill 0.3s;
    }
    &.active path {
      fill: #337d5a;
    }
  }
  &:hover {
    .item-title-icon path {
      fill: #337d5a;
    }
  }
}
.item-info {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  user-select: none;
}
@media (max-width: 900px) {
  .order__basket-item {
    grid-template-columns: repeat(3, 1fr);
  }
  .item-title,
  .item-info {
    &:nth-child(4) {
      display: none;
    }
  }
}
@media (max-width: 700px) {
  .order {
    &__top {
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
    &__manager-phone {
      justify-content: center;
    }
    &__basket {
      &-item {
        grid-template-columns: repeat(2, 1fr);
      }
      &-bottom {
        flex-direction: column;
        gap: 10px;
      }
      &-price {
        order: 0;
      }
      &-link {
        order: 1;
      }
    }
  }
  .item-title,
  .item-info {
    &:nth-child(3) {
      display: none;
    }
  }
}
@media (max-width: 500px) {
  .item-info {
    font-size: 12px;
  }
}
</style>