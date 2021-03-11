import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import axios from 'axios'
// import '_github-markdown-css@4.0.0@github-markdown-css'

Vue.config.productionTip = false
// Vue.prototype.$ = $
// Vue.use(axios)
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://121.36.25.146:5637'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

