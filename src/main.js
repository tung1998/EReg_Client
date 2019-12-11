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
/* @import 'assets/vendor/magnific-popup/magnific-popup.css'; */
/* @import 'assets/vendor/bootstrap-datepicker/css/bootstrap-datepicker3.css'; */
/* Specific Page /vendor CSS */

/* @import 'assets/vendor/jquery-ui/jquery-ui.css'; */
/* @import 'assets/vendor/jquery-ui/jquery-ui.theme.css'; */
/* @import 'assets/vendor/bootstrap-multiselect/bootstrap-multiselect.css'; */
/* @import 'assets/vendor/morris/morris.css'; */
import "./assets/vendor/pnotify/pnotify.custom.css";
/* Theme CSS */
import './assets/css/theme.css';
/* Theme Custom CSS */
import './assets/css/custom.css';


//import js
// window.Jquery = require('jquery')
// window.$ = require('jquery')
// require('@/assets/vendor/modernizr/modernizr.js')
// require('@/assets/vendor/popper/umd/popper.min.js')
// require('@/assets/vendor/jquery/jquery.js')
// require('@/assets/vendor/jquery-browser-mobile/jquery.browser.mobile.js')
// require('@/assets/vendor/jquery-cookie/jquery-cookie.js')
// require('@/assets/vendor/bootstrap/js/bootstrap.js')
// require('@/assets/vendor/select2/js/select2.js')
// require('@/assets/vendor/nanoscroller/nanoscroller.js')
require('@/assets/js/theme.js')
// require('@/assets/js/custom.js')



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
