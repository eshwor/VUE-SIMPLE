<template lang="html">
  <div class="parent-div">
    <h1 v-html='parrentTitle'></h1>
    <div class="testingDiv">
      <p>{{childOneTitle}}</p>
    </div>
    <div class="flexbox">
      <div class="flex-child">
        <childOne :childOneTitleVar="childOneTitle" @changeGlobally="childOneTitle = $event" :editAge="age"></childOne>
      </div>
      <div class="flex-child">
        <ChildTwo :childTwoTitleVar="childTwoTitle" :editAge="age" @editAgeChildOne="age = $event"></ChildTwo>
      </div>
    </div>
  </div>
</template>

<script>
import ChildOne from './child/childOne.vue'
import ChildTwo from './child/childTwo.vue'

export default {
  components: {
    'childOne': ChildOne,
    'ChildTwo': ChildTwo
  },
  data() {
    return {
      parrentTitle: '<span style="text-decoration: underline;">I am the parent of these two child components</span>',
      childOneTitle: 'This is child one',
      childTwoTitle: 'This is child two',
      age: 20
    }
  }
}
</script>

<style lang="css">
  .parent-div {
    background-color: skyblue;
    color: while;
    width: 100%;
    box-shadow: 0px 9px 24px #AAA;
    padding: 2rem;
    text-align: center;
    color: white;
  }

  .flexbox {
    display: flex;
    border: 1px solid white;
    justify-content: space-between;
    padding: 1rem;
    width: 60%;
    margin: 0 auto;
  }

  .flex-child {
    margin: 0.2rem;
    background-color:white;
    width: 100%;
    color: black;
  }
  button {
    background-color: blue;
    padding:1rem;
    margin: 1rem;
    color: white;
    border-radius: 0.5rem;
  }
  .testingDiv {
    background-color:green;
    padding:0.5rem;
    text-align: left;
    width: 50%;
    margin: 1rem auto;
  }
</style>
