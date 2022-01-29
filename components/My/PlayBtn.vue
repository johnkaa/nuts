<template>
  <div class="play-icon" @click="play"></div>
</template>

<script>
export default {
  methods: {
    play() {
      this.$emit('play')
    }
  }
}
</script>

<style lang="scss" scoped>
  .play-icon {
    margin: 0 auto;
    width: 61px;
    height: 61px;
    border: 2px solid #fff;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    transition: all .5s;
    &::after {
      content: ''; 
      position: absolute; /* Абсолютное позиционирование */
      top: 50%;
      left: 60%;
      transform: translate(-50%, -50%);
      border: 8px solid transparent; /* Прозрачные границы */
      border-left: 10px solid #fff; /* Добавляем треугольник */
    }
    &:hover {
      border-color: #337D5A;
      background-color: #337D5A;
    }
  }
</style>