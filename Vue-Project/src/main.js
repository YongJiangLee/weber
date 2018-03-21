import Vue from 'vue'
import App from './App'
import router from './router'
import './config/rem'
import  './plugin/swiper.js'
import FastClick from 'fastclick'
 
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
