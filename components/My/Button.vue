<template>
  <button class="btn" @click="click">
    <slot />
  </button>
</template>

<script>
export default {
  methods: {
    click() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
  background-color: #337d5a;
  border: 1px solid #337d5a;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  padding: 15px 22px;
  width: 100%;
  transition: all .3s;
  &:hover {
    background-color: transparent;
    color: #337d5a;
  }
  &.secondary {
    background-color: transparent;
    color: #337d5a;
    &:hover {
      color: #fff;
      background-color: #337d5a;
    }
  }
}
</style>