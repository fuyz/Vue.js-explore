import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

let v1 = new Vue()
v1.__proto__.say = () => alert('hhhha')
let v2 = new Vue()
v2.say()
console.log(v2.__proto__)
