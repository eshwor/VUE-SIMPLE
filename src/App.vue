<template lang="html">
  <div class="app-div">
  <header-component :websiteName="websiteName"></header-component>
  <bodyComponent></bodyComponent>
  <footer-component></footer-component>
  </div>
</template>

<script>

import Footer from './shared/Footer.vue';
import Body from './shared/Body.vue';

export default {
  data() {
    return {
      websiteName: 'Vue Project'
    }
  },
  methods:{

  },
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
