<template lang="html">
  <div class="app-div">
  <header-component></header-component>
  <bodyComponent></bodyComponent>
  <footer-component></footer-component>
  </div>
</template>

<script>

import Footer from './shared/Footer.vue';
import Body from './shared/Body.vue';

export default {
  components: {
    "footer-component": Footer,
    "bodyComponent": Body
  }
}
</script>

<style lang="css">
  body {
    margin: 0;
  }
</style>
