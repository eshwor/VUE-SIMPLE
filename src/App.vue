<template lang="html">
  <div class="app-div">
  <div class="">
    {{bodymsg}}
  </div>
  <header-component :websiteName="websiteName"></header-component>
  <bodyComponent :bodymsg="bodymsg" @resetBodyMsg="bodymsg = $event" :restFun="restBodyMsg"></bodyComponent>
  <footer-component></footer-component>
  </div>
</template>

<script>

import Footer from './shared/Footer.vue';
import Body from './shared/Body.vue';

export default {
  data() {
    return {
      websiteName: 'Vue Project',
      bodymsg: 'This is the body area'
    }
  },
  methods:{
    restBodyMsg(){
      this.bodymsg = 'This is the alternative way to communication from parent to child using call functinon !';
    }
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
