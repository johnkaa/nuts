<template>
   <div class="auth">
      <nuxt-child />
   </div>
</template>

<script>
export default {
   middleware: 'auth'
}
</script>