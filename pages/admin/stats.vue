<template>
  <div class="stats">
    <h2 class="stats__title">Статистика</h2>
    <div class="stats__block">
      <vs-card>
        <div slot="header">
          <h3>Зарегистрированные пользователи</h3>
        </div>
        <div>
          <div class="stats__num">
            {{ Object.keys(users).length }}
          </div>
        </div>
      </vs-card>
    </div>
    <div class="stats__block">
      <vs-card>
        <div slot="header">
          <h3>Количество заказов</h3>
        </div>
        <div>
          <div class="stats__num">
            {{ Object.keys(orders).length }}
          </div>
        </div>
      </vs-card>
      <vs-card>
        <div slot="header">
          <h3>Выручка</h3>
        </div>
        <div>
          <div class="stats__num">
            {{ sumOfOrders }} грн.
          </div>
        </div>
      </vs-card>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $readData }) {
    const users = await $readData('users')
    const orders = await $readData('orders')
    return { users, orders }
  },
  data() {
    return {
      sumOfOrders: 0
    }
  },
  mounted() {
    Object.keys(this.orders).forEach(order => {
      this.sumOfOrders += +this.orders[order].price
    })
  }
}
</script>

<style lang="scss" scoped>
.stats {
  &__title {
    font-size: 30px;
    text-align: center;
    margin-bottom: 30px;
  }
  &__block {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  &__num {
    text-align: center;
    font-size: 30px;
  }
}
</style>