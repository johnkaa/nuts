<template>
  <div class="register">
    <div class="container">
      <div class="register__pos position">
        <nuxt-link class="register__pos-link position-link" to="/"
          >{{ $t('home.position') }}</nuxt-link
        >
        <img src="/images/icons/right-arrow.svg" alt="" />
        <nuxt-link class="register__pos-link position-link" to="/auth/register"
          >{{ $t('register.title') }}</nuxt-link
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
          <h2 class="register__title">{{ $t('register.title') }}</h2>
          <div class="register__text">1. {{ $t('register.contactDetails') }}</div>
          <div class="register__type">
            <div
              class="register__type-item"
              :class="{ active: type === 'person' }"
              @click="type = 'person'"
            >
             {{ $t('register.type.person') }}
            </div>
            <div
              class="register__type-item"
              :class="{ active: type === 'company' }"
              @click="type = 'company'"
            >
              {{ $t('register.type.company') }}
            </div>
          </div>
          <validation-provider name="name" rules="required">
            <div slot-scope="{ errors }" class="register__field">
              <my-input
                v-model="name"
                class="register__input"
                :placeholder="$t('register.name')"
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
          <validation-provider name="phone" rules="required|numeric">
            <div slot-scope="{ errors }" class="register__field">
              <my-input
                v-model="phone"
                type="tel"
                class="register__input"
                :placeholder="$t('register.phone')"
                :errors="errors"
              />
            </div>
          </validation-provider>
          <div class="register__text address">2. {{ $t('register.address') }}</div>
          <validation-provider name="country" rules="required">
            <div slot-scope="{ errors }" class="register__field">
              <my-select
                v-model="country"
                class="register__input"
                :options="countries"
                :errors="errors"
                :placeholder="$t('register.country')"
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
                :placeholder="$t('register.region')"
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
                :placeholder="$t('register.city')"
              />
            </div>
          </validation-provider>
          <my-input
            v-model="address"
            class="register__field"
            :placeholder="$t('register.address')"
          />
          <div class="register__text password">3. {{ $t('register.password') }}</div>
          <validation-provider name="password" rules="required|min:6">
            <div slot-scope="{ errors }" class="register__field">
              <my-input
                v-model="password"
                type="password"
                class="register__input"
                :placeholder="$t('register.password') + '*'"
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
                :placeholder="$t('register.repeatPassword')"
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
                >{{ $t('register.agree.text') }} <span>{{ $t('register.agree.conditions') }}</span></my-checkbox
              >
            </div>
          </validation-provider>

          <my-button class="register__btn" :disabled="invalid"
            >{{ $t('register.submit') }}</my-button
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
                >{{ $t('register.photo') }}</span
              >
            </div>
          </my-file-input>
          <div v-if="type === 'company'" class="register__company-form">
            <my-radio-select
              v-model="companyType"
              class="register__select"
              :selects="['ООО', 'ФОП']"
              :select-value="companyType"
              name="companyType"
            />
            <div class="register__text requisite">1. {{ $t('register.requisite') }}</div>
            <validation-provider name="requisite" rules="required">
              <div slot-scope="{ errors }" class="register__field">
                <my-input
                  v-model="requisite"
                  :value="requisite"
                  class="register__input"
                  :placeholder="$t('register.requisite') + '*'"
                  :errors="errors"
                />
              </div>
            </validation-provider>
            <div class="register__text company-address">
              2. {{ $t('register.companyAddress') }}
            </div>
            <validation-provider name="companyCountry" rules="required">
              <div slot-scope="{ errors }" class="register__field">
                <my-select
                  v-model="companyCountry"
                  :value="companyCountry"
                  class="register__input"
                  :options="countries"
                  :errors="errors"
                  :placeholder="$t('register.country')"
                />
              </div>
            </validation-provider>
            <validation-provider name="companyRegion" rules="required">
              <div slot-scope="{ errors }" class="register__field">
                <my-select
                  v-model="companyRegion"
                  :value="companyRegion"
                  class="register__input"
                  :options="companyRegions"
                  :errors="errors"
                  :placeholder="$t('register.region')"
                />
              </div>
            </validation-provider>
            <validation-provider name="companyCity" rules="required">
              <div slot-scope="{ errors }" class="register__field">
                <my-select
                  v-model="companyCity"
                  :value="companyCity"
                  class="register__input"
                  :options="companyCities"
                  :errors="errors"
                  :placeholder="$t('register.city')"
                />
              </div>
            </validation-provider>
            <my-input
              v-model="companyAddress"
              :value="companyAddress"
              class="register__input"
              :placeholder="$t('register.address')"
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
      companyType: 'ООО',
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
      this.$toasted.success(this.$t('register.success'))
      this.$router.push((this.$i18n.locale === 'ua' ? '/ua' : '') + '/auth/login')
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