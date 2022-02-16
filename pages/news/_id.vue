<template>
  <div class="news">
    <div class="container">
      <div class="news__pos position">
        <nuxt-link class="news__pos-link position-link" to="/">{{
          $t('home.position')
        }}</nuxt-link>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.00001 11L6.3 10.3L10.1 6.5H0V5.50002H10.1L6.3 1.7L7.00001 1.00002L12 6.00001L7.00001 11Z"
            fill="#8a8a8a"
          />
        </svg>
        <nuxt-link class="news__pos-link position-link" to="/news">{{
          $t('news.title')
        }}</nuxt-link>
      </div>
      <div class="news__inner">
        <div class="news__content">
          <h2 class="news__title">{{ news.title }}</h2>
          <div class="news__date">{{ news.date }}</div>
          <img class="news__img" :src="news.img" />
          <p class="news__text">{{ news.text }}</p>
        </div>
        <div class="news__latest">
          <div class="news__latest-title">{{ $t('news.latest') }}</div>
          <div class="news__latest-items">
            <news-card
              v-for="(item, index) in latestNews"
              :key="index"
              class="news__latest-item mini-card"
              :news="item"
            />
            <div class="news__latest-sm">
              <div class="news__latest-sm-title">{{ $t('news.sm.title') }}</div>
              <div class="news__latest-sm-text">
                {{ $t('news.sm.text') }}
              </div>
              <div class="news__latest-sm-items">
                <a class="news__latest-sm-item" :href="sm.facebook"
                  ><svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.42623 6.9238H4.85124V12.7903C4.85124 12.9061 4.94509 13 5.06092 13H7.47707C7.5929 13 7.68675 12.9061 7.68675 12.7903V6.95144H9.32492C9.43143 6.95144 9.52105 6.87151 9.53321 6.7657L9.78201 4.60594C9.78885 4.54652 9.77002 4.48701 9.73027 4.44244C9.69047 4.39782 9.63352 4.37228 9.57376 4.37228H7.68683V3.01843C7.68683 2.61032 7.90658 2.40336 8.34002 2.40336C8.40179 2.40336 9.57376 2.40336 9.57376 2.40336C9.68959 2.40336 9.78344 2.30947 9.78344 2.19369V0.211229C9.78344 0.0954032 9.68959 0.00155161 9.57376 0.00155161H7.87349C7.86149 0.000964516 7.83487 0 7.79561 0C7.5006 0 6.47515 0.0579128 5.66512 0.803106C4.76762 1.6289 4.89238 2.61766 4.92219 2.78909V4.37224H3.42623C3.3104 4.37224 3.21655 4.46609 3.21655 4.58191V6.71408C3.21655 6.82991 3.3104 6.9238 3.42623 6.9238Z"
                      fill="#EFEFEF"
                    />
                  </svg>
                </a>
                <a class="news__latest-sm-item" :href="sm.instagram"
                  ><svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.48744 0H3.51256C1.57574 0 0 1.57574 0 3.51256V9.48744C0 11.4243 1.57574 13 3.51256 13H9.48744C11.4243 13 13 11.4243 13 9.48744V3.51256C13 1.57574 11.4243 0 9.48744 0ZM11.9497 9.48744C11.9497 10.8451 10.8452 11.9497 9.48744 11.9497H3.51256C2.15485 11.9497 1.05026 10.8452 1.05026 9.48744V3.51256C1.05026 2.15485 2.15483 1.05026 3.51256 1.05026H9.48744C10.8451 1.05026 11.9497 2.15483 11.9497 3.51256V9.48744Z"
                      fill="#EFEFEF"
                    />
                    <path
                      d="M9.40936 6.04654C9.31694 5.42327 9.03259 4.85838 8.58706 4.41285C8.14153 3.96735 7.57664 3.68297 6.9534 3.59058C6.66964 3.5485 6.38194 3.5485 6.0982 3.59058C5.32795 3.70481 4.64832 4.11212 4.18445 4.73752C3.72059 5.36292 3.52801 6.13154 3.64224 6.90174C3.75647 7.67197 4.16379 8.3516 4.78918 8.81548C5.29689 9.19205 5.89891 9.3898 6.51963 9.3898C6.66352 9.3898 6.80845 9.37918 6.95338 9.35768C7.72363 9.24344 8.40326 8.83613 8.86712 8.21073C9.33101 7.58536 9.5236 6.81676 9.40936 6.04654ZM6.79933 8.31877C6.30663 8.39194 5.81494 8.26867 5.41486 7.97193C5.01478 7.67519 4.75422 7.2404 4.68117 6.7477C4.6081 6.25499 4.73127 5.7633 5.02801 5.36322C5.32477 4.96314 5.75954 4.70258 6.25227 4.62951C6.34301 4.61605 6.43439 4.60932 6.52578 4.60932C6.61716 4.60932 6.70856 4.61605 6.79931 4.62953C7.61767 4.75088 8.24906 5.38224 8.37043 6.20063C8.52125 7.21773 7.81648 8.16795 6.79933 8.31877Z"
                      fill="#EFEFEF"
                    />
                    <path
                      d="M10.1575 2.84248C10.0597 2.7447 9.92432 2.68866 9.78614 2.68866C9.64797 2.68866 9.51261 2.74467 9.4148 2.84248C9.31702 2.94028 9.26099 3.07541 9.26099 3.21381C9.26099 3.35222 9.31702 3.48735 9.4148 3.58515C9.51261 3.68293 9.64797 3.73897 9.78614 3.73897C9.92432 3.73897 10.0597 3.68296 10.1575 3.58515C10.2553 3.48735 10.3113 3.35199 10.3113 3.21381C10.3113 3.07561 10.2553 2.94026 10.1575 2.84248Z"
                      fill="#EFEFEF"
                    />
                  </svg>
                </a>
                <a class="news__latest-sm-item" :href="sm.youtube"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.3764 12.6635C14.7988 13.35 13.7325 13.6301 11.6961 13.6301H4.30379C2.22075 13.6301 1.13636 13.3319 0.560981 12.601C0 11.8883 0 10.8383 0 9.38496V6.61494C0 3.79941 0.6656 2.36988 4.30379 2.36988H11.6961C13.4621 2.36988 14.4407 2.61701 15.0738 3.22289C15.723 3.84421 16 4.85866 16 6.61494V9.38496C16 10.9176 15.9566 11.9739 15.3764 12.6635ZM10.2721 7.61752L6.91525 5.86315C6.84021 5.82392 6.75814 5.80447 6.67618 5.80447C6.58338 5.80447 6.49079 5.82945 6.40877 5.8791C6.25435 5.97267 6.16005 6.14005 6.16005 6.32059V9.81809C6.16005 9.99832 6.25409 10.1655 6.40821 10.2592C6.56237 10.3528 6.75412 10.3592 6.91406 10.2761L10.2709 8.53303C10.4417 8.44436 10.5489 8.26805 10.5492 8.07569C10.5494 7.88318 10.4426 7.70661 10.2721 7.61752Z"
                      fill="#EFEFEF"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $readData, params }) {
    const allNews = await $readData('news')
    const news = await $readData(`news/${params.id}`)
    const sm = await $readData('contacts/sm')
    let latestNews = []
    Object.keys(allNews).forEach((item) => {
      latestNews.push(allNews[item])
    })
    latestNews = latestNews.slice(0, 3)
    return { news, latestNews, sm }
  },
  data() {
    return {
      id: '',
    }
  },
  watch: {
    async '$i18n.locale'() {
      const news = await this.$readData('news')
      this.latestNews = []
      if (this.$i18n.locale === 'ua') {
        this.news = await this.$readData(`news/${this.$route.params.id}/ua`)
        Object.keys(news).forEach((item, index) => {
          if(index < 3) {
            this.latestNews.push(news[item].ua)
          }
        })
      } else {
        this.news = await this.$readData(`news/${this.$route.params.id}`)
        Object.keys(news).forEach((item, index) => {
          if(index < 3) {
            this.latestNews.push(news[item])
          }
        })
      }
    },
  },
  mounted() {
    this.id = this.$route.params.id
  },
}
</script>

