<template>
  <div class="area">
    <div class="container">
      <div class="area__items">
        <div class="area__item">
          <div class="area__item-title">
            240<span class="area__item-mark">Га</span>
          </div>
          <div class="area__item-text">{{ $t('area.item1') }}</div>
        </div>
        <div class="area__item">
          <div class="area__item-title">
            1<span class="area__item-mark">Га</span>
          </div>
          <div class="area__item-text">{{ $t('area.item2') }}</div>
        </div>
        <div class="area__item">
          <div class="area__item-title">
            10<span class="area__item-mark">Га</span>
          </div>
          <div class="area__item-text">
            {{ $t('area.item3') }}
          </div>
        </div>
        <div class="area__item">
          <div class="area__item-title">
            80<span class="area__item-mark">%</span>
          </div>
          <div class="area__item-text">{{ $t('area.item4') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.area {
  padding: 70px 0;
  &__items {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__item {
    text-align: center;
    &-title {
      font-family: 'Montserrat', sans-serif;
      font-size: 72px;
      font-weight: 800;
      margin-bottom: 10px;
    }
    &-mark {
      font-size: 18px;
      font-weight: 900;
      font-family: 'Raleway', sans-serif;
      vertical-align: super;
      position: relative;
      top: -10px;
    }
    &-text {
      max-width: 130px;
    }
    &:nth-child(3) {
      .area__item-text {
        max-width: 300px;
      }
    }
  }
}
@media (max-width: 800px) {
  .area {
    &__item {
      &:nth-child(3) {
        display: none;
      }
    }
  }
}
@media (max-width: 500px) {
  .area {
    &__item {
      &:nth-child(2) {
        display: none;
      }
    }
  }
}
</style>