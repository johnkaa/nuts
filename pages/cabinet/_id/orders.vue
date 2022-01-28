<template>
  <div class="orders">
    <div class="orders__items">
      <div class="orders__item">
        <div
          class="orders__item-num orders__item-title"
          @click="filter = 'order'"
        >
          № Заказа<svg
            class="orders__item-title-icon"
            :class="{ active: filter === 'order' }"
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
          class="orders__item-date orders__item-title"
          @click="filter = 'date'"
        >
          Дата<svg
            class="orders__item-title-icon"
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
          class="orders__item-amount orders__item-title"
          @click="filter = 'amount'"
        >
          Кол-во товаров<svg
            class="orders__item-title-icon"
            :class="{ active: filter === 'amount' }"
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
          class="orders__item-status orders__item-title"
          @click="filter = 'status'"
        >
          Статус<svg
            class="orders__item-title-icon"
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
          class="orders__item-price orders__item-title"
          @click="filter = 'price'"
        >
          Стоимость<svg
            class="orders__item-title-icon"
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
        <div class="orders__item-functions orders__item-title">Функции</div>
      </div>
      <div class="orders__item">
        <my-popup
          v-if="showInfo"
          class="orders__item-popup"
          @close="showInfo = false"
        >
          <div class="orders__item-popup__inner">
            <div class="orders__item-popup__title">Информация о заказе</div>
            <div class="orders__item-popup__items">
              <div class="orders__item-popup__item">
                <span class="orders__item-popup__item-title">№ Заказа:</span>
                <span class="orders__item-popup__item-info">0</span>
              </div>
              <div class="orders__item-popup__item">
                <span class="orders__item-popup__item-title">Дата:</span>
                <span class="orders__item-popup__item-info">03.04.1607</span>
              </div>
              <div class="orders__item-popup__item">
                <span class="orders__item-popup__item-title"
                  >Кол-во товаров:</span
                >
                <span class="orders__item-popup__item-info">13</span>
              </div>
              <div class="orders__item-popup__item">
                <span class="orders__item-popup__item-title">Статус:</span>
                <span class="orders__item-popup__item-info">Отправлено</span>
              </div>
              <div class="orders__item-popup__item">
                <span class="orders__item-popup__item-title">Стоимость:</span>
                <span class="orders__item-popup__item-info">1000 грн.</span>
              </div>
            </div>
          </div>
        </my-popup>
        <div class="orders__item-num orders__item-info">0</div>
        <div class="orders__item-date orders__item-info">03.04.1607</div>
        <div class="orders__item-amount orders__item-info">13</div>
        <div class="orders__item-status orders__item-info">Отправлено</div>
        <div class="orders__item-price orders__item-info">1000 грн.</div>
        <div class="orders__item-functions orders__item-info">
          <div class="view-icon__wrapper" @click="showInfo = true">
            <svg
              class="orders__item-functions-icon view-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
          <div class="copy-icon__wrapper" @click="copy(0)">
            <svg
              class="orders__item-functions-icon copy-icon"
              width="16"
              height="21"
              viewBox="0 0 16 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0C0.00513809 0.0974598 0.0102762 0.189791 0.0102762 0.287251C0.0102762 6.25794 0.0102762 12.2235 0.0102762 18.1942C0.0102762 18.2865 0.0102762 18.384 0.0102762 18.502C0.827232 18.502 1.63391 18.502 2.46114 18.502C2.46114 19.3432 2.46114 20.169 2.46114 21C6.9878 21 11.4888 21 16 21C16 14.8447 16 8.6893 16 2.51344C15.1985 2.51344 14.3969 2.51344 13.5645 2.51344C13.5645 1.66195 13.5645 0.830973 13.5645 0C9.04303 0 4.52152 0 0 0ZM1.25883 17.2709C1.25883 11.9157 1.25883 6.58109 1.25883 1.24646C4.95311 1.24646 8.63712 1.24646 12.316 1.24646C12.316 6.59648 12.316 11.926 12.316 17.2709C8.62685 17.2709 4.94798 17.2709 1.25883 17.2709ZM14.772 3.73937C14.772 9.09966 14.772 14.4343 14.772 19.7741C11.0777 19.7741 7.40398 19.7741 3.71997 19.7741C3.71997 19.3534 3.71997 18.938 3.71997 18.502C7.00321 18.502 10.2762 18.502 13.5697 18.502C13.5697 13.5674 13.5697 8.6534 13.5697 3.73937C13.9807 3.73937 14.3712 3.73937 14.772 3.73937Z"
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
      filter: 'order',
      showInfo: false,
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
  },
}
</script>

<style lang="scss" scoped>
.orders {
  &__item {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(6, 1fr);
    text-align: center;
    width: 100%;
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
        .orders__item-title-icon path {
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
    &-functions {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 13px;
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
.view-icon,
.copy-icon {
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
      opacity: 0;
      transition: opacity 0.3s;
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
        opacity: 1;
      }
    }
  }
}
.copy-icon__wrapper {
  &::before {
    content: 'Скопировать № заказа';
  }
}
@media (max-width: 1300px) {
  .orders__item {
    grid-template-columns: repeat(5, 1fr);
    &-title,
    &-info {
      &:nth-child(3) {
        display: none;
      }
    }
  }
}
@media (max-width: 900px) {
  .orders__item {
    grid-template-columns: repeat(4, 1fr);
    &-title,
    &-info {
      &:nth-child(4) {
        display: none;
      }
    }
  }
}
@media (max-width: 600px) {
  .orders__item {
    grid-template-columns: repeat(3, 1fr);
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
@media (max-width: 400px) {
  .orders__item-title {
    font-size: 14px;
  }
}
</style>