<style lang="scss" scoped>
.news {
  padding: 30px 0 90px;
  &__inner {
    display: flex;
    justify-content: space-between;
  }
  &__title {
    font-size: 32px;
    font-weight: 700;
    line-height: 35px;
    max-width: 470px;
    margin-bottom: 15px;
  }
  &__date {
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
    color: #8a8a8a;
    margin-bottom: 30px;
  }
  &__img {
    max-width: 990px;
    width: 100%;
    object-fit: cover;
    margin-bottom: 30px;
    max-height: 500px;
  }
  &__text {
    max-width: 990px;
  }
  &__latest {
    margin-top: 140px;
    &-title {
      font-size: 24px;
      font-weight: 700;
      line-height: 26px;
      max-width: 180px;
      text-align: center;
      margin: 0 auto 20px;
    }
    &-sm {
      background-color: #337d5a;
      max-width: 220px;
      color: #fff;
      padding: 35px 20px;
      text-align: center;
      margin-top: 10px;
      &-title {
        font-size: 20px;
        font-weight: 800;
        margin-bottom: 20px;
      }
      &-text {
        font-size: 17px;
        font-weight: 600;
        color: #efefef;
        margin-bottom: 30px;
      }
      &-items {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
      }
      &-item {
        path {
          transition: fill 0.3s;
        }
        &:hover {
          path {
            fill: #000;
          }
        }
      }
    }
  }
}
@media (max-width: 1300px) {
  .news {
    &__inner {
      flex-direction: column;
      align-items: center;
      gap: 60px;
    }
    &__latest {
      margin-top: 0;
      &-title {
        max-width: 100%;
      }
      &-items {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 20px;
      }
      &-sm {
        margin-top: 0;
      }
    }
  }
}
</style>