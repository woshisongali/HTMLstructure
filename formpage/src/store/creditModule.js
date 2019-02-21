/**
 * Created by songali on 19/2/21.
 */
// 买卖家赊销宝相关信息
const creditModule= {
  namespaced: true,
  state: {
    useTest: true,
  },

  mutations: {
    setuseTest (state, val) {
      state.useTest = val
    }
  },

  actions: {},

  getters: {
    useTest: state => {
      return state.useTest
    }
  }
}

export default creditModule
