<template>
  <div class="change-address">
    <validation-observer
      v-slot="{ invalid }"
      class="change-address__form"
      tag="form"
      name="change-address"
      @submit.prevent="changeAddress"
    >
      <h2 class="change-address__title">Адрес</h2>
      <validation-provider name="country" rules="required">
        <div slot-scope="{ errors }" class="change-address__field">
          <my-select
            v-model="country"
            class="change-address__input"
            :options="countries"
            :errors="errors"
            placeholder="Страна*"
          />
        </div>
      </validation-provider>
      <validation-provider name="region" rules="required">
        <div slot-scope="{ errors }" class="change-address__field">
          <my-select
            v-model="region"
            class="change-address__input"
            :options="regions"
            :errors="errors"
            placeholder="Область*"
          />
        </div>
      </validation-provider>
      <validation-provider name="city" rules="required">
        <div slot-scope="{ errors }" class="change-address__field">
          <my-select
            v-model="city"
            class="change-address__input"
            :options="cities"
            :errors="errors"
            placeholder="Город*"
          />
        </div>
      </validation-provider>
      <my-input v-model="address" class="change-address__field" placeholder="Адрес" />
      <my-button class="change-address__btn" :disabled="invalid"
        >Продолжить</my-button
      >
    </validation-observer>
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
      country: '',
      region: '',
      city: '',
      address: ''
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
  },
  mounted() {
    const allCountries = Country.getAllCountries()
    this.countries = []
    allCountries.forEach((item) => this.countries.push(item.name))
  },
  methods: {
    changeAddress() {
      const address = {
        country: this.country,
        region: this.region,
        city: this.city,
        address: this.address || '',
      }
      const id = this.$route.params.id
      this.$writeData(`users/${id}/address`, address)
      this.$router.push(`/cabinet/${id}/orders`)
      this.$toasted.success('Вы изменили свой адрес')
    },
  },
}
</script>

<style lang="scss" scoped>
.change-address {
  &__form {
    width: 410px;
  }
  &__title {
    font-size: 32px;
    line-height: 32px;
    font-weight: 800;
    margin-bottom: 40px;
  }
  &__field {
    margin-bottom: 10px;
  }
}
@media(max-width: 600px) {
  .change-password__form {
    width: 300px;
  }
}
</style>