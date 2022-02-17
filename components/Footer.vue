<template>
  <footer class="footer">
    <div class="footer__info">
      <div class="container">
        <div class="footer__info-inner">
          <div class="footer__info-contacts">
            <h2 class="footer__title">{{ $t('footer.contacts.title') }}</h2>
            <div class="footer__contacts">
              <div class="footer__contacts-item">
                <a class="footer__contacts-phone" :href="`tel:${mainPhone}`"
                  >+{{ mainPhone.slice(0, 2) }} ({{ mainPhone.slice(2, 5) }}) {{ mainPhone.slice(5, 8) }}-{{ mainPhone.slice(8, 10) }}-{{ mainPhone.slice(10, 12) }}</a
                >
                <a class="footer__contacts-phone" :href="`tel:${secondaryPhone}`"
                  >+{{ secondaryPhone.slice(0, 2) }} ({{ secondaryPhone.slice(2, 5) }}) {{ secondaryPhone.slice(5, 8) }}-{{ secondaryPhone.slice(8, 10) }}-{{ secondaryPhone.slice(10, 12) }}</a
                >
              </div>
              <a class="footer__contacts-item" href="#"
                ><img src="/images/icons/viber.svg" alt=""
              /></a>
              <a class="footer__contacts-item" href="#"
                ><img src="/images/icons/telegram.svg" alt=""
              /></a>
              <a class="footer__contacts-item" href="#"
                ><img src="/images/icons/whatsapp.svg" alt=""
              /></a>
            </div>
            <div class="footer__email">
              <a :href="`mailto:${contacts.email}`">{{ contacts.email }}</a>
            </div>
            <div class="footer__office">
              <div class="footer__office-title">{{ $t('footer.contacts.office') }}</div>
              <p class="footer__office-text">
                {{ contacts.office }}
              </p>
            </div>
            <div class="footer__farm">
              <div class="footer__farm-title">{{ $t('footer.contacts.factory') }}</div>
              <p class="footer__farm-text">
                {{ contacts.factory }}
              </p>
            </div>
          </div>
          <div class="footer__info-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2749.8880943477598!2d30.712512015590093!3d46.43109757912429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c633a7b20ed43b%3A0xfaab4e45d64743a!2z0YPQuy4g0JrQvtGB0LzQvtC90LDQstGC0L7QsiwgMzIsINCe0LTQtdGB0YHQsCwg0J7QtNC10YHRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNjUwMDA!5e0!3m2!1sru!2sua!4v1642955232626!5m2!1sru!2sua" width="100%" height="100%" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__menu">
      <div class="container">
        <div class="footer__menu-inner">
          <nuxt-link class="footer__logo" :to="($i18n.locale === 'ua' ? '/ua' : '') + '/'"
            ><img src="/images/logo.svg" alt=""
          /></nuxt-link>
          <ul class="menu__list">
            <li class="menu__list-item">
              <nuxt-link class="menu__list-link" :to="($i18n.locale === 'ua' ? '/ua' : '') + '/shop'">{{ $t('header.menu.shop') }}</nuxt-link>
            </li>
            <li class="menu__list-item">
              <nuxt-link class="menu__list-link" :to="($i18n.locale === 'ua' ? '/ua' : '') + '/about'"
                >{{ $t('header.menu.about') }}</nuxt-link
              >
            </li>
            <li class="menu__list-item">
              <nuxt-link class="menu__list-link" :to="($i18n.locale === 'ua' ? '/ua' : '') + '/delivery'"
                >{{ $t('header.menu.delivery') }}</nuxt-link
              >
            </li>
            <li class="menu__list-item">
              <nuxt-link class="menu__list-link" :to="($i18n.locale === 'ua' ? '/ua' : '') + '/corporate'"
                >{{ $t('header.menu.corporate') }}</nuxt-link
              >
            </li>
            <li class="menu__list-item">
              <nuxt-link class="menu__list-link" :to="($i18n.locale === 'ua' ? '/ua' : '') + '/news'"
                >{{ $t('header.menu.news') }}</nuxt-link
              >
            </li>
            <li class="menu__list-item">
              <nuxt-link class="menu__list-link" :to="($i18n.locale === 'ua' ? '/ua' : '') + '/gallery'">{{ $t('header.menu.gallery') }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer__copy">
      <div class="container">
        <div class="footer__copy-inner">
          <a class="footer__by" href="https://avada-media.com/">
            {{ $t('footer.by') }}
            <span>AVADA</span>
            <span>MEDIA</span>
          </a>
          <div class="footer__copyright">
            Copyright © 2019. {{ $t('footer.copyright') }}
          </div>
          <div v-if="contacts.sm" class="footer__sm">
            <a class="footer__sm-item" :href="contacts.sm.facebook">
              <svg
                class="footer__sm-item-img"
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
            <a class="footer__sm-item" :href="contacts.sm.instagram">
              <svg
                class="footer__sm-item-img"
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
            <a class="footer__sm-item" :href="contacts.sm.youtube">
              <svg
                class="footer__sm-item-img"
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
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      contacts: {},
      mainPhone: '',
      secondaryPhone: '',
    }
  },
  async mounted() {
    this.contacts = await this.$readData('/contacts') 
    this.mainPhone = this.contacts.phones.mainPhone
    this.secondaryPhone = this.contacts.phones.secondaryPhone
  },
}
</script>

