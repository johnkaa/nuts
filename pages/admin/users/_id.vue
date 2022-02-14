<template>
  <div class="users-edit">
    <validation-observer
      v-slot="{ invalid }"
      tag="form"
      name="users-edit"
      @submit.prevent="submit"
    >
      <div class="users-edit__img">
        <div class="users-edit__img-title">Фото:</div>
        <my-file-input @getFile="getFileImg">
          <div class="users-edit__photo">
            <img class="users-edit__photo-img" :src="img" alt="" />
            <span class="users-edit__photo-text" :class="{ show: !img }"
              >Загрузить фото</span
            >
          </div>
        </my-file-input>
      </div>
      <validation-provider name="name" rules="required">
        <div slot-scope="{ errors }">
          <vs-input
            v-model="name"
            class="users-edit__input"
            :danger="errors.length > 0"
            :danger-text="errors[0]"
            label="Имя"
          />
        </div>
      </validation-provider>
      <validation-provider name="phone" rules="required|numeric">
        <div slot-scope="{ errors }">
          <vs-input
            v-model="phone"
            class="users-edit__input"
            :danger="errors.length > 0"
            :danger-text="errors[0]"
            label="Телефон"
          />
        </div>
      </validation-provider>
      <vs-select v-model="country" class="users-edit__input" label="Страна">
        <vs-select-item
          v-for="(item, index) in countries"
          :key="index"
          :value="item"
          :text="item"
        />
      </vs-select>
      <vs-select v-model="region" class="users-edit__input" label="Область">
        <vs-select-item
          v-for="(item, index) in regions"
          :key="index"
          :value="item"
          :text="item"
        />
      </vs-select>
      <vs-select v-model="city" class="users-edit__input" label="Город">
        <vs-select-item
          v-for="(item, index) in cities"
          :key="index"
          :value="item"
          :text="item"
        />
      </vs-select>
      <vs-input v-model="address" class="users-edit__input" label="Адрес" />
      <vs-input-number
        v-model="sale"
        class="users-edit__input"
        label="Персональная скидка"
        max="100"
      />
      <div class="users-edit__btns">
        <vs-button
          class="users-edit__btn"
          :disabled="invalid"
          color="success"
          type="filled"
          @click="submit"
          >Сохранить</vs-button
        >
        <vs-button
          class="users-edit__btn"
          color="danger"
          type="filled"
          @click="$router.push('/admin/users')"
          >Назад</vs-button
        >
      </div>
    </validation-observer>
  </div>
</template>

<script>
import { Country, State, City } from 'country-state-city'

export default {
  async asyncData({ $readData, params }) {
    const user = await $readData(`users/${params.id}`)
    return { user }
  },
  data() {
    return {
      img: '',
      name: '',
      phone: '',
      password: '',
      countries: [],
      allCountries: '',
      countryCode: '',
      regions: [],
      regionCode: '',
      cities: [],
      country: '',
      region: '',
      city: '',
      address: '',
      sale: 0,
    }
  },
  watch: {
    country() {
      this.setRegions()
    },
    region() {
      this.setCities()
    },
  },
  mounted() {
    this.allCountries = Country.getAllCountries()
    this.countries = []
    this.allCountries.forEach((item) => this.countries.push(item.name))
    this.img = this.user.img
    this.name = this.user.name
    this.email = this.user.email
    this.phone = this.user.phone
    this.country = this.user.address.country
    this.region = this.user.address.region
    this.city = this.user.address.city
    this.address = this.user.address.address || ''
    this.sale = this.user.sale
    this.setRegions()
    this.setCities()
  },
  methods: {
    async submit() {
      const id = this.$route.params.id
      if (this.file) {
        const format =
          this.file.name.split('.')[this.file.name.split('.').length - 1]
        this.img = await this.$uploadImg(this.file, `users/${id}.${format}`)
      }
      const user = {
        id,
        address: {
          country: this.country,
          region: this.region,
          city: this.city,
          address: this.address || null,
        },
        email: this.user.email,
        img: this.img,
        name: this.name,
        orders: this.user.orders,
        password: this.user.password,
        phone: this.phone,
        sale: this.user.sale,
        type: this.user.type,
      }
      await this.$writeData(`users/${id}`, user)
      this.$vs.notify({
        color: 'success',
        title: 'Вы изменили пользователя.',
      })
      this.$router.push(`/admin/users`)
    },
    getFileImg(file) {
      this.file = file
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (e) => {
        this.img = e.target.result
      }
    },
    setRegions() {
      this.allCountries.forEach((item) => {
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
    setCities() {
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
  },
}
</script>

<style lang="scss">
.users-edit {
  &__img {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  &__input {
    width: 300px;
    margin-bottom: 20px;
  }
  &__btns {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  &__photo {
    position: relative;
    cursor: pointer;
    max-width: 155px;
    max-height: 155px;
    margin-bottom: 20px;
    &-text {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
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
      border-radius: 50%;
    }
    &:hover .users-edit__photo-img {
      filter: blur(2px);
    }
    &:hover .users-edit__photo-text {
      display: block;
      white-space: nowrap;
    }
  }
}
</style>