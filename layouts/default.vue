<template>
  <div id="app">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('getUserAction')
  },
}
</script>

<style>
</style>