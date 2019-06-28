import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/fonts/font.css'

const apiUrl = "http://localhost:4000/"

Vue.prototype.axios = axios

Vue.prototype.$req = (api, data = {}) => axios.get(apiUrl + api, {
  params: data
})

Vue.config.productionTip = false;
axios.defaults.withCredentials = true;
let loginStatus = axios.get(apiUrl + 'login/status')
  .then((res) => {
    store.commit("loginStatusInfo", true);
    sessionStorage.setItem('userInfo', JSON.stringify(res.data))
  }).catch((err) => {
    throw err
  })
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
export default loginStatus

