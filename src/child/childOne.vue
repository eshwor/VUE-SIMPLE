<template lang="html">
  <div class="childOne">
    <p style="background-color:gray; color:white; padding: 0.5rem;">{{editAge}}</p>
    <p>{{childOneTitleVar}}</p>
    <button type="button" name="button" @click="changeMainTitle">Change The ChildOne Main Title</button>
    <button type="button" name="button" @click="changeMainTitleGlobal">Change The ChildOne Main Title Global</button>
  </div>
</template>

<script>
export default {
  props: ['childOneTitleVar','editAge'],
  methods: {
    changeMainTitle(){
      this.childOneTitleVar = "Hey, you just changed my original title";
    },
    changeMainTitleGlobal(){
      this.childOneTitleVar = "Hey, you update title GLOBALLY";
      this.$emit('changeGlobally', this.childOneTitleVar);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
