<template>
  <div class="main-page">
    <banners-top class="top-banner" :banner="topBanner" />
    <div class="products">
      <div class="container">
        <h2 class="products__title">{{ $t('home.products.title') }}</h2>
        <p class="products__text">{{ $t('home.products.text') }}</p>
        <div class="products__items">
          <Product v-for="item in products" :key="item.id" :product="item" />
        </div>
        <slider-mobile class="products__slider" :items="products" />
        <my-button
          class="products__btn secondary"
          @click="$router.push(($i18n.locale === 'ua' ? '/ua' : '') + '/shop')"
          >{{ $t('home.products.btn') }}</my-button
        >
      </div>
    </div>
    <About class="about" />
    <banners-area class="area" />
    <banners-factory class="factory" :banner="factoryBanner" />
    <div class="benefits">
      <div class="container">
        <h2 class="benefits__title">{{ $t('home.benefits.title') }}</h2>
        <p class="benefits__text">{{ $t('home.benefits.text') }}</p>
        <div class="benefits__items">
          <div class="benefits__item">
            <img class="benefits__item-icon" src="/images/icons/walnut.svg" />
            <div class="benefits__item-title">
              {{ $t('home.benefits.walnut.title') }}
            </div>
            <p class="benefits__item-text">
              {{ $t('home.benefits.walnut.text') }}
            </p>
            <div class="benefits__item-filter"></div>
          </div>
          <div class="benefits__item">
            <img class="benefits__item-icon" src="/images/icons/hazelnut.svg" />
            <div class="benefits__item-title">
              {{ $t('home.benefits.hazelnut.title') }}
            </div>
            <p class="benefits__item-text">
              {{ $t('home.benefits.hazelnut.text') }}
            </p>
            <div class="benefits__item-filter"></div>
          </div>
          <div class="benefits__item">
            <img class="benefits__item-icon" src="/images/icons/rose.svg" />
            <div class="benefits__item-title">
              {{ $t('home.benefits.rose.title') }}
            </div>
            <p class="benefits__item-text">{{ $t('home.benefits.text') }}</p>
            <div class="benefits__item-filter"></div>
          </div>
        </div>
      </div>
    </div>
    <banners-eco class="eco-banner" :banner="ecoBanner" />
    <news-latest class="news" :news="news" />
  </div>
</template>

<script>
export default {
  async asyncData({ $readData, i18n }) {
    if (i18n.locale === 'ua') {
      const topBanner = await $readData('banners/top/ua')
      const productsObj = await $readData('products')
      const factoryBanner = await $readData('banners/factory/ua')
      const ecoBanner = await $readData('banners/eco/ua')
      const news = await $readData('news')
      Object.keys(news).forEach((item) => {
        news[item] = news[item].ua
      })
      let products = []
      Object.keys(productsObj).forEach((item) =>
        products.push(productsObj[item].ua)
      )
      products = products.slice(0, 6)
      return { topBanner, products, factoryBanner, ecoBanner, news }
    } else {
      const topBanner = await $readData('banners/top')
      const productsObj = await $readData('products')
      const factoryBanner = await $readData('banners/factory')
      const ecoBanner = await $readData('banners/eco')
      const news = await $readData('news')
      let products = []
      Object.keys(productsObj).forEach((item) =>
        products.push(productsObj[item])
      )
      products = products.slice(0, 6)
      return { topBanner, products, factoryBanner, ecoBanner, news }
    }
  },
}
</script>

<style lang="scss" scoped>
.products {
  padding: 90px 0;
  color: #1a2f3f;
  &__title {
    font-size: 45px;
    font-weight: 800;
    text-align: center;
    margin-bottom: 30px;
  }
  &__text {
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 70px;
    max-width: 620px;
  }
  &__items {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  &__slider {
    display: none;
  }
  &__btn {
    max-width: 200px;
    margin: 70px auto 0;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
}
.benefits {
  text-align: center;
  padding: 90px 0;
  &__title {
    font-size: 45px;
    font-weight: 800;
    margin-bottom: 45px;
  }
  &__text {
    font-size: 18px;
    line-height: 22px;
    max-width: 555px;
    margin: 0 auto;
    margin-bottom: 50px;
  }
  &__items {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
  }
  &__item {
    max-width: 410px;
    height: 525px;
    padding: 0 30px;
    padding-top: 200px;
    color: #fff;
    cursor: pointer;
    position: relative;
    &-icon,
    &-title,
    &-text {
      position: relative;
      z-index: 10;
      margin-bottom: 30px;
      transition: all 0.5s;
    }
    &-title {
      font-size: 40px;
      font-weight: 800;
    }
    &-text {
      font-size: 18px;
      font-weight: 600;
      line-height: 23px;
      opacity: 0;
    }
    &-filter {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(#337d5a, 0);
      left: 0;
      top: 0;
      z-index: 9;
      transition: background-color 0.5s;
    }
    &:first-child {
      background-image: url(/images/benefits-1.jpg);
      .benefits__item-icon {
        margin-bottom: 17px;
      }
    }
    &:nth-child(2) {
      background-image: url(/images/benefits-2.jpg);
    }
    &:nth-child(3) {
      background-image: url(/images/benefits-3.jpg);
    }
    &:hover {
      .benefits__item {
        &-icon,
        &-title,
        &-text {
          transform: translateY(-100px);
        }
        &-text {
          opacity: 1;
        }
        &-filter {
          background-color: rgba(#337d5a, 0.95);
        }
      }
    }
  }
}
@media (max-width: 900px) {
  .products {
    &__items {
      display: none;
    }
    &__slider {
      display: block;
    }
  }
}
@media (max-width: 440px) {
  .benefits {
    &__title {
      font-size: 34px;
    }
    &__item-title {
      font-size: 36px;
    }
  }
}
</style>
