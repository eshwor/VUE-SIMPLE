<template lang="html">
  <div class="header">
    <!-- <h2>{{ printHeader() }}</h2> IF YOU WANT TO CALL THE FUNCTION -->
    <!-- <h2> {{ websiteName}} </h2> -->
    <h2> {{changeProptMsg()}} </h2>
    <h2>This is the Header Part of the website</h2>
  </div>
</template>

<script>
export default {
  // props: ['websiteName'], //simple way
  // props: {
  //   websiteName: String
  // },
  // We can use function on default as well:::::::::::
  props: {
    websiteName: {
      type: String,
      default: 'Welcome To My Website'
    }
  },
  data(){
    return{
      header: "Welcome to Our Website" //Static
    }
  },
  methods: {
    printHeader(){
      return this.websiteName.split('').reverse().join('');
    },
    changeProptMsg(){
      return this.websiteName = "Welcome to Vue Based Website";
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
