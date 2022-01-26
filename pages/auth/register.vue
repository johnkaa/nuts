<template>
  <div class="register">
    <div class="container">
      <div class="register__pos position">
        <nuxt-link class="register__pos-link position-link" to="/"
          >Главная</nuxt-link
        >
        <img src="/images/icons/right-arrow.svg" alt="" />
        <nuxt-link class="register__pos-link position-link" to="/auth/register"
          >Регистрация</nuxt-link>
      </div>
      <form class="register__form" @submit.prevent>
        <div class="register__person">
          <h2 class="register__title">Регистрация</h2>
          <div class="register__text">1. Контактные данные</div>
          <div class="register__type">
            <div
              class="register__type-item"
              :class="{ active: type === 'person' }"
              @click="type = 'person'"
            >
              Физическое лицо
            </div>
            <div
              class="register__type-item"
              :class="{ active: type === 'company' }"
              @click="type = 'company'"
            >
              Юридическое лицо
            </div>
          </div>
          <validation-provider name="name" rules="required">
            <div slot-scope="{ errors }" class="register__field">
              <input
                v-model="name"
                class="register__input input"
                :class="{ error: errors.length !== 0 }"
                placeholder="ФИО*"
              />
              <span class="register__field-info input-info">{{
                errors[0]
              }}</span>
            </div>
          </validation-provider>
          <validation-provider name="email" rules="required|email">
            <div slot-scope="{ errors }" class="register__field">
              <input
                v-model="email"
                class="register__input input"
                :class="{ error: errors.length !== 0 }"
                placeholder="Email*"
              />
              <span class="register__field-info input-info">{{
                errors[0]
              }}</span>
            </div>
          </validation-provider>
          <validation-provider name="phone" rules="required">
            <div slot-scope="{ errors }" class="register__field">
              <input
                v-model="phone"
                type="tel"
                class="register__input input"
                :class="{ error: errors.length !== 0 }"
                placeholder="Телефон*"
              />
              <span class="register__field-info input-info">{{
                errors[0]
              }}</span>
            </div>
          </validation-provider>
          <div class="register__text address">2. Адрес</div>
          <my-select
            class="register__input"
            :options="['raz', 'dva']"
            placeholder="Страна*"
            @input="updateCountry"
          />
          <my-select
            class="register__input"
            :options="['raz', 'dva']"
            placeholder="Область*"
            @input="updateRegion"
          />
          <my-select
            class="register__input"
            :options="['raz', 'dva']"
            placeholder="Город*"
            @input="updateCity"
          />
          <input
            v-model="address"
            type="text"
            class="register__field input"
            placeholder="Адрес"
          />
          <div class="register__text password">3. Пароль</div>
          <validation-provider name="password" rules="required">
            <div slot-scope="{ errors }" class="register__field">
              <input
                v-model="password"
                type="password"
                class="register__input input"
                :class="{ error: errors.length !== 0 }"
                placeholder="Пароль*"
              />
              <span class="register__field-info input-info">{{
                errors[0]
              }}</span>
            </div>
          </validation-provider>
          <validation-provider
            name="repeatPassword"
            rules="required|confirmed:password"
          >
            <div slot-scope="{ errors }">
              <input
                v-model="repeatPassword"
                type="password"
                class="register__input input"
                :class="{ error: errors.length !== 0 }"
                placeholder="Повторите пароль*"
              />
              <span class="register__field-info input-info">{{
                errors[0]
              }}</span>
            </div>
          </validation-provider>
          <my-checkbox class="register__checkbox" @change="updateAgreement"
            >Я согласен с
            <span @click="agree = !agree"
              >условиями регистрации</span
            ></my-checkbox
          >
          <my-button class="register__btn" @click="submit"
            >Продолжить</my-button
          >
        </div>
        <div class="register__company">
          <my-file-input @getFile="getFileImg">
            <div class="register__avatar">
              <img
                class="register__avatar-img"
                :src="img || '/images/placeholder-avatar.jpg'"
                alt=""
              />
              <span class="register__avatar-text" :class="{ show: !img }"
                >Загрузить фото</span
              >
            </div>
          </my-file-input>
          <div v-if="type === 'company'" class="register__company-form">
            <my-radio-select
              class="register__select"
              :selects="['Юр. лицо', 'ФОП']"
              :select-value="userType"
              name="userType"
              @input="updateType"
            />
            <div class="register__text requisite">1. Реквизиты</div>
            <my-input
              class="register__input"
              placeholder="ОКПО"
              @input="updateRequisite"
            />
            <div class="register__text company-address">
              2. Юридический адрес
            </div>
            <my-select
              class="register__input"
              :options="['raz', 'dva']"
              placeholder="Страна*"
              @input="updateCompanyCountry"
            />
            <my-select
              class="register__input"
              :options="['raz', 'dva']"
              placeholder="Область*"
              @input="updateCompanyRegion"
            />
            <my-select
              class="register__input"
              :options="['raz', 'dva']"
              placeholder="Город*"
              @input="updateCompanyCity"
            />
            <my-input
              class="register__input"
              placeholder="Адрес"
              @input="updateCompanyAddress"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    // let countries
    // const KEY = 'b28f16f07ac1d330d1b96615ea5e3132'
    // const url = `http://battuta.medunes.net/api/country/all/?key=${KEY}`
    // try {
    //   countries = await $axios.get(url)
    // } catch(e) {
    //   console.log(e);
    // }
    // return { countries }
  },
  data() {
    return {
      countries: {},
      regions: {},
      cities: {},
      uid: '',
      name: '',
      email: '',
      phone: '',
      country: '',
      region: '',
      city: '',
      address: '',
      password: '',
      repeatPassword: '',
      agree: false,
      file: null,
      img: '',
      type: 'person',
      userType: 'Юр. лицо',
      requisite: '',
      companyCountry: '',
      companyRegion: '',
      companyCity: '',
    }
  },
  methods: {
    async submit() {
      try {
        await this.$fire.auth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            this.uid = userCredential.user.uid
          })
          .then(() => this.$toasted.success('success'))
      } catch (e) {
        this.$toasted.erorr(e)
      }
    },
    updateCountry(select) {
      this.country = select
    },
    updateRegion(select) {
      this.region = select
    },
    updateCity(select) {
      this.city = select
    },
    updateAgreement(state) {
      this.agree = state
    },
    getFileImg(file) {
      this.file = file
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (e) => {
        this.img = e.target.result
      }
    },
    updateType(select) {
      this.userType = select
    },
    updateCompanyCountry(field) {
      this.companyCountry = field
    },
    updateCompanyRegion(field) {
      this.companyRegion = field
    },
    updateCompanyCity(field) {
      this.companyCity = field
    },
  },
}
</script>

