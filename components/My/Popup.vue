<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-close" @click="$emit('close')">
            <svg
              class="modal-close__img"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 1.2L10.8 0L6 4.8L1.2 0L0 1.2L4.8 6L0 10.8L1.2 12L6 7.2L10.8 12L12 10.8L7.2 6L12 1.2Z"
                fill="none"
              />
            </svg>
          </div>
          <div class="modal__body">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 700px;
  margin: 30px auto;
  border-radius: 10px;
  transition: all 0.3s ease;
  position: relative;
}
.modal-close {
  width: 44px;
  height: 44px;
  right: -30px;
  top: -30px;
  cursor: pointer;
  position: absolute;
  background-color: #337D5A;
  border-radius: 50%;
  transition: background-color .3s;
  &:hover {
    background-color: #fff;
    .modal-close__img path {
      fill:#337D5A
    }
  }
  &__img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &__img path {
    transition: fill 0.3s;
    fill: #fff;
  }
}

.modal-default-button {
  float: right;
}

/*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
@media (max-width: 800px) {
  .modal-container {
    max-width: 500px;
  }
}
@media (max-width: 600px) {
  .modal-container {
    max-width: 300px;
  }
}
</style>
