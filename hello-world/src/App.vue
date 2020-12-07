<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>测试vuex</h1>
    <p>count: {{count}}<button @click="incr">加1</button></p>
    <p>count: {{count}}<button @click="incr_asyc">异步加10</button></p>
    <p>count: {{count}}<button @click="incr_asyc_back">异步加1后回调</button></p>
    <ul>
      <li v-for="todo in todos" :key="todo">{{todo}}</li>
    </ul>
    <p><button @click="add_todo()">点我添加任务</button></p>
    <p><button @click="get_third_todo()">点我先创建后获取第三条</button></p>
    <p><button @click="get_third_todo2()">点我直接获取第三条</button></p>
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
    todos() {
      return this.$store.state.todos
    },
    local() {
      return 3
    },
  },
  methods: {
    incr: function() {
      this.$store.commit('increment')
    },
    incr_asyc: function() {
      this.$store.dispatch('increment')
    },
    incr_asyc_back: function() {
      this.$store.dispatch('increment_callback').then(() => {
        console.info("修改成功")
        console.info(this.count)
      })
    },
    add_todo: function() {
      this.$store.dispatch('add_todo')
    },
    get_third_todo: function() {
      this.$store.dispatch('add_todo').then(() =>{
        console.info("第三条任务是: ")
        console.info(this.$store.getters.third_todo)
      })
    },
    get_third_todo2: function() {
      this.$store.dispatch('get_third_todo').then(() =>{
        console.info("第三条任务是: ")
        console.info(this.$store.getters.third_todo)
      })
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
