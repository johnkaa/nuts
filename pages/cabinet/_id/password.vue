<template>
  <div class="change-password">
    <validation-observer
      v-slot="{ invalid }"
      class="change-password__form"
      tag="form"
      name="change-password"
      @submit.prevent="changePassword"
    >
      <h2 class="change-password__title">Пароль</h2>
      <validation-provider name="oldPassword" rules="required">
        <div slot-scope="{ errors }" class="change-password__field">
          <my-input
            v-model="oldPassword"
            class="change-password__input"
            type="password"
            :placeholder="$t('changePassword.current')"
            :errors="errors"
          />
        </div>
      </validation-provider>
      <validation-provider name="password" rules="required|min:6">
        <div slot-scope="{ errors }" class="change-password__field">
          <my-input
            v-model="password"
            class="change-password__input"
            type="password"
            :placeholder="$t('changePassword.new')"
            :errors="errors"
          />
        </div>
      </validation-provider>
      <validation-provider
        name="repeatPassword"
        rules="required|confirmed:password"
      >
        <div slot-scope="{ errors }" class="change-password__field">
          <my-input
            v-model="repeatPassword"
            class="change-password__input"
            type="password"
            :placeholder="$t('changePassword.confirm')"
            :errors="errors"
          />
        </div>
      </validation-provider>
      <my-button class="change-password__btn" :disabled="invalid"
        >{{ $t('changePassword.submit') }}</my-button
      >
    </validation-observer>
  </div>
</template>

<script>
import { getAuth, updatePassword } from 'firebase/auth'

export default {
  async asyncData({ $readData, route }) {
    const userPassword = await $readData(`users/${route.params.id}/password`)
    return { userPassword }
  },
  data() {
    return {
      oldPassword: '',
      password: '',
      repeatPassword: '',
    }
  },
  methods: {
    changePassword() {
      if (this.userPassword !== this.oldPassword) {
        return this.$toasted.error(this.$t('changePassword.error'))
      }
      const id = this.$route.params.id
      const auth = getAuth()
      updatePassword(auth.currentUser, this.password)
        .then(() => {
          this.$writeData(`users/${id}/password`, this.password)
        })
        .then(() => {
          this.$router.push(`/cabinet/${id}/orders`)
          this.$toasted.success(this.$t('changePassword.success'))
        })
        .catch((error) => {
          return this.$toasted.error(error)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.change-password {
  &__form {
    max-width: 410px;
    margin: 0 auto;
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
</style>