<template>
  <div class="my-input">
    <input
      v-model="field"
      class="input"
      :class="{ error: errors.length !== 0 }"
      :type="type"
      :disabled="disabled"
      :placeholder="placeholder"
    />
    <span v-if="errors.length !== 0" class="input-info">{{ errors[0] }}</span>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'field',
    event: 'input',
  },
  props: {
    value: {
      type: String,
      default: () => ''
    },
    errors: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: () => ''
    },
    type: {
      type: String,
      default: () => 'text'
    },
    disabled: {
      type: Boolean,
      default: () => false
    },
  },
  data() {
    return {
      field: ''
    }
  },
  watch: {
    field() {
      this.$emit('input', this.field)
    },
    value() {
      this.field = this.value
    }
  },
  mounted() {
    if(this.value) {
      this.field = this.value
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  font-family: 'Montserrat', sans-serif;
  color: #1a2f3f;
  font-size: 14px;
  font-weight: 500;
  padding: 12px;
  width: 100%;
  outline: #1a2f3f;
  border: 1.5px solid rgba(#000, 0.15);
  transition: border-color 0.3s;
  &.error {
    border-color: #d40000;
  }
  &-info {
    display: block;
    color: #d40000;
    margin-top: 4px;
    font-size: 12px;
    font-family: 'Montserrat', sans-serif;
    text-align: left;
  }
  &::placeholder {
    font-family: 'Montserrat', sans-serif;
    color: #1a2f3f;
    font-size: 14px;
    font-weight: 500;
  }
  &:focus {
    border-color: #337d5a;
  }
}
</style>