<template>
  <div class="login">
    <div class="container">
      <div class="login__pos position">
        <nuxt-link class="login__pos-link position-link" to="/"
          >Главная</nuxt-link
        >
        <img src="/images/icons/right-arrow.svg" alt="" />
        <nuxt-link class="login__pos-link position-link" to="/auth/login"
          >Вход</nuxt-link
        >
      </div>
      <form class="login__form" @submit.prevent="submit">
        <h2 class="login__title">Войти в личный кабинет</h2>
        <my-input v-model="email" class="login__input" placeholder="Email*" />
        <my-input
          v-model="password"
          type="password"
          class="login__input"
          placeholder="Password*"
        />
        <nuxt-link
          class="login__forgot-password login__link"
          to="/auth/forgot-password"
          >Забыли пароль?</nuxt-link
        >
        <my-button class="login__btn">Войти</my-button>
        <nuxt-link class="login__register login__link" to="/auth/register"
          >Регистрация</nuxt-link
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async submit() {
      if (this.email === '' || this.password === '') {
        return this.$toasted.error('Все поля должны быть заполнены.')
      }
      try {
        await this.$fire.auth
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.$router.push('/')
            this.$toasted.success('Вы успешно вошли в аккаунт.')
          })
      } catch (e) {
        if (e.toString().includes('(auth/invalid-email)')) {
          this.$toasted.error('Почта не зарегистрирована.')
        } else if (e.toString().includes('(auth/wrong-password)')) {
          this.$toasted.error('Неправильный пароль.')
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.login {
  padding-top: 35px;
  padding-bottom: 90px;
  &__pos {
    margin-bottom: 50px;
  }
  &__form {
    width: 410px;
    margin: 0 auto;
    text-align: center;
  }
  &__input {
    margin-bottom: 12px;
  }
  &__title {
    font-size: 32px;
    font-weight: 800;
    color: #1a2f3f;
    margin-bottom: 40px;
  }
  &__link {
    padding-bottom: 2px;
    border-bottom: 2px solid transparent;
    transition: border-color 0.5s;
    color: #337d5a;
    &:hover {
      border-color: #337d5a;
    }
  }
  &__btn {
    margin: 18px 0;
  }
}
</style>