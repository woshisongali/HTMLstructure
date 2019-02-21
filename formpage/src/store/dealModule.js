/**
 * Created by songali on 19/2/21.
 */
const dealModule = {
  namespaced: true,

  state: {
    dealway: 'my',
  },

  mutations: {
    setDealway (state, val) {
      state.dealway = val
    }
  },

  actions: {},

  getters: {
    dealway: state => {
      return state.dealway
    }
  }
}

export  default dealModule