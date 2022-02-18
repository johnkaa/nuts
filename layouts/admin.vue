<template>
  <div class="admin">
    <admin-sidebar class="admin__sidebar" @setActive="setActive"/>
    <div class="admin__container">
      <nuxt-child class="admin__inner" :class="{ active: !sidebarActive }"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarActive: false
    }
  },
  methods: {
    setActive(active) {
      this.sidebarActive = active
    }
  }
}
</script>

<style lang="scss">
.admin {
  background-color: #fff;
}
.admin__container {
  padding: 50px;
  padding-left: 300px;
}
.admin__inner {
  position: relative;
  z-index: 5;
  &.active {
    z-index: 10;
  }
}
@media (max-width: 900px) {
  .admin__container {
    padding: 50px;
  }
}
</style>