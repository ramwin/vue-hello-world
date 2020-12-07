import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    count: 9527,
    todos: [
      "待办事项1",
      "待办事项2",
    ],
  },
  getters: {
    third_todo: state => {
      if (state.todos.length < 3) {
        this.commit('add_todo')
      }
      return state.todos[2]
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    add_todo(state) {
      state.todos.push('新的代办事项')
    },
  },
  actions: {
    increment(context) {
      for (let i=0; i<10; i++) {
        setTimeout(
          ()=>{
            context.commit('increment')
          },
          1000*i
        )
      }
    },
    increment_callback(context) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('increment')
          resolve()
        }, 1000)
      })
    },
    add_todo(context) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('add_todo')
          resolve()
        }, 1000)
      })
    },
    get_third_todo(context) {
      return new Promise((resolve, reject) => {
        if (context.state.todos.length >= 3) {
          resolve()
        } else {
          return context.dispatch("add_todo").then(() => {
            resolve()
          })
        }
      })
    },
  }
})

new Vue({
  render: h => h(App),
  store: store,
}).$mount('#app')
