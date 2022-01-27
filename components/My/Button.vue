<template>
  <button class="btn" :disabled="disabled" @click="click">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: () => false
    }
  },
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
  &:disabled {
    background-color: #8A8A8A;
    border-color: #8A8A8A;
    cursor: default;
    &:hover {
    background-color: #8A8A8A;
    color: #fff;
  }
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