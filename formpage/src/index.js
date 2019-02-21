/**
 * Created by songali on 19/2/21.
 */
import './common/polyfill'
import Vue from 'vue'
import App from './App.vue'
import store from './store/index'

new Vue({
  el: '#app',
  store,
  data: {},

  render (h) {
    return h(App)
  }
})

