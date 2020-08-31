import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);


Vue.config.productionTip = false;

//filters
Vue.filter("snippet", function(value){
  if (value.length < 200) {
    return value
  }else {
    return value.slice(0,200) + "...";
  }
});

new Vue({
  router,
  store,
  render: function (h) { return h(App) },
}).$mount('#app');