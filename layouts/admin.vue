<template>
  <div class="admin">
    <admin-sidebar class="admin__sidebar"/>
    <div class="admin__container">
      <nuxt-child class="admin__inner"/>
    </div>
  </div>
</template>

<script>
export default {

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
  z-index: 10;
}
@media (max-width: 900px) {
  .admin__container {
    padding: 50px;
  }
}
</style>