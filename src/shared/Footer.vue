<template lang="html">
  <div class="footer">
    <p> {{ footer }} </p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      footer: "Copy all right reserved"
    }
  }
}
</script>

<style lang="css" scoped>
  .footer {
    position: absolute;
    background-color: skyblue;
    padding: 1rem;
    color: white;
    text-align: center;
    width: 100%;
    bottom: 0;
  }
</style>
