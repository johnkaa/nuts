<template>
  <div class="cabinet">
    <div class="container">
      <div class="cabinet__pos position">
        <nuxt-link class="cabinet__pos-link position-link" to="/"
          >Главная</nuxt-link
        >

        <img src="/images/icons/right-arrow.svg" alt="" />
        <nuxt-link class="cabinet__pos-link position-link" :to="$route.path"
          >Кабинет</nuxt-link
        >
      </div>
      <div class="cabinet__top">
        <h2 class="cabinet__title">Учетная запись</h2>
        <div class="cabinet__manager">
          <p class="cabinet__manager-text">Ваш личный менеджер Олег</p>
          <a class="cabinet__manager-phone" href="tel:+380677771412"
            ><img src="/images/icons/phone.svg" alt="" />+38 067 777 14 12</a
          >
        </div>
      </div>
      <div class="cabinet__inner">
        <div class="cabinet__sidebar">
          <div class="cabinet__sidebar-title">Мои заказы</div>
          <ul class="cabinet__sidebar-list orders">
            <li class="cabinet__sidebar-list-item">
              <nuxt-link
                class="cabinet__sidebar-list-link"
                :to="`/cabinet/${$route.params.id}/orders`"
                >История заказов</nuxt-link
              >
            </li>
            <li class="cabinet__sidebar-list-item">
              <nuxt-link
                class="cabinet__sidebar-list-link"
                :to="`/cabinet/${$route.params.id}/transactions`"
                >История транзакций</nuxt-link
              >
            </li>
          </ul>
          <div class="cabinet__sidebar-title">Моя учетная запись</div>
          <ul class="cabinet__sidebar-list">
            <li class="cabinet__sidebar-list-item">
              <nuxt-link
                class="cabinet__sidebar-list-link"
                :to="`/cabinet/${$route.params.id}/info`"
                >Контактная информация</nuxt-link
              >
            </li>
            <li class="cabinet__sidebar-list-item">
              <nuxt-link
                class="cabinet__sidebar-list-link"
                :to="`/cabinet/${$route.params.id}/password`"
                >Пароль</nuxt-link
              >
            </li>
            <li class="cabinet__sidebar-list-item">
              <nuxt-link
                class="cabinet__sidebar-list-link"
                :to="`/cabinet/${$route.params.id}/address`"
                >Адрес</nuxt-link
              >
            </li>
          </ul>
        </div>
        <nuxt-child class="cabinet__content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'cabinet'
}
</script>

<style lang="scss" scoped>
.cabinet {
  padding-top: 20px;
  padding-bottom: 60px;
  &__top {
    display: flex;
    gap: 80px;
    margin-bottom: 50px;
  }
  &__title {
    font-size: 32px;
    line-height: 32px;
    font-weight: 800;
  }
  &__manager {
    &-text {
      line-height: 32px;
      font-weight: 500;
    }
    &-phone {
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
      font-weight: 600;
      line-height: 32px;
      color: #337d5a;
      display: inline-flex;
      gap: 8px;
      align-items: center;
    }
  }
  &__inner {
    display: flex;
    gap: 70px;
  }
  &__sidebar {
    flex-basis: 200px;
    min-width: 200px;
    &-title {
      font-size: 18px;
      line-height: 32px;
      font-weight: 700;
      margin-bottom: 15px;
    }
    &-list {
      margin-bottom: 40px;
      &-item {
        line-height: 32px;
        font-weight: 500;
      }
      &-link {
        border-bottom: 2px solid transparent;
        transition: all 0.3s;
        &:hover,
        &.nuxt-link-exact-active.nuxt-link-active {
          color: #337d5a;
          border-color: #337d5a;
        }
      }
    }
  }
  &__content {
    flex-basis: 100%;
  }
}
@media (max-width: 800px) {
  .cabinet {
    &__inner {
      flex-direction: column;
      gap: 40px;
    }
    &__sidebar {
      &-title {
        display: none;
      }
      &-list {
        display: flex;
        justify-content: center;
        margin: 0;
        &-link {
          display: block;
          border: 2px solid #337d5a;
          padding: 10px;
          &.nuxt-link-exact-active.nuxt-link-active {
            color: #fff;
            background-color: #337d5a;
          }
        }
        &.orders {
          & .cabinet__sidebar-list-link {
            border-bottom: none;
          }
        }
      }
    }
  }
}
@media (max-width: 600px) {
  .cabinet {
    &__top {
      flex-direction: column;
      gap: 30px;
      align-items: center;
    }
    &__manager {
      text-align: center;
    }
  }
}
@media (max-width: 450px) {
  .cabinet__sidebar-list-link {
    padding: 10px 5px;
    font-size: 15px;
  }
}
</style> 