<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>测试vuex</h1>
    <p>local: {{local}}</p>
    <p>count: {{count}}</p>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  computed: {
    count () {
      return this.$store.state.count
    },
    local() {
      return 3
    },
  },
}
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
