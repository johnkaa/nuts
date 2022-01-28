const actions = {
  async getUserAction(context, uid) {
    if(uid) {
      const user = await this.$readData(`users/${uid}`)
      context.commit('setUser', user)
    } else {
      context.commit('setUser', null)
    }
  }
}

const mutations = {
  setUser(state, user) {
    state.user = user
  }
}

const state = () => ({
  user: null
})

const getters = {
  getUser(state) {
    return state.user
  }
} 

export default {
  state,
  getters,
  mutations,
  actions
}