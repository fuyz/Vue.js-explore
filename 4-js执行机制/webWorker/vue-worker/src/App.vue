<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <h1>Web Workers basic example</h1>
    <div class="controls" tabindex="0">
      <form>
        <div>
          <label for="number1">Multiply number 1:</label>
          <input type="number" id="number1" value="0" />
        </div>
        <div>
          <label for="number2">Multiply number 2:</label>
          <input type="number" id="number2" value="0" />
        </div>
      </form>

      <p class="result">Result: 0</p>
    </div>

  </div>
</template>
<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Main from './assets/main.js'
console.log(Main.loadPage)
export default {
  name: "App",
  components: {
    // HelloWorld,
  },
  mounted(){    
    Main.loadPage()
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
