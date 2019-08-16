import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/fonts/font.css'
import VueLazyLoad from 'vue-lazyload'

const apiUrl = "http://localhost:3000/"

Vue.prototype.axios = axios

Vue.prototype.$req = (api, data = {}) => axios.get(apiUrl + api, {
  params: data
});

Vue.prototype.resetSetItem = function (key, newVal) {
  if (key === 'songID') {
      // 创建一个StorageEvent事件
      var newStorageEvent = document.createEvent('StorageEvent');
      const storage = {
          setItem: function (k, val) {
              sessionStorage.setItem(k, val);
              // 初始化创建的事件
              newStorageEvent.initStorageEvent('setItem', false, false, k, null, val, null, null);
              // 派发对象
              window.dispatchEvent(newStorageEvent)
          }
      }
      return storage.setItem(key, newVal);
  }
}


Vue.config.productionTip = false;
axios.defaults.withCredentials = true;
const loginStatus = axios.get(apiUrl + 'login/status')
  .then((res) => {
    store.commit("loginStatusInfo", true);
    store.commit("mutaUserInfo", res.data.profile);
    sessionStorage.setItem('userInfo', JSON.stringify(res.data));
  }).catch((err) => {
    throw err
  })
Vue.use(ElementUI);


Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  loading: require('./assets/images/orb.gif'),
  error: './assets/images/orb.gif',
  attempt: 1
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
export default loginStatus

