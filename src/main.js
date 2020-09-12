import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import jquery from 'jquery'
// eslint-disable-next-line no-unused-expressions
// window.$ = jquery
// Install BootstrapVue
Vue.use(BootstrapVue)

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false
// filters
Vue.filter('shortrn', function (v, edge) {
  return v.substring(1, edge) + '...'
})

// directives
Vue.directive('darkness', {
  bind: function (el) {
    el.style.backgroundColor = ' #2c3e50'
  }

})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
