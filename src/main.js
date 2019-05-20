import Vue from 'vue'
import App from './App.vue'
// import router from "./router";
import store from './store'
import './registerSlides.js'
import Reveal from 'reveal.js/js/reveal'

Vue.config.productionTip = false

new Vue({
  // router,
  store,
  reveal: Reveal,
  render: h => h(App),
}).$mount('#app')
