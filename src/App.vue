<template>
  <div id="app">
    <h1 v-bind:class="decoration"> {{msg}} </h1>
  </div>
</template>

<script>
export default {
  el: '#app',
  data () {
    return {
      decoration: 'decorationClass',
      msg: 'Welcome To Vue Basic'
    }
  }
}

</script>

<!-- This style will be global and applied to all over -->
<style lang="scss">
  * { margin: 0rem; }

  h1 {
    text-align: center;
  }

  .decorationClass {
    background-color: skyblue;
    color: white;
    padding: 1em;
  }
</style>
