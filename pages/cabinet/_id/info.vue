<template>
  <div class="info">
    <validation-observer
      v-slot="{ invalid }"
      class="info__form"
      tag="form"
      name="info"
      @submit.prevent="changeInfo"
    >
      <validation-provider name="name" rules="required">
        <div slot-scope="{ errors }" class="info__field">
          <my-input
            v-model="name"
            :value="name"
            class="info__input"
            type="text"
            :placeholder="$t('register.name')"
            :errors="errors"
          />
        </div>
      </validation-provider>
      <validation-provider name="email" rules="required|email">
        <div slot-scope="{ errors }" class="info__field">
          <my-input
            v-model="email"
            :value="email"
            class="info__input"
            type="text"
            placeholder="Email*"
            :errors="errors"
          />
        </div>
      </validation-provider>
      <validation-provider name="phone" rules="required">
        <div slot-scope="{ errors }" class="info__field">
          <my-input
            v-model="phone"
            :value="phone"
            class="info__input"
            type="text"
            placeholder="Телефон*"
            :errors="errors"
          />
        </div>
      </validation-provider>
      <my-button class="info__btn" :disabled="invalid">{{ $i18n.locale === 'ua' ? 'Зберегти' : 'Сохранить' }}</my-button>
    </validation-observer>
    <my-file-input @getFile="getFileImg">
      <div class="info__avatar">
        <img
          class="info__avatar-img"
          :src="img || '/images/placeholder-avatar.jpg'"
          alt=""
        />
        <span class="info__avatar-text" :class="{ show: !img }"
          >{{ $t('register.photo') }}</span
        >
      </div>
    </my-file-input>
  </div>
</template>

<script>
import { getAuth, updateEmail } from 'firebase/auth'

export default {
  async asyncData({ $readData, route }) {
    const [name, email, phone, img] = await Promise.all([
      $readData(`users/${route.params.id}/name`),
      $readData(`users/${route.params.id}/email`),
      $readData(`users/${route.params.id}/phone`),
      $readData(`users/${route.params.id}/img`),
    ])
    return { name, email, phone, img }
  },
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      img: '',
      file: '',
    }
  },
  methods: {
    changeInfo() {
      const id = this.$route.params.id
      const auth = getAuth()
      updateEmail(auth.currentUser, this.email)
        .then(async () => {
          if (this.file) {
            const format =
              this.file.name.split('.')[this.file.name.split('.').length - 1]
            this.img = await this.$uploadImg(
              this.file,
              `users/${id}/avatar.${format}`
            )
          }
        })
        .then(async () => {
          await this.$writeData(`users/${id}/name`, this.name)
          await this.$writeData(`users/${id}/email`, this.email)
          await this.$writeData(`users/${id}/phone`, this.phone)
          await this.$writeData(`users/${id}/img`, this.img)
        })
        .then(() => {
          this.$store.dispatch('getUserAction', id)
        })
        .then(() => {
          this.$toasted.success('Вы изменили свои данные.')
          this.$router.push(`/cabinet/${id}/orders`)
        })
        .catch((error) => {
          return this.$toasted.error(error)
        })
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
.info {
  display: flex;
  gap: 30px;
  &__form {
    max-width: 410px;
    flex-basis: 100%;
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
  &__btn {
    max-width: 228px;
  }
  &__avatar {
    position: relative;
    cursor: pointer;
    max-width: 155px;
    max-height: 155px;
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
    &:hover .info__avatar-img {
      filter: blur(2px);
    }
    &:hover .info__avatar-text {
      display: block;
      white-space: nowrap;
    }
  }
}
@media (max-width: 900px) {
  .info {
    flex-direction: column;
    &__form {
      order: 1;
    }
  }
}
</style>