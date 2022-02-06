<template lang="html">
  <div>
    <vs-table :data="orders">
        <h3>
          Users
        </h3>
      <vs-th>
          Дата
        </vs-th>
        <vs-th>
          Имя клиента
        </vs-th>
        <vs-th>
          Цена
        </vs-th>

      <vs-tr v-for="order in orders" :key="order.id">
          <vs-td>
            {{ order.date }}
          </vs-td>

          <vs-td>
            {{ order.user.name }}
          </vs-td>

          <vs-td>
            {{ order.price }} грн
          </vs-td>

        </vs-tr>
    </vs-table>
  </div>
</template>

<script>
export default {
  async asyncData({ $readData }) {
    const orders = await $readData('/orders')
    return { orders }
  },
}
</script>