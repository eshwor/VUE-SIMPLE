import Vue from 'vue'
import App from './App.vue'
import Header from './shared/Header.vue'

Vue.component('header-component', Header); //use as global

new Vue({
  el: '#app',
  render: h => h(App)
})
