<template>
  <div class="my-checkbox">
    <label class="checkbox__wrapper">
      <input v-model="checkbox" class="checkbox" type="checkbox" />
      <span class="checkbox-style"></span>
      <slot />
    </label>
    <span v-if="errors.length !== 0" class="input-info">{{ errors[0] }}</span>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'checkbox',
    event: 'change',
  },
  props: ['text', 'active', 'errors'],
  data() {
    return {
      checkbox: false,
    }
  },
  watch: {
    checkbox() {
      this.$emit('change', this.checkbox)
    },
  },
}
</script>

<style lang="scss" scoped>
.checkbox {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
}
.checkbox__wrapper {
  padding-left: 23px;
  position: relative;
  cursor: pointer;
}
.checkbox-style {
  width: 14px;
  height: 14px;
  border: 1.5px solid #337d5a;
  border-radius: 2px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

// CHECKED

.checkbox {
  &:checked {
    + .checkbox-style {
      border-color: #337d5a;
      &::before {
        content: '';
        width: 12px;
        height: 10px;
        background-image: url("data:image/svg+xml,%3Csvg width='10' height='8' viewBox='0 0 15 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 8L4 11L14 1' stroke='%23185EC7'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-size: contain;
        position: absolute;
        top: 0;
        right: -1px;
        z-index: 2;
      }
    }
  }
}
</style>
