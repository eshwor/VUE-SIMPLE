<template>
  <div id="app">
    <h1 v-bind:class="decoration"> {{msg}} </h1>
    <hr>
    <strong>If Else</strong>
    <p v-if="seen">This paragraph will display if the seen value is true otherwise hide it</p>
    <p v-else="seen">I am display if seen value is false</p>
    <hr>
    <strong>Else If</strong>
    <p v-if="type == 'A'">I will be display if type is A</p>
    <p v-else-if="type == 'B'">I will be display if type is B</p>
    <p v-else-if="type == 'C'">I will be display if type is C</p>
    <p v-else="type">I will be display if type is non of A, B, C and D</p>
    <hr>
    <hr>
    <hr>
    <strong>For Loop</strong>
    <p>Array loops with index</p>
    <ul>
      <li v-for="item, index in items"> {{index}} - {{item.message}} </li>
    </ul>
    <hr>
    <strong>Object value loop and it's key pairs</strong>
    <ul>
      <li v-for="(value, key, index) in object"> {{index}} :-  {{key}} : {{value}} </li>
    </ul>
    <hr>
    <p v-for="count in count">I will be keep looping belongs count value</p>
    <hr>
    <strong>Array push method</strong>
    <ul>
      <li v-for="pushMsg in pushMsg"> {{pushMsg}}</li>
      <button type="button" @click="pushMsg.push('D')">Push Something</button>
    </ul>
    <hr>
    <strong>Using once even its override</strong>
    <p v-once>This is never chance and use it once forever : {{neverchange}}</p>
    <hr>
    <strong>Raw HTML</strong>
    <h2 v-html="htmlWay"></h2>
    <hr>
    <strong>Attributes Change</strong>
    <button type="button" name="bindName" v-bind:disabled="isButtonDisabled">ATTRIBUTES BUTTON</button>
    <hr>
    <strong>Modifiers</strong>
    <p>Modifiers goes here</p>
    <hr>
    <strong>Passing Arguments</strong>
    <button type="button" @click="incrementFunction(5)">Increment the Counter</button>
    <p> {{counterNumber}} </p>
    <hr>
    <strong>Modifiers</strong>
    <input type="text" @keyup.stop.enter="keyModifier()">
    <hr><hr><hr>
    <strong>Methods vs computed vs watcher [Need To Learn More Details]</strong>
    <p> Original Message: {{welcomeMsg}} </p>
    <p> New Message: {{ printFunction() }} </p>
    <p> New Message: {{ computedPrintFunction }} </p>
  </div>
</template>

<script>
export default {
  el: '#app',
  data () {
    return {
      decoration: 'decorationClass',
      msg: 'Welcome To Vue Basic',
      seen: false,
      type: 'A',
      items: [
        {message: "Message One"},
        {message: "Message Two"}
      ],
      object: {
        name: "Vue Lover",
        age: 1,
        hubby: "Vue Developer"
      },
      count: 2,
      pushMsg: ['A','B','C'],
      neverchange: "Neverever change",
      htmlWay: '<p>This is the paragraph</p>',
      isButtonDisabled: true,
      bindName: 'buttonName',
      counterNumber: 0,
      welcomeMsg: "Old Welcome Message"
    }//return
  },//data end
  methods: {
    incrementFunction(pass){
      this.counterNumber += pass;
    },
    keyModifier(){
      alert("Alert !");
    },
    printFunction(){
      return this.welcomeMsg = "Methods New Welcome Message";
    }
  },
  computed: {
    computedPrintFunction(){
      //return this.welcomeMsg.split('').reverse().join('');
      return this.welcomeMsg = "Computed New Message";
    }
  }
}

</script>

<!-- This style will be global and applied to all over -->
<style lang="scss">

  h1 {
    text-align: center;
  }

  button {
    padding: 1rem 2rem;
    display: block;
    background-color: green;
    color: white;
    margin: 1rem 0;
  }
  button[disabled]{
    background-color: #DDD;
  }

  .decorationClass {
    background-color: skyblue;
    color: white;
    padding: 1em;
  }
</style>
