const actions = {
  async getUserAction(context) {
    if(this.$fire.auth.currentUser) {
      const user = await this.$readData(`users/${this.$fire.auth.currentUser.uid}`)
      context.commit('setUser', user)
    } else {
      context.commit('setUser', null)
    }
  },
  addToBasketAction(context, item) {
    context.commit('addToBasket', item)
  },
  deleteBasketItemAction(context, index) {
    context.commit('deleteBasketItem', index)
  },
  incrementBasketItemValueAction(context, index) {
    context.commit('incrementBasketItemValue', index)
  },
  decrementBasketItemValueAction(context, index) {
    context.commit('decrementBasketItemValue', index)
  },
  setShowBasketAction(context, value) {
    context.commit('setShowBasket', value)
  }
}

const mutations = {
  setUser(state, user) {
    state.user = user
  },
  addToBasket(state, item) {
    if(state.basket.includes(item)) {
      state.basket.forEach((product, index) => {
        if(product === item) {
          product.value++
          state.basket[index] = product
          state.basket[state.basket.length] = {}
          state.basket.splice(state.basket.length - 1, 1)
        }
      })
    } else {
      item.value = 1
      state.basket.push(item)
    }
  },
  deleteBasketItem(state, index) {
    state.basket.splice(index, 1)
  },
  incrementBasketItemValue(state, index) {
    if(state.basket[index].value === 20) {
      return
    }
    state.basket[index].value += 1
    state.basket[state.basket.length] = {}
    state.basket.splice(state.basket.length - 1, 1)
  },
  decrementBasketItemValue(state, index) {
    if(state.basket[index].value === 1) {
      return state.basket.splice(index, 1)
    }
    state.basket[index].value -= 1
    state.basket[state.basket.length] = {}
    state.basket.splice(state.basket.length - 1, 1)
  },
  setShowBasket(state, value) {
    state.showBasket = value
  },
}

const state = () => ({
  user: null,
  basket: [],
  showBasket: false
})

const getters = {
  getUser(state) {
    return state.user
  },
  getBasket(state) {
    return state.basket
  },
  getShowBasket(state) {
    return state.showBasket
  }
} 

export default {
  state,
  getters,
  mutations,
  actions
}