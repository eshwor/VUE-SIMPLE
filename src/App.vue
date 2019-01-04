<template>
  <div id="app">
    <h1 v-bind:class="decoration"> {{msg}} </h1>
    <hr>
    <strong>If Else</strong>
    <p v-if="seen">This paragraph will display if the seen value is true otherwise hide it</p>
    <p v-else="seen">I am display if seen value is false</p>
    <hr>
    <strong>Else If</strong>
    <p v-if="type == 'A'">I will be display if type is A</p>
    <p v-else-if="type == 'B'">I will be display if type is B</p>
    <p v-else-if="type == 'C'">I will be display if type is C</p>
    <p v-else="type">I will be display if type is non of A, B, C and D</p>
  </div>
</template>

<script>
export default {
  el: '#app',
  data () {
    return {
      decoration: 'decorationClass',
      msg: 'Welcome To Vue Basic',
      seen: false,
      type: 'A'
    }
  }
}

</script>

<!-- This style will be global and applied to all over -->
<style lang="scss">

  h1 {
    text-align: center;
  }

  .decorationClass {
    background-color: skyblue;
    color: white;
    padding: 1em;
  }
</style>
