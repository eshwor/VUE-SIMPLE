<template>
  <div id="app">
    <strong>Event Handling</strong>
    <button type="button" @click="counter += 1">INCREASE</button>
    <p> {{counter}} </p>
    <hr>
    <strong>Method Event Handling</strong>
    <button type="button" @click="greeting">EVENT HANDLING</button>
    <p>{{ greeting() }}</p>
    <hr>
    <strong>INPUT BINDING</strong>
    <p>Input Text Binding</p>
    <input type="text" name="" value="" placeholder='text goes here' v-model="message">
    <p>Binding Result : {{message}} </p>
  </div>
</template>

<script>
export default {
  el: '#app',
  data () {
    return {
      counter: 0,
      message: "VUE Developer"
    }
  },
  methods: {
    greeting(event){
      if(event){
        alert(event.target.attributes);
      }
    }
  }
}
</script>

<style lang="scss">

</style>
