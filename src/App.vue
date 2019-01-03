<template>
  <div id="app">
    <h1> {{msg}} </h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome To Vue Basic'
    }
  }
}

</script>

<style lang="scss" scoped>
  h1 {
    text-align: center;
  }
</style>
