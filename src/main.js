import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import '../src/assets/css/custom.scss'


import 'moment/moment.js'
import 'pikaday/pikaday.js'
import 'pikaday/css/pikaday.css'


Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
