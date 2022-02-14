<template>
  <div class="users">
    <h2 class="users__title">Пользователи</h2>
    <vs-table class="users__table" :data="users">
      <template slot="thead">
        <vs-th class="users__item-title"> Имя </vs-th>
        <vs-th class="users__item-title"> Email </vs-th>
        <vs-th class="users__item-title"> Телефон </vs-th>
      </template>
      <template slot-scope="{ data }">
        <vs-tr v-for="user in data" :key="user.id">

          <vs-td :data="user.name">
            {{ user.name }}
          </vs-td>

          <vs-td :data="user.email">
            {{ user.email }}
          </vs-td>
          <vs-td :data="user.phone">
            {{ user.phone }}
          </vs-td>

          <vs-td>
            <span
              class="users__item-action"
              @click="$router.push(`/admin/users/${user.id}`)"
            >
              <vs-icon icon="edit"></vs-icon>
            </span>
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
export default {
  async asyncData({ $readData }) {
    const usersObj = await $readData('users')
    const users = []
    Object.keys(usersObj).forEach((user) =>
      users.push(usersObj[user])
    )
    return { users }
  },
}
</script>

<style lang="scss" scoped>
.users {
  &__title {
    font-size: 32px;
    text-align: center;
    margin-bottom: 30px;
  }
  &__popup {
    &-title {
      font-size: 24px;
      text-align: center;
      margin-bottom: 20px;
    }
    &-btns {
      display: flex;
      justify-content: center;
      gap: 10px;
    }
  }
  &__item {
    &-title {
      padding: 10px;
      text-align: center;
      background-color: #dddddd;
    }
    &-sale {
      padding-left: 10px;
    }
    &-action {
      cursor: pointer;
    }
  }
  &__btn {
    margin: 0 auto;
    display: block;
    padding: 20px;
    margin-top: 50px;
  }
}
</style>
