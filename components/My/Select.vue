<template>
  <v-select v-model="selected" class="select" :placeholder="placeholder" :options="options" @input="updateSelected"/>
</template>

<script>
export default {
  props: ['options', 'placeholder'],
  data() {
    return {
      selected: ''
    }
  },
  methods: {
    updateSelected() {
      this.$emit('input', this.selected)
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

.select .vs__selected {
  color: #000;
  opacity: 1;
}

.select .vs__search {
  cursor: pointer;
}

.select .vs__search, .select.vs--open .vs__search {
  padding: 10px;
}

.select .vs__dropdown-toggle:hover {
  background-color: #EBF2EF;
}

.select .vs__open-indicator {
  fill: #93b474;
}
</style>