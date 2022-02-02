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
    setTimeout(() => {
      this.$store.dispatch('getUserAction')
    }, 500)
  },
}
</script>

<style>
</style>