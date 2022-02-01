<template>
  <div class="shop">
    <div class="container">
      <div class="shop__pos position">
        <nuxt-link class="shop__pos-link position-link" to="/"
          >Главная</nuxt-link
        >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.00001 11L6.3 10.3L10.1 6.5H0V5.50002H10.1L6.3 1.7L7.00001 1.00002L12 6.00001L7.00001 11Z"
            fill="#8A8A8A"
          />
        </svg>
        <nuxt-link class="shop__pos-link position-link" to="/shop"
          >Магазин</nuxt-link
        >
      </div>
      <div class="shop__item">
        <div class="shop__img">
          <my-popup
            v-if="showPreview"
            class="product__popup"
            @close="showPreview = false"
          >
            <img
              class="product__popup-img"
              :src="product.img"
              alt=""
            />
          </my-popup>
          <img :src="product.img" alt="" />
          <svg
            class="shop__img-zoom"
            width="55"
            height="55"
            viewBox="0 0 55 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            @click="showPreview = true"
          >
            <circle
              cx="27.5"
              cy="27.5"
              r="27.5"
              fill="white"
              fill-opacity="0.15"
            />
            <circle cx="27.5" cy="27.5" r="22.5" fill="#93B474" />
            <path
              d="M36.3691 35.3004L31.9977 30.9289C33.0813 29.6078 33.7344 27.9156 33.7344 26.0713C33.7344 21.8408 30.3018 18.4082 26.0713 18.4082C21.8371 18.4082 18.4082 21.8408 18.4082 26.0713C18.4082 30.3018 21.8371 33.7344 26.0713 33.7344C27.9156 33.7344 29.6041 33.085 30.9252 32.0014L35.2967 36.3691C35.5936 36.666 36.0723 36.666 36.3691 36.3691C36.666 36.076 36.666 35.5936 36.3691 35.3004ZM26.0713 32.2092C22.6832 32.2092 19.9297 29.4557 19.9297 26.0713C19.9297 22.6869 22.6832 19.9297 26.0713 19.9297C29.4557 19.9297 32.2129 22.6869 32.2129 26.0713C32.2129 29.4557 29.4557 32.2092 26.0713 32.2092Z"
              fill="white"
            />
          </svg>
        </div>
        <div class="shop__info">
          <div class="shop__info-top">
            <div class="shop__info-type">{{ product.type }}</div>
            <div class="shop__info-art">Арт: 0091</div>
          </div>
          <div class="shop__info-title">
            {{ product.title }}
          </div>
          <div class="shop__info-item">
            <div class="shop__info-item-title">Состав:</div>
            <div class="shop__info-item-text">
              {{ product.composition }}
            </div>
          </div>
          <div class="shop__info-item">
            <div class="shop__info-item-title">Масса нетто:</div>
            <div class="shop__info-item-text">{{ product.weight }}г.</div>
          </div>
          <div class="shop__info-item">
            <div class="shop__info-item-title">Энергетическая ценность:</div>
            <div class="shop__info-item-text">{{ product.calories }} Ккал.</div>
          </div>
          <div class="shop__info-item">
            <div class="shop__info-item-title">Срок годности:</div>
            <div class="shop__info-item-text">{{ product.experation }}</div>
          </div>
          <div class="shop__info-conditions">{{ product.conditions }}</div>
          <div class="shop__info-bottom">
            <template v-if="product.sale">
              <div class="shop__info-price">
              Ваша цена: <span class="shop__info-price-new">{{ product.price - ((product.price / 100) * product.discount) }} грн.</span
              ><span class="shop__info-price-old">{{ product.price }} грн.</span>
            </div>
            </template>
            <template v-else>
              <div class="shop__info-price">
              Ваша цена: <span class="shop__info-price-new">{{ product.price }} грн.</span
              ></div>
            </template>
            <my-button class="shop__info-btn">Заказать</my-button>
          </div>
        </div>
      </div>
      <div class="shop__bottom">
        <div class="shop__bottom-titles">
          <div
            class="shop__bottom-title"
            :class="{ active: selectedBottom === 'description' }"
            @click="selectedBottom = 'description'"
          >
            Описание
          </div>
          <div
            class="shop__bottom-title"
            :class="{ active: selectedBottom === 'package' }"
            @click="selectedBottom = 'package'"
          >
            Упаковка
          </div>
          <div
            class="shop__bottom-title"
            :class="{ active: selectedBottom === 'payment' }"
            @click="selectedBottom = 'payment'"
          >
            Оплата
          </div>
          <div
            class="shop__bottom-title"
            :class="{ active: selectedBottom === 'delivery' }"
            @click="selectedBottom = 'delivery'"
          >
            Доставка
          </div>
        </div>
        <div class="shop__bottom-items">
          <div
            v-if="selectedBottom === 'description'"
            class="shop__bottom-item"
          >
            <div v-if="product.type === 'Грецкий орех'" class="shop__bottom-walnut">
              <img class="shop__bottom-walnut-img" src="/images/walnut.jpg" />
              <div class="shop__bottom-walnut-info">
                <p class="shop__bottom-walnut-text">
                  Уже 4000 лет люди питаются ценными
                  <span class="shop__bottom-walnut-text_bold"
                    >грецкими орехами.</span
                  >
                  Они особенно полезны послеоперационным больным, детям,
                  кормящим, беременным женщинам. Чтобы вернуть силы, укрепить
                  иммунитет, одолеть туберкулез, кашель; грецкий орех очищенный,
                  отборный нужно истолочь, смешать с медом (2:1) и чайную ложку
                  целебной смеси употреблять перед едой.
                </p>
                <p class="shop__bottom-walnut-text">
                  В белке грецких орехов много (15 %) аргинина. Он особенно
                  нужен детям, больным, пожилым людям, в организме которых
                  аминокислота плохо синтезируется. Аргинин помогает сосудам
                  регенерировать, а всему организму – победить воспаления.
                </p>
                <div class="shop__bottom-walnut-title">
                  Другие полезные вещества грецких орехов:
                </div>
                <ul class="shop__bottom-walnut-list">
                  <li class="shop__bottom-walnut-list-item">
                    Антиоксиданты защищают печень от повреждений
                  </li>
                  <li class="shop__bottom-walnut-list-item">
                    Полифенолы не дают образоваться сосудистым тромбам
                  </li>
                  <li class="shop__bottom-walnut-list-item">
                    Нейропротекторы улучшают работу мозга, отодвигают старость
                  </li>
                </ul>
                <div class="shop__bottom-walnut-title">
                  Нужно систематически есть грецкие орехи, чтобы:
                </div>
                <ul class="shop__bottom-walnut-list">
                  <li class="shop__bottom-walnut-list-item">
                    На 30–40 % снизить риск заболевания раком простаты
                  </li>
                  <li class="shop__bottom-walnut-list-item">
                    На 50 % – раком молочной железы
                  </li>
                  <li class="shop__bottom-walnut-list-item">
                    Предотвратить дегенерацию глазной макулы, а значит, улучшить
                    зрение
                  </li>
                  <li class="shop__bottom-walnut-list-item">
                    Отрегулировать обмен веществ, выработку инсулина; понизить
                    количество сахара в крови
                  </li>
                </ul>
              </div>
            </div>
            <div v-if="product.type === 'Фундук'" class="shop__bottom-hazelnut">Фундук очень полезен</div>
            <div v-if="product.type === 'Шиповник'" class="shop__bottom-rose">Шиповник очень полезен</div>
          </div>
          <div v-if="selectedBottom === 'package'" class="shop__bottom-item">
            Хорошо упакуем
          </div>
          <div v-if="selectedBottom === 'payment'" class="shop__bottom-item">
            Оплачивайте любым удобным способом
          </div>
          <div v-if="selectedBottom === 'delivery'" class="shop__bottom-item">
            Быстро доставим
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $readData, route }) {
    const product = await $readData(`/products/${route.params.id}`)
    return { product }
  },
  data() {
    return {
      showPreview: false,
      selectedBottom: 'description',
    }
  },
}
</script>

