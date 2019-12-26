import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import { store } from './store'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:3456/api'
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
