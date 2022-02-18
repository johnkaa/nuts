<template lang="html">

  <div class="parentx-static">
    <vs-button v-if="width < 900" class="sidebar__btn" radius color="primary" type="filled" icon="menu" @click="active=!active">
    </vs-button>
    <vs-sidebar v-model="active" class="sidebarx" :static-position="width > 900" default-index="1" color="primary" spacer>

      <div slot="header" class="header-sidebar">
        <nuxt-link to="/">
          <img src="/images/logo.png"/>
        </nuxt-link>
      </div>

      <vs-divider position="left">
        Статистика
      </vs-divider>

      <vs-sidebar-item index="1" icon="query_stats" to="/admin/stats">
        Статистика
      </vs-sidebar-item>

      <vs-sidebar-item index="2" icon="monetization_on" to="/admin/orders">
        Продажи
      </vs-sidebar-item>

      <vs-divider position="left">
        Сайт
      </vs-divider>

      <vs-sidebar-item index="3" icon="inventory_2" to="/admin/products">
        Товары
      </vs-sidebar-item>
      <vs-sidebar-item index="4" icon="view_carousel" to="/admin/banners">
        Баннеры
      </vs-sidebar-item>
      <vs-sidebar-item index="5" icon="newspaper" to="/admin/news">
        Новости
      </vs-sidebar-item>
      <vs-sidebar-item index="6" icon="collections" to="/admin/gallery">
        Галерея
      </vs-sidebar-item>
      <vs-sidebar-item index="7" icon="people" to="/admin/users">
        Пользователи
      </vs-sidebar-item>
      <vs-sidebar-item index="8" icon="contacts" to="/admin/contacts">
        Контакты
      </vs-sidebar-item>
    </vs-sidebar>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: false,
    width: 0
  }),
  mounted() {
    window.addEventListener('resize', this.updateWidth);
    this.updateWidth();
  },
  methods: {
    async logout() {
      await this.$fire.auth.signOut()
      this.$router.push('/auth/login')
      this.$store.dispatch('getUserAction', null)
    },
    updateWidth() {
      this.width = window.innerWidth;
    },
  },
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
  z-index: 11;
}

.sidebar__btn {
  position: relative;
  top: 10px;
  left: 10px;
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
}
</style>