<template>
  <div class="transactions">
    <div class="transactions__items">
      <div class="transactions__item">
        <div
          class="transactions__item-date transactions__item-title"
          @click="filter = 'date'"
        >
          {{ $t('historyTransactions.date') }}<svg
            class="transactions__item-title-icon"
            :class="{ active: filter === 'date' }"
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
          class="transactions__item-status transactions__item-title"
          @click="filter = 'status'"
        >
          Статус<svg
            class="transactions__item-title-icon"
            :class="{ active: filter === 'status' }"
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
          class="transactions__item-sum transactions__item-title"
          @click="filter = 'price'"
        >
          Сумма<svg
            class="transactions__item-title-icon"
            :class="{ active: filter === 'price' }"
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
      <div v-for="order in sortedOrders" :key="order.id" class="transactions__item">
        <my-popup
          v-if="showId === order.id"
          class="transactions__item-popup"
          @close="showDetails(null)"
        >
          <div class="transactions__item-popup__inner">
            <div class="transactions__item-popup__title">
              {{ $t('historyOrders.info') }}
            </div>
            <div class="transactions__item-popup__items">
              <div class="transactions__item-popup__item">
                <span class="transactions__item-popup__item-title"
                  >{{ $t('historyOrders.id') }}:</span
                >
                <span class="transactions__item-popup__item-info">{{ order.id }}</span>
              </div>
              <div class="transactions__item-popup__item">
                <span class="transactions__item-popup__item-title">Дата:</span>
                <span class="transactions__item-popup__item-info"
                  >{{ order.date }}</span
                >
              </div>
              <div class="transactions__item-popup__item">
                <span class="transactions__item-popup__item-title"
                  >{{ $t('historyOrders.amount') }}:</span
                >
                <span class="transactions__item-popup__item-info">{{ order.amount }}</span>
              </div>
              <div class="transactions__item-popup__item">
                <span class="transactions__item-popup__item-title"
                  >Статус:</span
                >
                <span class="transactions__item-popup__item-info"
                  >{{ order.status }}</span
                >
              </div>
              <div class="transactions__item-popup__item">
                <span class="transactions__item-popup__item-title"
                  >{{ $t('historyOrders.price') }}:</span
                >
                <span class="transactions__item-popup__item-info"
                  >{{ order.price }} грн.</span
                >
              </div>
            </div>
          </div>
        </my-popup>
        <div class="transactions__item-date transactions__item-info">
          {{ order.date }}
        </div>
        <div class="transactions__item-status transactions__item-info">
          {{ $t('historyTransactions.success') }}
        </div>
        <div class="transactions__item-sum transactions__item-info">
          {{ order.price }} грн.
          <div class="view-icon__wrapper">
            <svg
              class="transactions__item-functions-icon view-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              @click="showDetails(order.id)"
            >
              <path
                d="M23.8475 12.4668C23.6331 12.7601 18.5245 19.6483 11.9999 19.6483C5.47529 19.6483 0.36647 12.7601 0.152297 12.4671C-0.0507657 12.1888 -0.0507657 11.8114 0.152297 11.5332C0.36647 11.2399 5.47529 4.35165 11.9999 4.35165C18.5245 4.35165 23.6331 11.2399 23.8475 11.533C24.0508 11.8112 24.0508 12.1888 23.8475 12.4668ZM11.9999 5.93406C7.19383 5.93406 3.03127 10.5059 1.79907 12.0005C3.02968 13.4965 7.18352 18.0659 11.9999 18.0659C16.8057 18.0659 20.968 13.4949 22.2007 11.9995C20.9701 10.5036 16.8163 5.93406 11.9999 5.93406Z"
                fill="#8A8A8A"
              />
              <path
                d="M11.9992 16.7473C9.38163 16.7473 7.25195 14.6176 7.25195 12C7.25195 9.38238 9.38163 7.2527 11.9992 7.2527C14.6168 7.2527 16.7465 9.38238 16.7465 12C16.7465 14.6176 14.6168 16.7473 11.9992 16.7473ZM11.9992 8.83516C10.2541 8.83516 8.83441 10.2549 8.83441 12C8.83441 13.7451 10.2541 15.1648 11.9992 15.1648C13.7443 15.1648 15.164 13.7451 15.164 12C15.164 10.2549 13.7444 8.83516 11.9992 8.83516Z"
                fill="#8A8A8A"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filter: 'added',
      showId: ''
    }
  },
  computed: {
    orders() {
      const orders = []
      if(this.$store.state.user) {
        const orderObj = this.$store.state.user.orders
        Object.keys(orderObj).forEach(item => orders.push(orderObj[item]))
      }
      return orders
    },
    sortedOrders() {
      let orders = this.orders
      if(this.filter === 'date') {
        orders = orders.sort((a, b) => a.id - b.id)
      }
      if(this.filter === 'status') {
        orders = orders.sort((a,b) => a.status.localeCompare(b.status))
      }
      if(this.filter === 'price') {
        orders = orders.sort((a, b) => a.price - b.price)
      }
      return orders
    }
  },
  methods: {
    copy(order) {
      navigator.clipboard
        .writeText(order)
        .then(() => {
          this.$toasted.success('Номер заказа скопирован в буфер обмена.')
        })
        .catch((e) => {
          this.$toasted.error(e)
        })
    },
    showDetails(id) {
      this.showId = id
    }
  },
}
</script>

<style lang="scss" scoped>
.transactions {
  &__item {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
    grid-column: 1;
    &:first-child {
      background-color: #fbfbfb;
    }
    & + & {
      &:hover {
        background-color: rgba(#337d5a, 0.1);
      }
    }
    &-title {
      line-height: 32px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      padding: 10px;
      cursor: pointer;
      &-icon path {
        transition: fill 0.3s;
      }
      &-icon.active path {
        fill: #337d5a;
      }
      &:hover {
        .transactions__item-title-icon path {
          fill: #337d5a;
        }
      }
    }
    &-info {
      padding: 10px;
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
      font-weight: 500;
    }
    &-sum {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    &-popup {
      &__inner {
        background-color: #fff;
        border-radius: 5px;
        padding: 50px;
      }
      &__title {
        font-size: 32px;
        font-weight: 600;
        margin-bottom: 30px;
      }
      &__item {
        text-align: left;
        border: 1px solid #8a8a8a;
        padding: 10px;
        & + & {
          border-top: none;
        }
        &-title {
          font-weight: 600;
        }
        &-info {
          font-family: 'Montserrat', sans-serif;
        }
      }
    }
  }
}
.view-icon {
  path {
    transition: fill 0.3s;
  }
  &:hover {
    cursor: pointer;
    path {
      fill: #337d5a;
    }
  }
  &__wrapper {
    position: relative;
    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      display: none;
    }
    &::before {
      content: 'Посмотреть заказ';
      font-size: 13px;
      line-height: 14px;
      font-weight: 700;
      color: #fff;
      background-color: #337d5a;
      padding: 10px;
      top: -57px;
    }
    &::after {
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid #337d5a;
      top: -10px;
    }
    &:hover {
      &::before,
      &::after {
        display: block;
      }
    }
  }
}
@media (max-width: 500px) {
  .transactions__item {
    grid-template-columns: repeat(2, 1fr);
    &-title,
    &-info {
      &:nth-child(2) {
        display: none;
      }
    }
    &-popup__title {
      font-size: 18px;
      font-weight: 500;
    }
  }
}
</style>