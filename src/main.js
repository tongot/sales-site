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
import loadingBtn from './directives/loadingBtn';
import * as firebase from 'firebase';

Vue.config.productionTip = false;

Vue.component('nav-bar', require('./components/Navbar.vue').default);
Vue.directive('screen-observer', screenObserver);
Vue.directive('loading', loadingBtn);
new Vue({
  router,
  store,
  render: (h) => h(App),
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDz-YKbeRsXPHZycN1GrbC8SIYofNYR0Dk',
      authDomain: 'my-commerce-28796.firebaseapp.com',
      databaseURL: 'https://my-commerce-28796.firebaseio.com',
      projectId: 'my-commerce-28796',
      storageBucket: 'my-commerce-28796.appspot.com',
    });
  },
}).$mount('#app');
