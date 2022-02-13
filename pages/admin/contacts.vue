<template>
  <div class="contacts">
    <validation-observer v-slot="{ invalid }" tag="form" name="news-edit">
      <div class="contacts__phone contacts__field">
        <validation-provider name="mainPhone" rules="required|numeric">
          <div slot-scope="{ errors }">
            <vs-input
              v-model="mainPhone"
              class="contacts__input"
              :danger="errors.length > 0"
              :danger-text="errors[0]"
              label="Телефон*"
            />
          </div>
        </validation-provider>
      </div>
      <div class="contacts__phone contacts__field">
        <validation-provider name="secondaryPhone" rules="required|numeric">
          <div slot-scope="{ errors }">
            <vs-input
              v-model="secondaryPhone"
              class="contacts__input"
              :danger="errors.length > 0"
              :danger-text="errors[0]"
              label="Телефон*"
            />
          </div>
        </validation-provider>
      </div>
      <div class="contacts__email">
        <validation-provider name="email" rules="required|email">
          <div slot-scope="{ errors }">
            <vs-input
              v-model="email"
              class="contacts__input"
              :danger="errors.length > 0"
              :danger-text="errors[0]"
              label="Email*"
            />
          </div>
        </validation-provider>
      </div>
      <div class="contacts__messengers">
        <vs-input v-model="viber" class="contacts__input" label="Viber" />
        <vs-input v-model="telegram" class="contacts__input" label="Telegram" />
        <vs-input v-model="whatsapp" class="contacts__input" label="Whatsapp" />
      </div>
      <div class="contacts__sm">
        <vs-input v-model="facebook" class="contacts__input" label="Facebook" />
        <vs-input
          v-model="instagram"
          class="contacts__input"
          label="Instagram"
        />
        <vs-input v-model="youtube" class="contacts__input" label="Youtube" />
      </div>
      <div class="contacts__address">
        <validation-provider name="office" rules="required">
          <div slot-scope="{ errors }">
            <vs-input
              v-model="office"
              class="contacts__input"
              :danger="errors.length > 0"
              :danger-text="errors[0]"
              label="Адрес офиса*"
            />
          </div>
        </validation-provider>
        <validation-provider name="factory" rules="required">
          <div slot-scope="{ errors }">
            <vs-input
              v-model="factory"
              class="contacts__input"
              :danger="errors.length > 0"
              :danger-text="errors[0]"
              label="Адрес фермы*"
            />
          </div>
        </validation-provider>
      </div>
      <vs-button
        class="contacts__btn"
        :disabled="invalid"
        color="success"
        type="filled"
        @click="submit"
        >Сохранить</vs-button
      >
    </validation-observer>
  </div>
</template>

<script>
export default {
  async asyncData({ $readData }) {
    const contacts = await $readData('contacts')
    return { contacts }
  },
  data() {
    return {
      mainPhone: '',
      secondaryPhone: '',
      email: '',
      viber: '',
      telegram: '',
      whatsapp: '',
      facebook: '',
      instagram: '',
      youtube: '',
      office: '',
      factory: '',
    }
  },
  mounted() {
    if (this.contacts.phones) {
      this.mainPhone = this.contacts.phones.mainPhone
      this.secondaryPhone = this.contacts.phones.secondaryPhone
    }
    if (this.contacts.messengers) {
      this.viber = this.contacts.messengers.viber
      this.telegram = this.contacts.messengers.telegram
      this.whatsapp = this.contacts.messengers.whatsapp
    }
    if (this.contacts.sm) {
      this.facebook = this.contacts.sm.facebook
      this.instagram = this.contacts.sm.instagram
      this.youtube = this.contacts.sm.youtube
    }
    this.email = this.contacts.email
    this.office = this.contacts.office
    this.factory = this.contacts.factory
  },
  methods: {
    async submit() {
      const contacts = {
        email: this.email,
        factory: this.factory,
        messengers: {
          viber: this.viber || null,
          telegram: this.telegram || null,
          whatsapp: this.whatsapp || null,
        },
        office: this.office,
        phones: {
          mainPhone: this.mainPhone,
          secondaryPhone: this.secondaryPhone,
        },
        sm: {
          facebook: this.facebook || null,
          instagram: this.instagram || null,
          youtube: this.youtube || null,
        },
      }
      await this.$writeData('contacts', contacts)
      this.$vs.notify({
        color: 'success',
        title: 'Вы изменили контакты.',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.contacts {
  &__input {
    width: 300px;
    margin-bottom: 20px;
  }
}
</style>