<style lang="scss" scoped>
.footer {
  color: #1a2f3f;
  &__info {
    background-color: #fbfbfb;
    padding: 90px 0;
    &-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 35px;
    }
    &-map {
      max-width: 740px;
      height: 520px;
      width: 100%;
    }
  }
  &__title {
    font-size: 45px;
    font-weight: 800;
    margin-bottom: 70px;
  }
  &__contacts {
    display: flex;
    gap: 10px;
    padding-left: 30px;
    position: relative;
    margin-bottom: 50px;
    min-width: 310px;
    &::before {
      content: '';
      width: 14px;
      height: 14px;
      background-image: url(/images/icons/phone.svg);
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    &-item:first-child {
      margin-right: 20px;
    }
    &-phone {
      display: block;
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
      font-weight: 500;
      & + & {
        margin-top: 5px;
      }
    }
  }
  &__email {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 500;
    padding-left: 30px;
    margin-bottom: 50px;
    position: relative;
    &::before {
      content: '';
      width: 15px;
      height: 15px;
      background-image: url(/images/icons/e-mail.svg);
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &__office {
    padding-left: 30px;
    margin-bottom: 35px;
    position: relative;
    &-title {
      font-size: 17px;
      font-weight: 800;
      margin-bottom: 20px;
    }
    &-text {
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
      font-weight: 500;
      max-width: 155px;
    }
    &::before {
      content: '';
      width: 16px;
      height: 16px;
      background-image: url(/images/icons/office.svg);
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  &__farm {
    padding-left: 30px;
    margin-bottom: 35px;
    position: relative;
    &-title {
      font-size: 17px;
      font-weight: 800;
      margin-bottom: 20px;
    }
    &-text {
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
      font-weight: 500;
      max-width: 205px;
    }
    &::before {
      content: '';
      width: 16px;
      height: 16px;
      background-image: url(/images/icons/farm.svg);
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  &__menu {
    border-bottom: 1px solid rgba(#000, 0.08);
  }
  &__menu-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 40px;
    padding-bottom: 20px;
    .menu__list {
      display: flex;
      align-items: center;
      gap: 30px;
      &-item {
        font-size: 15px;
        font-weight: 600;
        &:hover {
          color: #337d5a;
        }
      }
    }
  }
  &__copy-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0;
    font-family: 'Montserrat', sans-serif;
  }
  &__by {
    font-size: 12px;
    span {
      color: #337D5A;
      font-weight: 600;
    }
    span + span {
      font-weight: 400;
    }
  }
  &__copyright {
    font-size: 12px;
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
}
@media(max-width: 1220px) {
  .menu__list {
    display: none !important;
  }
}
@media(max-width: 800px) {
  .footer__info {
    &-inner {
      justify-content: center;
    }
    &-map {
      display: none;
    }
  }
}
@media(max-width: 600px) {
  .footer__by {
    display: none;
  }
}
@media(max-width: 420px) {
  .footer__copyright {
    font-size: 10px;
  }
}
</style>