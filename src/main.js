import Vue from 'vue'
import App from './App.vue' ///main component to render to the index page
import Parent from './Parent.vue' //This would be the temp test to communication between child to parent and parent to child component
import Header from './shared/Header.vue'

Vue.component('header-component', Header);

//export const eventBus = new Vue();//use as global [Way one]
//Also We can use methods way event bus
export const eventBus = new Vue({
  methods: {
    changeAge(age){
      this.$emit('editAgeChildOne', age);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(Parent) ///Change is back to App
})
