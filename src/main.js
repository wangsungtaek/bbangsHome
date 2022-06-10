import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos';
import "aos/dist/aos.css";

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import Scrollspy from 'vue2-scrollspy';
import VueYoutube from 'vue-youtube'

var VueScrollTo = require('vue-scrollto');

import VueParticles from 'vue-particles'

Vue.config.productionTip = false

Vue.use(VueYoutube)
Vue.use(VueParticles)

// Install BootstrapVue
Vue.use(BootstrapVueIcons);
Vue.use(BootstrapVue);
Vue.use(VueScrollTo);
Vue.use(Scrollspy);

import "@/assets/scss/style.scss";


new Vue({
  created() {
    AOS.init();
  },
  router,
  render: h => h(App),
}).$mount('#app')
