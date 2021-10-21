import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './api.js'

import './style/main.styl'


import VueCarousel from 'vue-carousel'
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);
Vue.use(VueCarousel)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  Vuetify,
  render: h => h(App)
}).$mount('#app')
