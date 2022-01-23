<template>
  <button class="btn">
    <slot />
  </button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .btn {
    background-color: #337D5A;
    border: 1px solid #337D5A;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    padding: 15px 22px;
    transition: all .4s;
    &:hover {
      background-color: transparent;
      color: #337D5A;
    }
    &.secondary {
      background-color: transparent;
      color: #337D5A;
      &:hover {
        color: #fff;
        background-color: #337D5A;
      }
    }
  }
</style>