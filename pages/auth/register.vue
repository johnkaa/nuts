<template>
  <div class="register">
    <div class="container">
      <div class="register__pos position">
        <nuxt-link class="register__pos-link position-link" to="/"
          >Главная</nuxt-link
        >
        <img src="/images/icons/right-arrow.svg" alt="" />
        <nuxt-link class="register__pos-link position-link" to="/auth/register"
          >Регистрация</nuxt-link
        >
      </div>
      <validation-observer
        v-slot="{ invalid }"
        class="register__form"
        tag="form"
        name="register"
        @submit.prevent="submit"
      >
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
              <my-input
                v-model="name"
                class="register__input"
                placeholder="ФИО*"
                :errors="errors"
              />
            </div>
          </validation-provider>
          <validation-provider name="email" rules="required|email">
            <div slot-scope="{ errors }" class="register__field">
              <my-input
                v-model="email"
                class="register__input"
                placeholder="Email*"
                :errors="errors"
              />
            </div>
          </validation-provider>
          <validation-provider name="phone" rules="required">
            <div slot-scope="{ errors }" class="register__field">
              <my-input
                v-model="phone"
                type="tel"
                class="register__input"
                placeholder="Телефон*"
                :errors="errors"
              />
            </div>
          </validation-provider>
          <div class="register__text address">2. Адрес</div>
          <validation-provider name="country" rules="required">
            <div slot-scope="{ errors }" class="register__field">
              <my-select
                v-model="country"
                class="register__input"
                :options="countries"
                :errors="errors"
                placeholder="Страна*"
              />
            </div>
          </validation-provider>
          <validation-provider name="region" rules="required">
            <div slot-scope="{ errors }" class="register__field">
              <my-select
                v-model="region"
                class="register__input"
                :options="regions"
                :errors="errors"
                placeholder="Область*"
              />
            </div>
          </validation-provider>
          <validation-provider name="city" rules="required">
            <div slot-scope="{ errors }" class="register__field">
              <my-select
                v-model="city"
                class="register__input"
                :options="cities"
                :errors="errors"
                placeholder="Город*"
              />
            </div>
          </validation-provider>
          <my-input
            v-model="address"
            class="register__field"
            placeholder="Адрес"
          />
          <div class="register__text password">3. Пароль</div>
          <validation-provider name="password" rules="required|min:6">
            <div slot-scope="{ errors }" class="register__field">
              <my-input
                v-model="password"
                type="password"
                class="register__input"
                placeholder="Пароль*"
                :errors="errors"
              />
            </div>
          </validation-provider>
          <validation-provider
            name="repeat-password"
            rules="required|confirmed:password"
          >
            <div slot-scope="{ errors }" class="register__field">
              <my-input
                v-model="repeatPassword"
                type="password"
                class="register__input"
                placeholder="Повторите пароль*"
                :errors="errors"
              />
            </div>
          </validation-provider>
          <validation-provider name="agree" rules="true">
            <div slot-scope="{ errors }" class="register__field">
              <my-checkbox
                v-model="agree"
                class="register__checkbox"
                :errors="errors"
                >Я согласен с <span>условиями регистрации</span></my-checkbox
              >
            </div>
          </validation-provider>

          <my-button class="register__btn" :disabled="invalid"
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
              v-model="companyType"
              class="register__select"
              :selects="['Юр. лицо', 'ФОП']"
              :select-value="companyType"
              name="companyType"
            />
            <div class="register__text requisite">1. Реквизиты</div>
            <my-input
              v-model="requisite"
              type="text"
              class="register__field"
              placeholder="Реквизиты*"
            />
            <div class="register__text company-address">
              2. Юридический адрес
            </div>
            <my-select
              v-model="companyCountry"
              class="register__field"
              :options="countries"
              placeholder="Страна*"
            />
            <my-select
              v-model="companyRegion"
              class="register__field"
              :options="companyRegions"
              placeholder="Область*"
            />
            <my-select
              v-model="companyCity"
              class="register__field"
              :options="companyCities"
              placeholder="Город*"
            />
            <my-input
              v-model="companyAddress"
              class="register__input"
              placeholder="Адрес"
            />
          </div>
        </div>
      </validation-observer>
    </div>
  </div>