<style lang="scss" scoped>
.register {
  padding-top: 30px;
  padding-bottom: 90px;
  color: #1a2f3f;
  &__title {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 30px;
  }
  &__text {
    font-size: 17px;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 35px;
    &.address,
    &.password,
    &.requisite,
    &.company-address {
      margin-top: 20px;
    }
  }
  &__form {
    display: flex;
    gap: 260px;
  }
  &__person {
    width: 470px;
  }
  &__type {
    display: flex;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: #000;
    border-bottom: 1px solid rgba(#000, 0.15);
    width: 100%;
    text-align: center;
    margin-bottom: 40px;
    &-item {
      padding-bottom: 10px;
      cursor: pointer;
      width: 50%;
      & + & {
        margin-left: auto;
      }
      &:hover {
        font-weight: 700;
        color: #1a2f3f;
        border-bottom: 2.5px solid #337d5a;
      }
      &.active {
        font-weight: 700;
        color: #1a2f3f;
        border-bottom: 2.5px solid #337d5a;
      }
    }
  }
  &__field {
    margin-bottom: 15px;
  }
  &__checkbox {
    margin-top: 15px;
    margin-bottom: 30px;
    display: block;
    color: #8a8a8a;
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    span {
      color: #337d5a;
      font-weight: 600;
      transition: border-color 0.3s;
      border-bottom: 1px solid transparent;
      &:hover {
        border-color: #337d5a;
      }
    }
  }
  &__avatar {
    position: relative;
    cursor: pointer;
    max-width: 131px;
    max-height: 170px;
    margin-bottom: 20px;
    &-text {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
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
    &:hover .register__avatar-img {
      filter: blur(2px);
    }
    &:hover .register__avatar-text {
      display: block;
    }
  }
  &__company {
    width: 470px;
  }
}
</style>