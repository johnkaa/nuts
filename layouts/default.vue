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
      if (this.$fire.auth.currentUser) {
        const uid = this.$fire.auth.currentUser.uid
        this.$store.dispatch('getUserAction', uid)
      }
    }, 500)
  },
}
</script>

<style>
</style>