<style lang="scss" scoped>
.shop {
  padding: 35px 0 90px;
  &__item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 80px;
    img {
      max-height: 470px;
    }
  }
  &__img {
    max-width: 553px;
    width: 100%;
    height: 570px;
    border: 1.5px solid #93b474;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    &-zoom {
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
      circle {
        fill: #93b474;
        transition: fill 0.3s;
      }
      &:hover {
        circle {
          fill: #337d5a;
        }
      }
    }
  }
  &__info {
    max-width: 660px;
    &-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    &-type {
      font-size: 18px;
      font-weight: 700;
      color: #337d5a;
    }
    &-art {
      font-family: 'Montserrat', sans-serif;
      color: #5b5b5b;
    }
    &-title {
      font-size: 30px;
      font-weight: 800;
      line-height: 32px;
      max-width: 460px;
      margin-bottom: 30px;
    }
    &-item {
      display: flex;
      margin-bottom: 30px;
      &-title {
        font-weight: 700;
        color: #000;
        min-width: 220px;
        margin-right: 40px;
      }
      &-text {
        font-family: 'Montserrat', sans-serif;
        color: #5b5b5b;
        font-size: 15px;
        line-height: 16px;
        max-width: 360px;
      }
    }
    &-conditions {
      border: 1px solid rgba(#000, 0.08);
      background-color: #fcfcfc;
      padding: 22px 0;
      padding-right: 15px;
      padding-left: 75px;
      font-family: 'Montserrat', sans-serif;
      font-size: 15px;
      line-height: 17px;
      margin-bottom: 35px;
      position: relative;
      &::before {
        content: '';
        background-image: url(/images/icons/warning.svg);
        width: 28px;
        height: 28px;
        position: absolute;
        left: 18px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    &-bottom {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 30px;
    }
    &-price {
      font-family: 'Montserrat', sans-serif;
      font-size: 15px;
      font-weight: 600;
      &-new {
        font-size: 18px;
        color: #337d5a;
        margin-left: 5px;
        margin-right: 10px;
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
    &-btn {
      max-width: 190px;
    }
  }
  &__bottom {
    &-titles {
      display: flex;
      justify-content: center;
      border-bottom: 1px solid rgba(#000, 0.08);
      gap: 80px;
      margin-bottom: 50px;
      overflow-x: auto;
    }
    &-title {
      font-size: 20px;
      font-weight: 800;
      display: flex;
      align-items: center;
      gap: 20px;
      cursor: pointer;
      padding: 0 25px;
      padding-bottom: 10px;
      border-bottom: 3px solid transparent;
      transition: border-color 0.3s;
      path {
        transition: fill 0.3s;
      }
      &:hover {
        border-color: #337d5a;
      }
      &.active {
        border-color: #337d5a;
      }
    }
    &-item {
      text-align: center;
      font-family: 'Montserrat', sans-serif;
      font-size: 15px;
      line-height: 25px;
    }
    &-walnut {
      text-align: left;
      display: flex;
      justify-content: space-between;
      gap: 60px;
      font-family: 'Montserrat', sans-serif;
      font-size: 15px;
      line-height: 25px;
      &-text {
        margin-bottom: 18px;
        &_bold {
          font-weight: 700;
          color: #337d5a;
        }
      }
      &-title {
        font-weight: 600;
        margin-bottom: 18px;
      }
      &-list {
        margin-bottom: 18px;
        &-item {
          padding-left: 20px;
          position: relative;
          &::before {
            content: '';
            width: 5px;
            height: 5px;
            position: absolute;
            background-color: #93B474;
            border-radius: 50%;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
    }
  }
}
@media (max-width: 1300px) {
  .shop {
    &__item {
      flex-direction: column;
      align-items: center;
      gap: 40px;
    }
    &__info {
      &-bottom {
        justify-content: space-between;
      }
    }
    &__bottom-walnut-img {
      display: none;
    }
  }
}
@media (max-width: 900px) {
  .shop__bottom-titles {
    justify-content: start;
    padding-bottom: 1px;
  }
}
@media (max-width: 700px) {
  .shop {
    &__info {
      &-item {
        flex-direction: column;
        gap: 5px;
      }
      &-conditions {
        padding: 10px;
        &::before {
          content: none;
        }
      }
      &-bottom {
        flex-direction: column;
      }
    }
  }
}
</style>