import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;
import 'popper.js';
import 'bootstrap';
import './assets/app.scss';
import screenObserver from './directives/screenObserver';

Vue.config.productionTip = false;

Vue.component('nav-bar', require('./components/Navbar.vue').default);
Vue.directive('screen-observer', screenObserver);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
