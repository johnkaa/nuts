<template>
  <div class="my-select">
    <v-select
      v-model="selected"
      class="select"
      :class="{ error: errors.length !== 0 }"
      :placeholder="placeholder"
      :options="options"
    />
    <span v-if="errors.length !== 0" class="input-info">{{ errors[0] }}</span>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'selected',
    event: 'select',
  },
  props: {
    value: {
      type: String,
      default: () => '',
    },
    options: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: () => '',
    },
    errors: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selected: '',
    }
  },
  watch: {
    selected() {
      this.$emit('select', this.selected)
    },
    value() {
      this.selected = this.value
    }
  },
  mounted() {
    if(this.value) {
      this.selected = this.value
    }
  }
}
</script>

<style lang="scss">
.select .vs__search::placeholder,
.select .vs__dropdown-toggle,
.select .vs__dropdown-menu {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  color: #1a2f3f;
}

.select .vs__dropdown-toggle{
  padding: 10px;
}

.select .vs__selected {
  color: #000;
  opacity: 1;
}

.select .vs__search {
  cursor: pointer;
}

.select .vs__dropdown-toggle:hover {
  background-color: #ebf2ef;
}

.select .vs__open-indicator {
  fill: #93b474;
}

.select.error {
  .vs__dropdown-toggle {
    border-color: #d40000;
  }
  .vs__open-indicator {
    fill: #d40000;
  }
}
</style>