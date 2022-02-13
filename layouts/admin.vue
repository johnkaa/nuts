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
  padding-left: 300px;
  padding-right: 50px;
  padding-top: 100px;
  padding-bottom: 50px;
}
</style>