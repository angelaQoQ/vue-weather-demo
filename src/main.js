import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './plugins/element.js'

Vue.config.productionTip = false;

import ElementUI from 'element-ui';
import VueAMap from 'vue-amap';
// import axios from 'axios';
import VueResource from 'vue-resource'
Vue.use(ElementUI);
Vue.use(VueAMap);
Vue.use(VueResource);

// Vue.prototype.$http = axios;

// axios.interceptors.request.use(function(config) {
//   config.headers.Authorization = 'APPCODE 2cb0a35faa5841cd86d338ef1e2639ff';
//   return config;
// }),function(error) {
//   return Promise.reject(error);
// };
// Vue.http.headers.common['Authorization'] = 'APPCODE 2cb0a35faa5841cd86d338ef1e2639ff';
Vue.http.options.emulateJSON = true;
Vue.http.interceptors.push((request, next) => {
  // 请求发送前的处理逻辑
  request.headers.set('Authorization', 'APPCODE 2cb0a35faa5841cd86d338ef1e2639ff')
  next((response) => {
    // 请求发送后的处理逻辑
    // 根据请求的状态，response参数会返回给successCallback或errorCallback
    return response
  })
})

VueAMap.initAMapApiLoader({
  key: '5c055e14bc42ed337c3392c50b08e15b',
  plugin:['AMap.Geolocation']
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
