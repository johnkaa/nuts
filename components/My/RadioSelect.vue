<template>
  <div class="radio-select">
    <label v-for="(select, index) in selects" :key="index" class="radio__wrapper">
      <input :id="index" v-model="selected" class="radio" :name="name" type="radio" :value="select">
      <span class="radio__style"></span>
      <span class="radio__text">{{ select }}</span>
    </label>
  </div>
</template>

<script>
export default {
  props: ['selects', 'name', 'selectValue'],
  data() {
    return {
      selected: ''
    }
  },
  watch: {
    selected() {
      this.$emit('change', this.selected)
    }
  },
  mounted() {
    if(this.selectValue) {
      this.selected = this.selectValue
    }
  }
}
</script>

<style lang="scss" scoped>
  .radio__wrapper {
    padding-left: 26px;
    position: relative;
    display: flex;
    margin-bottom: 10px;
    flex-direction: column;
    cursor: pointer;
  }
  .radio__style {
    width: 16px;
    height: 16px;
    border: 2px solid #337D5A;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .radio {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    &:checked {
      + .radio__style {
        &::before {
          content: '';
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: #337D5A;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
        }
      }
    }
  }
</style>
