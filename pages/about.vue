<template>
  <div class="about">
    <div class="container">
      <div class="about__pos position secondary">
        <nuxt-link class="about__pos-link position-link" to="/"
          >Главная</nuxt-link
        >
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
        <nuxt-link class="about__pos-link position-link" :to="$route.path"
          >О производстве</nuxt-link
        >
      </div>
    </div>
    <banners-top class="about__banner-top" />
    <About class="about__about" />
    <div class="about__info">
      <div class="container">
        <my-popup
          v-if="showWriteModal"
          class="about-modal"
          @close="showWriteModal = false"
        >
          <validation-observer
            v-slot="{ invalid }"
            class="about-modal__form"
            tag="form"
            name="write"
            @submit.prevent="writeSubmit"
          >
            <h2 class="about-modal__title">Введите ваше сообщение</h2>
            <validation-provider name="name" rules="required">
              <div slot-scope="{ errors }" class="about-modal__field">
                <my-input
                  v-model="writeName"
                  class="about-modal__input"
                  placeholder="Ваше имя*"
                  :errors="errors"
                />
              </div>
            </validation-provider>
            <validation-provider name="email" rules="required|email">
              <div slot-scope="{ errors }" class="about-modal__field">
                <my-input
                  v-model="writeEmail"
                  class="about-modal__input"
                  placeholder="Ваш эмейл*"
                  :errors="errors"
                />
              </div>
            </validation-provider>
            <validation-provider name="message" rules="required">
              <div slot-scope="{ errors }" class="about-modal__field">
                <my-input
                  v-model="writeMessage"
                  class="about-modal__input"
                  placeholder="Ваше сообщение*"
                  :errors="errors"
                />
              </div>
            </validation-provider>
            <my-button class="about-modal__btn" :disabled="invalid"
              >Подтвердить</my-button
            >
          </validation-observer>
        </my-popup>
        <div class="about__info-inner">
          <div class="about__chief">
            <img class="about__chief-img" src="/images/chief.jpg" />
            <div class="about__chief-info">
              <div class="about__chief-name">Павел Тулба</div>
              <div class="about__chief-pos">
                Учередитель и владелец предприятия "Орех Причерноморья"
              </div>
              <p class="about__chief-quote">
                Главная наша цель - получить максимальную прибыль с одного
                гектара
              </p>
              <my-button
                class="about__chief-btn secondary"
                @click="showWriteModal = true"
                >Написать нам</my-button
              >
            </div>
          </div>
          <div class="about__history">
            <div class="about__history-title">История предприятия</div>
            <p class="about__history-text">
              Наше предприятие основано в 2012 году для закладки смешанного сада
              грецкого ореха и фундука.
            </p>
            <p class="about__history-text">
              На сегодня мы уже заложили более 100 гектаров сада и продолжаем
              расширять свои насаждения. Кроме выращивания грецкого ореха и
              фундука, мы занимаемся выращиванием саженцев, разведением и
              выращиванием овец, а также являемся первой в Украине компанией,
              приступившей к промышленному выращиванию трюфелей на корнях
              фундука.
            </p>
            <p class="about__history-text">
              Земля, которой пользуется кооператив, является собственностью
              членов нашего кооператива.
            </p>
          </div>
        </div>
      </div>
    </div>
    <banners-area class="about__area" />
    <div class="about__gallery">
      <div class="container">
        <h2 class="about__gallery-title">Галерея</h2>
        <p class="about__gallery-text">Кадры социальной активности компании</p>
        <div class="about__gallery-items">
        <gallery-card v-for="item in 6" :key="item" class="about__gallery-item" />
        </div>
        <nuxt-link class="about__gallery-link" to="/gallery">
          <my-button class="about__gallery-btn secondary">Смотреть всю галерею</my-button>
        </nuxt-link>
      </div>
    </div>
    <banners-eco class="about__eco" />
    <news-latest class="about__news" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showWriteModal: false,
      writeName: '',
      writeEmail: '',
      writeMessage: '',
    }
  },
  methods: {
    writeSubmit() {
      const messageData = {
        name: this.writeName,
        email: this.writeEmail,
        message: this.writeMessage,
      }
      this.$writeData(`messages/${+new Date()}`, messageData)
      this.showWriteModal = false
      this.$toasted.success('Ваше сообщение доставлено.')
    },
  },
}
</script>

<style lang="scss" scoped>
.about {
  &__info {
    padding: 90px 0;
    &-inner {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 50px;
    }
  }
  &__chief {
    display: flex;
    gap: 40px;
    &-name {
      font-size: 32px;
      font-weight: 800;
      margin: 25px 0;
    }
    &-pos {
      line-height: 21px;
      margin-bottom: 40px;
      max-width: 285px;
    }
    &-quote {
      font-size: 15px;
      line-height: 13px;
      font-style: italic;
      padding-left: 38px;
      max-width: 400px;
      margin-bottom: 60px;
      position: relative;
      &::before {
        content: '';
        width: 26px;
        height: 26px;
        background-image: url(/images/icons/quotes.svg);
        position: absolute;
        top: -10px;
        left: 0;
      }
    }
    &-btn {
      max-width: 190px;
    }
  }
  &-modal {
    &__form {
      padding: 50px;
      background-color: #fff;
      border-radius: 5px;
    }
    &__title {
      font-size: 32px;
      font-weight: 800;
      text-align: center;
      margin-bottom: 20px;
    }
    &__field {
      margin-bottom: 10px;
    }
  }
  &__history {
    background-image: url(/images/history-bg.jpg);
    background-repeat: no-repeat;
    max-width: 450px;
    color: #fff;
    padding: 40px;
    &-title {
      text-align: center;
      font-size: 32px;
      font-weight: 800;
      margin-bottom: 40px;
    }
    &-text {
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
      line-height: 22px;
      color: #fcfcfc;
      max-width: 370px;
      & + & {
        margin-top: 18px;
      }
    }
  }
  &__gallery {
    padding: 90px 0;
    background-color: #FBFBFB;
    text-align: center;
    &-title {
      font-size: 45px;
      font-weight: 800;
      margin-bottom: 30px;
    }
    &-text {
      font-size: 18px;
      margin-bottom: 60px;
    }
    &-items {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 6px;
    }
    &-link {
      display: block;
      max-width: 235px;
      margin: 0 auto;
      margin-top: 65px;
    }
  }
}
@media (max-width: 700px) {
  .about__chief-img {
    display: none;
  }
}
@media (max-width: 600px) {
  .about-modal {
    &__form {
      padding: 50px 20px;
    }
    &__title {
      font-size: 19px;
    }
  }
}
@media (max-width: 500px) {
  .about__history {
    padding: 20px;
    &-title {
      margin-bottom: 20px;
      font-size: 26px;
    }
    &-text {
      font-size: 12px;
      & + & {
        margin-top: 10px;
      }
    }
  }
}
</style>