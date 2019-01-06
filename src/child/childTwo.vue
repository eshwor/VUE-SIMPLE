<template lang="html">
  <div class="childTwo">
    <p>{{childTwoTitleVar}}</p>
    <p>Age: {{editAge}}</p>
    <button type="button" name="button" @click="upateAge" >Change ChildOne Title</button>
  </div>
</template>

<script>
export default {
  props:['childTwoTitleVar','editAge'],
  methods: {
    upateAge(){
      this.editAge = 30;
      this.$emit('editAgeChildOne',this.editAge);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
