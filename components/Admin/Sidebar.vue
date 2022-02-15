<template lang="html">

  <div class="parentx-static">

    <vs-sidebar v-model="active" static-position default-index="1" color="primary" class="sidebarx" spacer>

      <div slot="header" class="header-sidebar">
        <nuxt-link to="/">
          <img src="/images/logo.svg"/>
        </nuxt-link>
      </div>

      <vs-divider position="left">
        Статистика
      </vs-divider>

      <vs-sidebar-item index="1" to="/admin/stats">
        Статистика
      </vs-sidebar-item>

      <vs-sidebar-item index="2" to="/admin/orders">
        Продажи
      </vs-sidebar-item>

      <vs-divider position="left">
        Сайт
      </vs-divider>

      <vs-sidebar-item index="3" to="/admin/products">
        Товары
      </vs-sidebar-item>
      <vs-sidebar-item index="4" to="/admin/banners">
        Баннеры
      </vs-sidebar-item>
      <vs-sidebar-item index="5" to="/admin/news">
        Новости
      </vs-sidebar-item>
      <vs-sidebar-item index="6" to="/admin/gallery">
        Галерея
      </vs-sidebar-item>
      <vs-sidebar-item index="7" to="/admin/pages">
        Страницы
      </vs-sidebar-item>
      <vs-sidebar-item index="8" to="/admin/users">
        Пользователи
      </vs-sidebar-item>
      <vs-sidebar-item index="9" to="/admin/contacts">
        Контакты
      </vs-sidebar-item>
    </vs-sidebar>
  </div>

</template>

<script>
export default {
  data: () => ({
    active: false,
  }),
  methods: {
    async logout() {
      await this.$fire.auth.signOut()
      this.$router.push('/auth/login')
      this.$store.dispatch('getUserAction', null)
    },
  }
}
</script>

<style lang="scss">
.parentx-static {
  overflow: hidden;
  height: 500px;
  position: absolute;
  width: 300px;
  min-height: 100%;
  left: 0;
  bottom: 0;
  z-index: 10;
}

.vs-sidebar {
  padding-bottom: 100px;
  background-color: #fff;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.vs-sidebar--background {
  width: 0;
  height: 0;
  background-color: #fff;
}

.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    > button {
      margin-left: 10px;
    }
  }
}

.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  > button {
    border: 0px solid rgba(0, 0, 0, 0) !important;
    border-left: 1px solid rgba(0, 0, 0, 0.07) !important;
    border-radius: 0px !important;
  }
}
</style>