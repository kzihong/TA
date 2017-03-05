import Vue from 'vue'
import App from './App.vue'
import router from "./route.js"

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
