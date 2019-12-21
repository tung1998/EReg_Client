// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/vendor/bootstrap/css/bootstrap.css';
/* @import 'assets/vendor/animate/animate.css'; */
import './assets/vendor/font-awesome/css/fontawesome-all.min.css';
import './assets/vendor/select2/css/select2.css';
import './assets/vendor/select2-bootstrap-theme/select2-bootstrap.min.css';
import './assets/vendor/magnific-popup/magnific-popup.css';
import './assets/vendor/bootstrap-datepicker/css/bootstrap-datepicker3.css'
/* Specific Page /vendor CSS */

import "./assets/vendor/pnotify/pnotify.custom.css";
import './assets/css/theme.css';
import './assets/css/custom.css';


//import js
window.jQuery = require('jquery')
window.$ = require('jquery')
require('bootstrap')
window.PNotify = require('pnotify/dist/es/PNotify')
require('@/assets/vendor/pnotify/pnotify.custom')
require('@/assets/vendor/bootstrap-datepicker/js/bootstrap-datepicker')
require('@/assets/js/theme.js')



Vue.config.productionTip = false
Vue.use(require('vue-cookies'))
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
