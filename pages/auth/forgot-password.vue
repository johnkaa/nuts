<template>
  <div class="forgot-password">
    <div class="container">
      <div class="forgot-password__pos position">
        <nuxt-link class="register__pos-link position-link" to="/"
          >Главная</nuxt-link
        >
        <img src="/images/icons/right-arrow.svg" alt="" />
        <nuxt-link
          class="register__pos-link position-link"
          to="/auth/forgot-password"
          >Восстановление пароля</nuxt-link
        >
      </div>
      <validation-observer
        v-slot="{ invalid }"
        class="forgot-password__form"
        tag="form"
        name="forgot-password"
        @submit.prevent="submit"
      >
        <h2 class="forgot-password__title">Восстановление пароля</h2>
        <div class="forgot-password__post-title">
          <img src="/images/icons/lock.svg" alt="" />
          <span class="forgot-password__post-title__text">Забыли пароль?</span>
        </div>
        <div class="forgot-password__text">
          Введите Email Вашего аккаунта. Вам будет выслана ссылка для
          восстановления пароля.
        </div>
        <validation-provider name="email" rules="required|email">
          <div slot-scope="{ errors }" class="forgot-password__field">
            <my-input
              v-model="email"
              class="forgot-password__input"
              :errors="errors"
              placeholder="Email*"
            />
          </div>
        </validation-provider>
        <my-button class="forgot-password__btn" :disabled="invalid"
          >Отправить ссылку</my-button
        >
      </validation-observer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
    }
  },
  methods: {
    submit() {
      try {
        this.$fire.auth.sendPasswordResetEmail(this.email)
      } catch (e) {
        this.$toasted.error(e)
      }
      this.$router.push('/auth/login')
      this.$toasted.success('Проверьте ваш e-mail.')
    },
  },
}
</script>

<style lang="scss" scoped>
.forgot-password {
  color: #1a2f3f;
  padding-top: 40px;
  padding-bottom: 80px;
  &__pos {
    margin-bottom: 40px;
  }
  &__form {
    max-width: 410px;
    margin: 0 auto;
    text-align: center;
  }
  &__title {
    font-size: 32px;
    font-weight: 800;
    margin-bottom: 30px;
  }
  &__post-title {
    font-size: 18px;
    font-weight: 600;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
  }
  &__text {
    color: #8a8a8a;
    font-size: 15px;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 20px;
  }
  &__field {
    margin-bottom: 10px;
  }
  &__btn {
    max-width: 240px;
  }
}
</style>