/* eslint-disable */
import Vue from 'vue';
import './plugins/meta';
import vuetify from './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/scss/style.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');