</template>

<script>
import { Country, State, City } from 'country-state-city'

export default {
  data() {
    return {
      countries: [],
      regions: [],
      cities: [],
      companyRegions: [],
      companyCities: [],
      countryCode: '',
      regionCode: '',
      CompanyCountryCode: '',
      CompanyRegionCode: '',
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
      agree: true,
      file: null,
      img: '',
      type: 'person',
      companyType: 'Юр. лицо',
      requisite: '',
      companyCountry: '',
      companyRegion: '',
      companyCity: '',
      companyAddress: '',
    }
  },
  watch: {
    country() {
      const allCountries = Country.getAllCountries()
      allCountries.forEach((item) => {
        if (this.country === item.name) {
          this.countryCode = item.isoCode
        }
      })
      const regions = State.getStatesOfCountry(this.countryCode)
      this.regions = []
      if (regions.length === 0) {
        this.regions = ['null']
      }
      regions.forEach((item) => this.regions.push(item.name))
    },
    region() {
      const allRegions = State.getAllStates()
      allRegions.forEach((item) => {
        if (this.region === item.name) {
          this.regionCode = item.isoCode
        }
      })
      const cities = City.getCitiesOfState(this.countryCode, this.regionCode)
      this.cities = []
      if (cities.length === 0) {
        this.cities = ['null']
      }
      cities.forEach((item) => this.cities.push(item.name))
    },
    companyCountry() {
      const allCountries = Country.getAllCountries()
      allCountries.forEach((item) => {
        if (this.companyCountry === item.name) {
          this.companyCountryCode = item.isoCode
        }
      })
      const regions = State.getStatesOfCountry(this.companyCountryCode)
      this.companyRegions = []
      if (regions.length === 0) {
        this.companyRegions = ['null']
      }
      regions.forEach((item) => this.companyRegions.push(item.name))
    },
    companyRegion() {
      const allRegions = State.getAllStates()
      allRegions.forEach((item) => {
        if (this.companyRegion === item.name) {
          this.companyRegionCode = item.isoCode
        }
      })
      const cities = City.getCitiesOfState(
        this.companyCountryCode,
        this.companyRegionCode
      )
      this.companyCities = []
      if (cities.length === 0) {
        this.companyCities = ['null']
      }
      cities.forEach((item) => this.companyCities.push(item.name))
    },
  },
  mounted() {
    const allCountries = Country.getAllCountries()
    this.countries = []
    allCountries.forEach((item) => this.countries.push(item.name))
  },
  methods: {
    async submit() {
      try {
        await this.$fire.auth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            this.uid = userCredential.user.uid
          })
      } catch (e) {
        this.$toasted.error(e)
      }
      const id = this.uid
      if (this.file) {
        const format =
          this.file.name.split('.')[this.file.name.split('.').length - 1]
        this.img = await this.$uploadImg(
          this.file,
          `users/${id}/avatar.${format}`
        )
      }
      try {
        const userInfo = {
          id,
          img:
            this.img ||
            'https://hnflocal5.com/wp-content/uploads/2018/01/user-placeholder.jpg',
          name: this.name,
          email: this.email,
          phone: this.phone,
          address: {
            country: this.country,
            region: this.region,
            city: this.city,
            address: this.address || '',
          },
          password: this.password,
          type: this.type,
          sale: 1,
        }
        if (this.type === 'company') {
          userInfo.company = {
            companyType: this.companyType,
            requisite: this.requisite,
            address: {
              country: this.companyCountry,
              region: this.companyRegion,
              city: this.companyCity,
            },
          }
        }
        await this.$writeData(`users/${id}`, userInfo)
      } catch (e) {
        this.$toasted.error(e)
      }
      this.$toasted.success('Вы успешно зарегистрировались.')
      this.$router.push('/auth/login')
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