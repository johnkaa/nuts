<template>
  <div class="error">
    <div class="container">
      <div class="error__code">
        <img
          v-if="error.statusCode === 404"
          src="/images/error-404.png"
          alt=""
        />
        <span v-else>{{ error.statusCode }}</span>
      </div>
      <div class="error__text">
        <span v-if="error.statusCode === 404">Страница не найдена</span>
        <span v-else>{{ error.message }}</span>
      </div>
      <my-button class="error__btn secondary" @click="$router.push('/')">
        <svg
          class="error__btn-arrow"
          width="14"
          height="12"
          viewBox="0 0 14 12"
          fill="#337D5A"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.83332 11.8335L6.65 11.0168L2.21665 6.5835H14V5.41685H2.21665L6.65 0.983497L5.83332 0.166849L0 6.00017L5.83332 11.8335Z"
          />
        </svg>
        <span>Вернуться на главную страницу</span>
      </my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  head: {
    title: 'Error',
  },
}
</script>

<style lang="scss" scoped>
.error {
  text-align: center;
  padding: 100px 0;
  color: #1a2f3f;
  &__code {
    font-size: 244px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    margin-bottom: 40px;
  }
  &__text {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  &__btn {
    max-width: 330px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    &-arrow {
      transition: fill 0.3s;
    }
    &:hover {
      .error__btn-arrow {
        fill: #fff;
      }
    }
  }
}
@media (max-width: 700px) {
  .error__code {
    font-size: 130px;
    img {
      max-width: 100%;
    }
  }
}
</style>
