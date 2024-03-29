// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import Axios from 'axios'
import qs from 'qs'
import 'element-ui/lib/theme-chalk/index.css';

Axios.defaults.baseURL = "http://www.vport.com/rest/"

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$http = Axios
Vue.use(qs)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
