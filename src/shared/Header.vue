<template lang="html">
  <div class="header">
    <h2>This is the Header Part of the website</h2>
  </div>
</template>

<script>
export default {
  data(){
    return{
      header: "Welcome to Our Website"
    }
  }
}
</script>

<style lang="css" scoped>
  .header {
    background-color: skyblue;
    padding: 3rem;
  }
  h2 {
    color: white;
    text-align: center;
    font-size: 1.5rem;
  }
</style>
