<template>
  <header class="header">
    <my-popup
      v-if="showCallbackModal"
      class="callback-modal"
      @close="showCallbackModal = false"
    >
      <validation-observer
        v-slot="{ invalid }"
        class="callback-modal__form"
        tag="form"
        name="callback"
        @submit.prevent="callbackSubmit"
      >
        <h2 class="callback-modal__title">Введите ваш номер телефона</h2>
        <validation-provider name="phone" rules="required">
          <div slot-scope="{ errors }" class="callback-modal__field">
            <my-input
              v-model="callbackPhone"
              class="callback-modal__input"
              placeholder="Телефон*"
              :errors="errors"
            />
          </div>
        </validation-provider>
        <my-button class="callback-modal__btn" :disabled="invalid"
          >Подтвердить</my-button
        >
      </validation-observer>
    </my-popup>
    <div class="header__top">
      <div class="container">
        <div class="header__top-inner">
          <div class="header__sm">
            <a class="header__sm-item" href="https://facebook.com">
              <svg
                class="header__sm-item-img"
                width="7"
                height="13"
                viewBox="0 0 7 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.426261 6.9238H1.85127V12.7903C1.85127 12.9061 1.94512 13 2.06095 13H4.4771C4.59293 13 4.68678 12.9061 4.68678 12.7903V6.95144H6.32495C6.43146 6.95144 6.52108 6.87151 6.53324 6.7657L6.78204 4.60594C6.78888 4.54652 6.77005 4.48701 6.7303 4.44244C6.6905 4.39782 6.63355 4.37228 6.57379 4.37228H4.68686V3.01843C4.68686 2.61032 4.90661 2.40336 5.34005 2.40336C5.40182 2.40336 6.57379 2.40336 6.57379 2.40336C6.68962 2.40336 6.78347 2.30947 6.78347 2.19369V0.211229C6.78347 0.0954032 6.68962 0.00155161 6.57379 0.00155161H4.87352C4.86153 0.000964516 4.8349 0 4.79564 0C4.50063 0 3.47518 0.0579128 2.66515 0.803106C1.76765 1.6289 1.89241 2.61766 1.92222 2.78909V4.37224H0.426261C0.310435 4.37224 0.216583 4.46609 0.216583 4.58191V6.71408C0.216583 6.82991 0.310435 6.9238 0.426261 6.9238Z"
                />
              </svg>
            </a>
            <a class="header__sm-item" href="https://instagram.com">
              <svg
                class="header__sm-item-img"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.48744 0H3.51256C1.57574 0 0 1.57574 0 3.51256V9.48744C0 11.4243 1.57574 13 3.51256 13H9.48744C11.4243 13 13 11.4243 13 9.48744V3.51256C13 1.57574 11.4243 0 9.48744 0ZM11.9497 9.48744C11.9497 10.8451 10.8452 11.9497 9.48744 11.9497H3.51256C2.15485 11.9497 1.05026 10.8452 1.05026 9.48744V3.51256C1.05026 2.15485 2.15483 1.05026 3.51256 1.05026H9.48744C10.8451 1.05026 11.9497 2.15483 11.9497 3.51256V9.48744Z"
                />
                <path
                  d="M9.40942 6.04654C9.317 5.42327 9.03265 4.85838 8.58712 4.41285C8.14159 3.96735 7.5767 3.68297 6.95347 3.59058C6.6697 3.5485 6.382 3.5485 6.09826 3.59058C5.32801 3.70481 4.64838 4.11212 4.18452 4.73752C3.72065 5.36292 3.52807 6.13154 3.6423 6.90174C3.75653 7.67197 4.16385 8.3516 4.78924 8.81548C5.29696 9.19205 5.89897 9.3898 6.51969 9.3898C6.66358 9.3898 6.80851 9.37918 6.95344 9.35768C7.72369 9.24344 8.40332 8.83613 8.86718 8.21073C9.33107 7.58536 9.52366 6.81676 9.40942 6.04654ZM6.79939 8.31877C6.30669 8.39194 5.815 8.26867 5.41492 7.97193C5.01484 7.67519 4.75428 7.2404 4.68123 6.7477C4.60816 6.25499 4.73133 5.7633 5.02807 5.36322C5.32483 4.96314 5.7596 4.70258 6.25233 4.62951C6.34307 4.61605 6.43446 4.60932 6.52584 4.60932C6.61722 4.60932 6.70862 4.61605 6.79937 4.62953C7.61773 4.75088 8.24912 5.38224 8.37049 6.20063C8.52131 7.21773 7.81654 8.16795 6.79939 8.31877Z"
                />
                <path
                  d="M10.1575 2.84248C10.0597 2.7447 9.92435 2.68866 9.78617 2.68866C9.648 2.68866 9.51264 2.74467 9.41483 2.84248C9.31705 2.94028 9.26102 3.07541 9.26102 3.21381C9.26102 3.35222 9.31705 3.48735 9.41483 3.58515C9.51264 3.68293 9.648 3.73897 9.78617 3.73897C9.92435 3.73897 10.0597 3.68296 10.1575 3.58515C10.2553 3.48735 10.3113 3.35199 10.3113 3.21381C10.3113 3.07561 10.2553 2.94026 10.1575 2.84248Z"
                />
              </svg>
            </a>
            <a class="header__sm-item" href="https://youtube.com">
              <svg
                class="header__sm-item-img"
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3764 10.6635C14.7988 11.35 13.7325 11.6301 11.6961 11.6301H4.30379C2.22075 11.6301 1.13636 11.3319 0.560981 10.601C0 9.88834 0 8.83827 0 7.38496V4.61494C0 1.79941 0.6656 0.369885 4.30379 0.369885H11.6961C13.4621 0.369885 14.4407 0.617008 15.0738 1.22289C15.723 1.84421 16 2.85866 16 4.61494V7.38496C16 8.9176 15.9566 9.97386 15.3764 10.6635ZM10.2721 5.61752L6.91525 3.86315C6.84021 3.82392 6.75814 3.80447 6.67618 3.80447C6.58338 3.80447 6.49079 3.82945 6.40877 3.8791C6.25435 3.97267 6.16005 4.14005 6.16005 4.32059V7.81809C6.16005 7.99832 6.25409 8.16555 6.40821 8.25918C6.56237 8.3528 6.75412 8.3592 6.91406 8.2761L10.2709 6.53303C10.4417 6.44436 10.5489 6.26805 10.5492 6.07569C10.5494 5.88318 10.4426 5.70661 10.2721 5.61752Z"
                />
              </svg>
            </a>
          </div>
          <a class="header__top-phone" href="tel:380447505011"
            ><img
              class="header__top-phone-icon"
              src="/images/icons/phone.svg"
              alt=""
            />
            <p>
              <span class="header__top-phone_green">+38 (044)</span> 750-50-11
            </p></a
          >
          <div class="header__top-callback" @click="showCallbackModal = true">
            Заказать звонок
          </div>
          <div class="header__sale" :class="{ auth: getUser }">
            Ваша персональная скидка - 5%
          </div>
          <div v-if="!$fire.auth.currentUser" class="header__auth">
            <nuxt-link class="header__auth-link" to="/auth/login"
              ><img
                class="header__auth-img"
                src="/images/icons/user.svg"
                alt=""
              />Вход</nuxt-link
            >
            <nuxt-link class="header__auth-link" to="/auth/register"
              >Регистрация</nuxt-link
            >
          </div>
          <div v-if="getUser" class="header__admin">
            <my-button
              v-if="getUser.id === '9qQGy4TbmBdtHX1wMOUDbjzCmr83'"
              class="header__admin-btn"
            >
              <nuxt-link to="/admin/stats">Админка</nuxt-link>
            </my-button>
          </div>
          <nuxt-link
            v-if="getUser"
            class="header__user"
            :to="`/cabinet/${getUser.id}/orders`"
            ><img
              class="header__auth-img"
              src="/images/icons/user.svg"
              alt=""
            />{{ getUser.name }}</nuxt-link
          >
          <my-button v-if="getUser" class="header__logout" @click="logout">Выйти</my-button>
          <div class="header__lang">
            Ru<img src="/images/icons/arrow-down.svg" alt="" />
            <div class="header__lang-select">
              <div class="header__lang-select-item">Ru</div>
              <div class="header__lang-select-item">Ua</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header__main">
      <div class="container">
        <div class="header__inner">
          <div class="header__burger burger" :class="{ active: showBurger }">
            <div
              class="header__burger-btn burger__btn"
              @click="showBurger = !showBurger"
            >
              <span></span>
            </div>
            <div class="header__burger-menu burger__menu">
              <div class="burger__menu-top">
                <nuxt-link class="logo" to="/"
                  ><img src="/images/logo.svg" alt=""
                /></nuxt-link>
              </div>
              <div class="burger__menu-middle">
                <div v-if="!$fire.auth.currentUser" class="burger__auth">
                  <nuxt-link class="header__auth-link" to="/auth/login"
                    ><img
                      class="header__auth-img"
                      src="/images/icons/user.svg"
                      alt=""
                    />Вход</nuxt-link
                  >
                  <nuxt-link class="header__auth-link" to="/auth/register"
                    >Регистрация</nuxt-link
                  >
                </div>
                <div class="burger__user-panel">
                  <div v-if="getUser" class="burger__admin">
                    <my-button
                      v-if="getUser.id === '9qQGy4TbmBdtHX1wMOUDbjzCmr83'"
                      class="burger__admin-btn"
                    >
                      <nuxt-link to="/admin/stats">Админка</nuxt-link>
                    </my-button>
                  </div>
                  <nuxt-link
                    v-if="getUser"
                    class="burger__user"
                    :to="`/cabinet/${getUser.id}/orders`"
                    ><img
                      class="burger__auth-img"
                      src="/images/icons/user.svg"
                      alt=""
                    />{{ getUser.name }}</nuxt-link
                  >
                  <my-button v-if="getUser" class="burger__logout" @click="logout"
                    >Выйти</my-button
                  >
                </div>
                <div class="burger__sm">
                  <a class="header__sm-item" href="https://facebook.com">
                    <svg
                      class="header__sm-item-img"
                      width="7"
                      height="13"
                      viewBox="0 0 7 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.426261 6.9238H1.85127V12.7903C1.85127 12.9061 1.94512 13 2.06095 13H4.4771C4.59293 13 4.68678 12.9061 4.68678 12.7903V6.95144H6.32495C6.43146 6.95144 6.52108 6.87151 6.53324 6.7657L6.78204 4.60594C6.78888 4.54652 6.77005 4.48701 6.7303 4.44244C6.6905 4.39782 6.63355 4.37228 6.57379 4.37228H4.68686V3.01843C4.68686 2.61032 4.90661 2.40336 5.34005 2.40336C5.40182 2.40336 6.57379 2.40336 6.57379 2.40336C6.68962 2.40336 6.78347 2.30947 6.78347 2.19369V0.211229C6.78347 0.0954032 6.68962 0.00155161 6.57379 0.00155161H4.87352C4.86153 0.000964516 4.8349 0 4.79564 0C4.50063 0 3.47518 0.0579128 2.66515 0.803106C1.76765 1.6289 1.89241 2.61766 1.92222 2.78909V4.37224H0.426261C0.310435 4.37224 0.216583 4.46609 0.216583 4.58191V6.71408C0.216583 6.82991 0.310435 6.9238 0.426261 6.9238Z"
                      />
                    </svg>
                  </a>
                  <a class="header__sm-item" href="https://instagram.com">
                    <svg
                      class="header__sm-item-img"
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.48744 0H3.51256C1.57574 0 0 1.57574 0 3.51256V9.48744C0 11.4243 1.57574 13 3.51256 13H9.48744C11.4243 13 13 11.4243 13 9.48744V3.51256C13 1.57574 11.4243 0 9.48744 0ZM11.9497 9.48744C11.9497 10.8451 10.8452 11.9497 9.48744 11.9497H3.51256C2.15485 11.9497 1.05026 10.8452 1.05026 9.48744V3.51256C1.05026 2.15485 2.15483 1.05026 3.51256 1.05026H9.48744C10.8451 1.05026 11.9497 2.15483 11.9497 3.51256V9.48744Z"
                      />
                      <path
                        d="M9.40942 6.04654C9.317 5.42327 9.03265 4.85838 8.58712 4.41285C8.14159 3.96735 7.5767 3.68297 6.95347 3.59058C6.6697 3.5485 6.382 3.5485 6.09826 3.59058C5.32801 3.70481 4.64838 4.11212 4.18452 4.73752C3.72065 5.36292 3.52807 6.13154 3.6423 6.90174C3.75653 7.67197 4.16385 8.3516 4.78924 8.81548C5.29696 9.19205 5.89897 9.3898 6.51969 9.3898C6.66358 9.3898 6.80851 9.37918 6.95344 9.35768C7.72369 9.24344 8.40332 8.83613 8.86718 8.21073C9.33107 7.58536 9.52366 6.81676 9.40942 6.04654ZM6.79939 8.31877C6.30669 8.39194 5.815 8.26867 5.41492 7.97193C5.01484 7.67519 4.75428 7.2404 4.68123 6.7477C4.60816 6.25499 4.73133 5.7633 5.02807 5.36322C5.32483 4.96314 5.7596 4.70258 6.25233 4.62951C6.34307 4.61605 6.43446 4.60932 6.52584 4.60932C6.61722 4.60932 6.70862 4.61605 6.79937 4.62953C7.61773 4.75088 8.24912 5.38224 8.37049 6.20063C8.52131 7.21773 7.81654 8.16795 6.79939 8.31877Z"
                      />
                      <path
                        d="M10.1575 2.84248C10.0597 2.7447 9.92435 2.68866 9.78617 2.68866C9.648 2.68866 9.51264 2.74467 9.41483 2.84248C9.31705 2.94028 9.26102 3.07541 9.26102 3.21381C9.26102 3.35222 9.31705 3.48735 9.41483 3.58515C9.51264 3.68293 9.648 3.73897 9.78617 3.73897C9.92435 3.73897 10.0597 3.68296 10.1575 3.58515C10.2553 3.48735 10.3113 3.35199 10.3113 3.21381C10.3113 3.07561 10.2553 2.94026 10.1575 2.84248Z"
                      />
                    </svg>
                  </a>
                  <a class="header__sm-item" href="https://youtube.com">
                    <svg
                      class="header__sm-item-img"
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.3764 10.6635C14.7988 11.35 13.7325 11.6301 11.6961 11.6301H4.30379C2.22075 11.6301 1.13636 11.3319 0.560981 10.601C0 9.88834 0 8.83827 0 7.38496V4.61494C0 1.79941 0.6656 0.369885 4.30379 0.369885H11.6961C13.4621 0.369885 14.4407 0.617008 15.0738 1.22289C15.723 1.84421 16 2.85866 16 4.61494V7.38496C16 8.9176 15.9566 9.97386 15.3764 10.6635ZM10.2721 5.61752L6.91525 3.86315C6.84021 3.82392 6.75814 3.80447 6.67618 3.80447C6.58338 3.80447 6.49079 3.82945 6.40877 3.8791C6.25435 3.97267 6.16005 4.14005 6.16005 4.32059V7.81809C6.16005 7.99832 6.25409 8.16555 6.40821 8.25918C6.56237 8.3528 6.75412 8.3592 6.91406 8.2761L10.2709 6.53303C10.4417 6.44436 10.5489 6.26805 10.5492 6.07569C10.5494 5.88318 10.4426 5.70661 10.2721 5.61752Z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <ul class="burger__menu-list">
                <li class="burger__menu-list-item">
                  <nuxt-link class="burger__menu-list-link" to="/shop"
                    >Магазин</nuxt-link
                  >
                </li>
                <li class="burger__menu-list-item">
                  <nuxt-link class="burger__menu-list-link" to="/about"
                    >О производстве</nuxt-link
                  >
                </li>
                <li class="burger__menu-list-item">
                  <nuxt-link class="burger__menu-list-link" to="/delivery"
                    >Оплата и доставка</nuxt-link
                  >
                </li>
                <li class="burger__menu-list-item">
                  <nuxt-link class="burger__menu-list-link" to="/corporate"
                    >Оптовым и корпоративным клиетам</nuxt-link
                  >
                </li>
                <li class="burger__menu-list-item">
                  <nuxt-link class="burger__menu-list-link" to="/news"
                    >Новости и статьи</nuxt-link
                  >
                </li>
                <li class="burger__menu-list-item">
                  <nuxt-link class="burger__menu-list-link" to="/gallery"
                    >Галерея</nuxt-link
                  >
                </li>
              </ul>
            </div>
          </div>
          <nuxt-link class="logo" to="/"
            ><img src="/images/logo.svg" alt=""
          /></nuxt-link>
          <div class="header__contacts">
            <a class="header__contacts-item" href="#"
              ><img src="/images/icons/viber.svg" alt=""
            /></a>
            <a class="header__contacts-item" href="#"
              ><img src="/images/icons/telegram.svg" alt=""
            /></a>
            <a class="header__contacts-item" href="#"
              ><img src="/images/icons/whatsapp.svg" alt=""
            /></a>
            <div class="header__contacts-item">
              <a class="header__contacts-phone" href="tel:380447505011"
                ><span>+38 (044)</span> 750-50-11</a
              >
              <a class="header__contacts-phone" href="tel:380977755051"
                ><span>+38 (097)</span> 775-50-51</a
              >
            </div>
          </div>
          <div class="header__callback">
            <my-button
              class="header__callback-btn"
              @click="showCallbackModal = true"
              >Заказать звонок</my-button
            >
            <div class="header__callback-text">
              Ждем Вашего звонка ежедевно с 9 до 18
            </div>
          </div>
          <div class="header__basket">
            <img src="/images/icons/basket.svg" alt="" /><span
              class="header__basket-num"
              >0</span
            >
          </div>
        </div>
      </div>
    </div>
    <nav class="menu">
      <div class="container">
        <div class="header__sale mobile">Ваша персональная скидка - 5%</div>
        <ul class="menu__list">
          <li class="menu__list-item">
            <nuxt-link class="menu__list-link" to="/shop">Магазин</nuxt-link>
          </li>
          <li class="menu__list-item">
            <nuxt-link class="menu__list-link" to="/about">О производстве</nuxt-link>
          </li>
          <li class="menu__list-item">
            <nuxt-link class="menu__list-link" to="/delivery"
              >Оплата и доставка</nuxt-link
            >
          </li>
          <li class="menu__list-item">
            <nuxt-link class="menu__list-link" to="/corporate"
              >Оптовым и корпоративным клиетам</nuxt-link
            >
          </li>
          <li class="menu__list-item">
            <nuxt-link class="menu__list-link" to="/news"
              >Новости и статьи</nuxt-link
            >
          </li>
          <li class="menu__list-item">
            <nuxt-link class="menu__list-link" to="/gallery">Галерея</nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      showBurger: false,
      callbackPhone: '',
      showCallbackModal: false,
    }
  },
  computed: mapGetters(['getUser']),
  watch: {
    $route() {
      this.showBurger = false
    },
  },
  methods: {
    async logout() {
      await this.$fire.auth.signOut()
      this.$router.push('/auth/login')
      this.$store.dispatch('getUserAction', null)
    },
    callbackSubmit() {
      this.$writeData(`callbackPhones/${+new Date()}`, this.callbackPhone)
      this.showCallbackModal = false
      this.$toasted.success('Ваша заявка отправлена на обработку.')
    },
  },
}
</script>

