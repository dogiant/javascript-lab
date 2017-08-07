import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    hello: 'hello ha'
  },
  mutations: {
    addNewHello (state, msg) {
      state.hello = msg
    }
  }
})

export default store
