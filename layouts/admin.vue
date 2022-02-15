<template>
  <div class="admin">
    <admin-sidebar class="admin__sidebar"/>
    <div class="admin__container">
      <nuxt-child />
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
@media (max-width: 900px) {
  .admin__container {
    padding: 50px;
  }
}
</style>