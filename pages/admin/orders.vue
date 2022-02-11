<template>
  <div class="orders">
    <h2 class="orders__title">Заказы</h2>
    <vs-popup class="holamundo" title="Информация о заказе" :active.sync="popupActivo">
      <div class="orders-popup__inner">
        <div class="orders-popup__title">Информация о заказе</div>
        <div class="orders-popup__items">
          <div class="orders-popup__item">
            <span class="orders-popup__item-title">№ Заказа:</span>
            <span class="orders-popup__item-info">{{ order.id }}</span>
          </div>
          <div class="orders-popup__item">
            <span class="orders-popup__item-title">Дата:</span>
            <span class="orders-popup__item-info">{{ order.date }}</span>
          </div>
          <div class="orders-popup__item">
                <span class="orders-popup__item-title"
                >Кол-во товаров:</span
                >
            <span class="orders-popup__item-info">{{ order.amount }}</span>
          </div>
          <div class="orders-popup__item">
            <span class="orders-popup__item-title">Статус:</span>
            <span class="orders-popup__item-info">{{ order.status }}</span>
          </div>
          <div class="orders-popup__item">
            <span class="orders-popup__item-title">Доставка:</span>
            <span class="orders-popup__item-info">
              <span v-if="order.delivery === 'post'">Почта</span>
              <span v-else-if="order.delivery === 'courier'">Курьер</span>
              <span v-else>Самовывоз</span>
            </span>
          </div>
          <div class="orders-popup__item">
            <span class="orders-popup__item-title">Стоимость:</span>
            <span class="orders-popup__item-info">{{ order.price }} грн.</span>
          </div>
        </div>
        <div class="orders-popup__title">Информация о пользователе</div>
        <div v-if="order.user" class="orders-popup__items">
          <div class="orders-popup__item">
            <span class="orders-popup__item-title">Имя:</span>
            <span class="orders-popup__item-info">{{ order.user.name }}</span>
          </div>
          <div class="orders-popup__item">
            <span class="orders-popup__item-title">Email:</span>
            <span class="orders-popup__item-info">{{ order.user.email }}</span>
          </div>
          <div class="orders-popup__item">
            <span class="orders-popup__item-title">Телефон:</span>
            <span class="orders-popup__item-info">{{ order.user.phone }}</span>
          </div>
          </div>
          <div v-if="order.delivery !== 'self'" class="orders-popup__title">Адрес заказа</div>
        <div v-if="order.user && order.user.address" class="orders-popup__items">
          <template v-if="order.delivery === 'post'">
            <div class="orders-popup__item">
              <span class="orders-popup__item-title">Область:</span>
              <span class="orders-popup__item-info">{{ order.user.address.area }}</span>
            </div>
            <div class="orders-popup__item">
              <span class="orders-popup__item-title">Город:</span>
              <span class="orders-popup__item-info">{{ order.user.address.city }}</span>
            </div>
            <div class="orders-popup__item">
              <span class="orders-popup__item-title">Отделение:</span>
              <span class="orders-popup__item-info">{{ order.user.address.warehouse }}</span>
            </div>
          </template>
          <template v-else-if="order.delivery === 'courier'">
            <div class="orders-popup__item">
              <span class="orders-popup__item-title">Адрес:</span>
              <span class="orders-popup__item-info">{{ order.user.address }}</span>
            </div>
          </template>
          <template v-else>

          </template>
        </div>
      </div>
    </vs-popup>
    <vs-table class="orders__table" :data="orders">
      <template slot="thead">
        <vs-th class="orders__item-title">
          №
        </vs-th>
        <vs-th class="orders__item-title">
          Дата
        </vs-th>
        <vs-th class="orders__item-title">
          Email
        </vs-th>
        <vs-th class="orders__item-title">
          Статус
        </vs-th>
        <vs-th class="orders__item-title">
          Цена
        </vs-th>
        <vs-th class="orders__item-title"></vs-th>
      </template>
      <template slot-scope="{data}">
        <vs-tr v-for="order in data" :key="order.id">
          <vs-td :data="order.id">
            {{ order.id }}
          </vs-td>

          <vs-td :data="order.date">
            {{ order.date }}
          </vs-td>

          <vs-td :data="order.user.email">
            {{ order.user.email }}
          </vs-td>

          <vs-td :data="order.status">
            {{ order.status }}
          </vs-td>

          <vs-td :data="order.price">
            {{ order.price }}
          </vs-td>

          <vs-td>
            <svg
              class="view-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              @click="showDetails(order)"
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
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
export default {
  async asyncData({ $readData }) {
    const ordersObj = await $readData('/orders')
    const orders = []
    Object.keys(ordersObj).forEach(order => orders.push(ordersObj[order]))
    return { orders }
  },
  data() {
    return {
      popupActivo: false,
      order: {}
    }
  },
  methods: {
    showDetails(order) {
      this.popupActivo = true
      this.order = order
    }
  },
}
</script>

<style lang="scss" scoped>
.orders {
  &__title {
    font-size: 32px;
    text-align: center;
    margin-bottom: 30px;
  }
  &-popup {
    &__inner {
      background-color: #fff;
      border-radius: 5px;
      padding: 20px 50px 50px;
    }
    &__title {
      font-size: 32px;
      font-weight: 600;
      margin: 30px 0;
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
  &__item-title {
    padding: 10px;
    text-align: center;
    background-color: #dddddd;
 }
}
.view-icon {
  position: relative;
  top: 7px;
  path {
    transition: fill 0.3s;
  }
  &:hover {
    cursor: pointer;
    path {
      fill: #337d5a;
    }
  }
}
@media (max-width: 500px) {
  .orders-popup__title {
    font-size: 27px;
  }
}
</style>
