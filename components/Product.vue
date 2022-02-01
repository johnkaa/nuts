<template>
  <div class="product">
    <my-popup
      v-if="showPreview"
      class="product__popup"
      @close="showPreview = false"
    >
      <img class="product__popup-img" :src="product.img" alt="" />
    </my-popup>
    <nuxt-link :to="`/shop/${product.id}`">
      <div
        class="product__img"
        :class="{ sale: product.sale, new: product.new }"
      >
        <img :src="product.img" alt="" />
        <svg
          class="product__img-zoom"
          width="55"
          height="55"
          viewBox="0 0 55 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click.prevent="showPreview = true"
        >
          <circle
            cx="27.5"
            cy="27.5"
            r="27.5"
            fill="white"
            fill-opacity="0.15"
          />
          <circle
            class="product__img-zoom-circle"
            cx="27.5"
            cy="27.5"
            r="22.5"
            fill="#93B474"
          />
          <path
            class="product__img-zoom-loupe"
            d="M36.3691 35.3004L31.9977 30.9289C33.0813 29.6078 33.7344 27.9156 33.7344 26.0713C33.7344 21.8408 30.3018 18.4082 26.0713 18.4082C21.8371 18.4082 18.4082 21.8408 18.4082 26.0713C18.4082 30.3018 21.8371 33.7344 26.0713 33.7344C27.9156 33.7344 29.6041 33.085 30.9252 32.0014L35.2967 36.3691C35.5936 36.666 36.0723 36.666 36.3691 36.3691C36.666 36.076 36.666 35.5936 36.3691 35.3004ZM26.0713 32.2092C22.6832 32.2092 19.9297 29.4557 19.9297 26.0713C19.9297 22.6869 22.6832 19.9297 26.0713 19.9297C29.4557 19.9297 32.2129 22.6869 32.2129 26.0713C32.2129 29.4557 29.4557 32.2092 26.0713 32.2092Z"
            fill="white"
          />
        </svg>
      </div>
      <div class="product__type">{{ product.type }}</div>
      <div class="product__art">Арт: 0091</div>
      <div class="product__name">{{ product.title }}</div>
      <div class="product__info">
        <div class="product__weight product__info-item">
          <div class="product__weight-title product__info-title">Масса:</div>
          <div class="product__weight-text product__info-text">
            {{ product.weight }}г
          </div>
        </div>
        <div class="product__package product__info-item">
          <div class="product__package-title product__info-title">Упаковка</div>
          <div class="product__package-text product__info-text">вакуумная</div>
        </div>
      </div>
      <div class="product__bottom">
        <div class="product__bottom-inner">
          <template v-if="product.sale"
            ><div class="product__price">
              Цена:
              <span class="product__price-num"
                >{{ product.price - ((product.price / 100) * product.discount) }} грн.</span
              >
              <span class="product__price-old">{{ product.price }} грн.</span>
            </div></template
          >

          <template v-else>
            <div class="product__price">
              Цена:
              <span class="product__price-num"
                >{{ product.price }} грн.</span
              >
            </div>
          </template>
          <my-button class="product__btn" @click="addToBasket"
            >Купить</my-button
          >
        </div>
      </div></nuxt-link
    >
  </div>
</template>

<script>
export default {
  props: ['product'],
  data() {
    return {
      showPreview: false,
    }
  },
  methods: {
    addToBasket() {},
  },
}
</script>

<style lang="scss">
.product {
  cursor: pointer;
  width: 410px;
  border: 1px solid rgba(#000, 0.08);
  transition: border-color 0.3s;
  color: #1a2f3f;
  position: relative;
  &::after {
    content: '';
    width: 55px;
    height: 55px;
    background-image: url(/images/icons/zoom.svg);
    position: absolute;
    left: 50%;
    top: 120px;
    transform: translateX(-50%);
    opacity: 0;
  }
  &:hover {
    border-color: #93b474;
    .product__img-zoom {
      opacity: 1;
    }
  }
  &__img {
    text-align: center;
    padding: 25px 0;
    margin-bottom: 20px;
    position: relative;
    &.sale {
      &::after {
        content: '';
        background-image: url(/images/icons/ribbon-sale.svg);
        width: 82px;
        height: 31px;
        position: absolute;
        left: 0;
        top: 20px;
      }
    }
    &.new {
      &::after {
        content: '';
        background-image: url(/images/icons/ribbon-new.svg);
        width: 82px;
        height: 31px;
        position: absolute;
        left: 0;
        top: 20px;
      }
    }
    &.sale.new {
      &::before {
        content: '';
        background-image: url(/images/icons/ribbon-sale.svg);
        width: 82px;
        height: 31px;
        position: absolute;
        left: 0;
        top: 50px;
      }
      &::after {
        background-image: url(/images/icons/ribbon-new.svg);
        top: 10px;
      }
    }
    &-zoom {
      position: absolute;
      z-index: 20;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: opacity 0.3s;
      &:hover {
        .product__img-zoom-circle {
          fill: #fff;
          transition: fill 0.3s;
        }
        .product__img-zoom-loupe {
          fill: #93b474;
          transition: fill 0.3s;
        }
      }
    }
    img {
      height: 230px;
    }
  }
  &__popup-img {
    height: 400px;
  }
  &__type {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 10px;
    padding: 0 20px;
  }
  &__art {
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: #8a8a8a;
    margin-bottom: 15px;
    padding: 0 20px;
  }
  &__name {
    font-size: 16px;
    font-weight: 600;
    line-height: 17px;
    max-width: 270px;
    margin-bottom: 20px;
    padding-left: 20px;
    padding-right: 10px;
  }
  &__info {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    margin-bottom: 10px;
    &-item {
      padding-left: 27px;
      position: relative;
      &::before {
        content: '';
        width: 16px;
        height: 18px;
        background-image: url(/images/icons/weight.svg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: auto;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    &-title {
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
      font-weight: 500;
      color: #8a8a8a;
      margin-bottom: 3px;
    }
    &-text {
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
      font-weight: 600;
      color: #337d5a;
    }
  }
  &__package {
    &::before {
      background-image: url(/images/icons/package.svg);
      width: 12px;
      height: 18px;
    }
  }
  &__bottom {
    border-top: 1px solid rgba(#000, 0.08);
    padding: 15px 0;
    &-inner {
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  &__price {
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-weight: 600;
    &-num {
      font-size: 18px;
      color: #337d5a;
    }
    &-old {
      color: #8a8a8a;
      font-size: 14px;
      position: relative;
      &::after {
        content: '';
        width: 105%;
        height: 1px;
        background-color: #8a8a8a;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  &__btn {
    max-width: 125px;
  }
  &__popup {
    text-align: center;
    .modal-container {
      background-color: #fff;
      padding: 50px 0;
    }
  }
}
</style>