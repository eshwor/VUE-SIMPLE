<template lang="html">
  <div class="body-div">
    <p> {{bodymsg}} </p>
    <button type="button" @click="resetDisplay">Shot the message to body</button>
    <button type="button" @click="restFun()">Alternative way to communication from parent to child component</button>
  </div>
</template>

<script>
export default {
  // props: ['bodymsg'],
  props: {
    bodymsg: String,
    restFun: Function
  },
  data(){
    return {
      message: "Congratuation we have successfully created the vue project" //not using anywhere for now
    }
  },
  methods: {
    msgDisplay(){
      return this.bodymsg = this.message;
    },
    resetDisplay(){
      this.bodymsg = 'New Message On body';
      this.$emit('resetBodyMsg', this.bodymsg);
    }
  }
}
</script>

<style lang="css" scoped>
  .body-div {
    margin: 0;
    height: 100%;
  }
  button {
    padding: 1rem;
    background-color: blue;
    color: white;
  }

</style>
