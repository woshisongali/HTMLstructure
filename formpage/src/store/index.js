/**
 * Created by songali on 19/2/21.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import dealModule from './dealModule'
import creditModule from './creditModule'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    dealModule,
    creditModule
  }
})

export  default store