<style lang="scss">
.header {
  &__top {
    background-color: #f5f5f5;
    padding: 10px 0;
    &-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &-phone,
    &-callback {
      display: none;
    }
  }
  &__sm {
    display: flex;
    align-items: center;
    gap: 20px;
    &-item-img {
      fill: #323232;
      transition: fill 0.3s;
      &:hover {
        fill: #93b474;
      }
    }
  }
  &__sale {
    font-family: 'Montserrat', sans-serif;
    color: #337d5a;
    font-size: 14px;
    font-weight: 600;
    margin-left: auto;
    &.auth {
      margin-right: auto;
    }
    &.mobile {
      display: none;
    }
  }
  &__auth {
    display: flex;
    align-items: center;
    gap: 25px;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 2%;
    color: #323232;
    margin-left: auto;
    &-link {
      display: flex;
      gap: 5px;
      padding-bottom: 2px;
      border-bottom: 2px solid transparent;
      transition: border-color 0.5s;
      &:hover {
        border-color: #93b474;
      }
    }
  }
  &__admin {
    margin-right: 15px;
    &-btn {
      padding: 5px 10px !important;
    }
  }
  &__user {
    border-bottom: 1px solid transparent;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: all 0.3s;
    &:hover {
      border-color: #337d5a;
      color: #337d5a;
    }
  }
  &__logout {
    max-width: 100px;
    margin-left: 40px;
    padding: 5px 10px !important;
  }
  &__lang {
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 500;
    font-size: 13px;
    cursor: pointer;
    margin-left: 50px;
    position: relative;
    padding: 5px;
    border: 1.5px solid transparent;
    &:hover {
      border: 1.5px solid #337d5a;
      .header__lang-select {
        opacity: 1;
        z-index: 10;
      }
    }
    &-select {
      opacity: 0;
      z-index: -1;
      position: absolute;
      top: 100%;
      left: -2px;
      border: 1px solid rgba(#000, 0.06);
      &-item {
        padding: 5px 13px;
        max-width: 42px;
        width: 100%;
        background-color: #fff;
        &:hover {
          background-color: #337d5a;
          color: #fff;
        }
      }
    }
  }
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
  }
  &__contacts {
    display: flex;
    gap: 10px;
    margin-left: auto;
    &-item:last-child {
      margin-left: 20px;
    }
    &-phone {
      display: block;
      font-family: 'Montserrat', sans-serif;
      font-size: 13px;
      font-weight: 500;
      span {
        color: #337d5a;
        font-weight: 600;
      }
      & + & {
        margin-top: 3px;
      }
    }
  }
  &__callback {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-left: auto;
    &-btn {
      max-width: 165px;
    }
    &-text {
      max-width: 178px;
      color: #8a8a8a;
      font-size: 12px;
      font-weight: 500;
    }
  }
  &__basket {
    position: relative;
    &-num {
      position: absolute;
      right: -10px;
      top: -5px;
      background-color: #93b474;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      color: #fff;
      font-size: 12px;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  &__burger {
    display: none;
  }
}
.menu {
  padding-top: 20px;
  border-top: 1px solid rgba(#000, 0.06);
  &__list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 68px;
    &-link {
      color: #1a2f3f;
      display: block;
      font-size: 15px;
      font-weight: 500;
      border-bottom: 3px solid transparent;
      padding-bottom: 10px;
      transition: all 0.3s;
      &:hover {
        color: #337d5a;
        border-color: #337d5a;
      }
    }
  }
}
.callback-modal {
  &__title {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 50px;
    text-align: center;
  }
  &__form {
    background-color: #fff;
    border-radius: 5px;
    padding: 100px;
  }
  &__field {
    margin-bottom: 30px;
  }
}
@media (max-width: 1170px) {
  .menu {
    padding: 10px 0;
    &__list {
      display: none;
    }
  }
  .header {
    &__auth {
      display: none;
    }
    &__sale {
      display: none;
      &.mobile {
        display: block;
        text-align: center;
      }
    }
    &__top {
      &-callback {
        display: block;
        cursor: pointer;
        font-size: 13px;
        font-weight: 600;
        color: #337d5a;
        border-bottom: 2px solid transparent;
        padding-bottom: 2px;
        transition: border-color 0.3s;
        &:hover {
          border-color: #337d5a;
        }
      }
    }
    &__lang {
      margin-left: 0;
    }
    &__contacts {
      margin-left: 0;
    }
    &__callback {
      display: none;
    }
    &__user,
    &__admin,
    &__logout {
      display: none;
    }
  }
  .burger {
    display: block;
    z-index: 100;
    &__btn {
      width: 19px;
      height: 17px;
      cursor: pointer;
      position: relative;
      z-index: 10;
      span {
        display: block;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        width: 19px;
        height: 2px;
        background-color: #000;
        &::before,
        &::after {
          content: '';
          height: 2px;
          background-color: #000;
          position: absolute;
          width: 100%;
        }
        &::before {
          top: -5px;
        }
        &::after {
          top: 5px;
          width: 13px;
        }
      }
    }
    &__user-panel {
      display: flex;
    }
    &__admin {
      margin-right: 10px;
      &-btn {
        padding: 5px 10px !important;
      }
    }
    &__user {
      border-bottom: 1px solid transparent;
      display: flex;
      align-items: center;
      gap: 5px;
      transition: all 0.3s;
      width: 230px;
      &:hover {
        border-color: #337d5a;
        color: #337d5a;
      }
    }
    &__logout {
      max-width: 100px;
      margin-left: 10px;
      padding: 5px 10px !important;
    }
    &__menu {
      display: none;
      position: absolute;
      background-color: #fff;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
      &-top {
        padding: 12px;
        display: flex;
        justify-content: space-between;
      }
      &-middle {
        padding: 12px;
        display: flex;
        justify-content: space-between;
        background-color: #fafafa;
      }
      &-menu {
        font-size: 15px;
        font-weight: 500;
        color: #1a2f3f;
      }
    }
    &__menu {
      &-list {
        &-link {
          padding: 10px;
          display: block;
          transition: all 0.3s;
          &:hover {
            background-color: #337d5a;
            color: #fff;
            &::after {
              display: none;
            }
          }
        }
        &-item + &-item {
          .burger__menu-list-link {
            position: relative;
            &::after {
              content: '';
              height: 1px;
              width: calc(100% - 24px);
              background-color: rgba(#000, 0.2);
              position: absolute;
              left: 10px;
              top: 0;
            }
          }
        }
      }
    }
    &__auth {
      display: flex;
      gap: 20px;
    }
    &__sm {
      display: none;
      align-items: center;
      gap: 20px;
      a svg {
        width: 15px;
      }
    }
    &.active {
      .burger {
        &__btn {
          width: 16px;
          height: 16px;
          position: absolute;
          right: 10px;
          top: 20px;
          span {
            background-color: transparent;
            &::before {
              top: 0;
              transform: rotate(45deg);
            }
            &::after {
              width: 100%;
              transform: rotate(-45deg);
              top: 0;
            }
          }
        }
        &__menu {
          display: block;
        }
      }
    }
  }
}
@media (max-width: 650px) {
  .header {
    &__top {
      &-phone {
        display: flex;
        align-items: center;
        gap: 6px;
        font-family: 'Montserrat';
        font-size: 12px;
        font-weight: 500;
        &-icon {
          width: 10px;
          height: 10px;
        }
        &_green {
          color: #337d5a;
        }
      }
    }
    &__contacts {
      display: none;
    }
  }
}
@media (max-width: 600px) {
  .callback-modal {
  &__title {
    font-size: 20px;
  }
  &__form {
    padding: 50px 40px;
  }
  &__field {
    margin-bottom: 20px;
  }
}
}
@media (max-width: 500px) {
  .header__sm {
    display: none;
  }
  .burger {
    &__sm {
      display: flex;
    }
    &__user-panel {
      flex-direction: column;
      gap: 10px;
    }
    &__admin {
      margin: 0;
      max-width: 100px;
    }
    &__user {
      width: 100%;
    }
    &__logout {
      margin: 0;
    }
  }
}
</style>