import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos';
import "aos/dist/aos.css";
import 'vueperslides/dist/vueperslides.css'
import "@/assets/scss/style.scss";

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


// 전역 컴포넌트
import navbar from '@/components/common/navbar.vue'
import footer from '@/components/common/footer.vue'
Vue.component('Navbar', navbar);
Vue.component('Footer', footer);


new Vue({
  created() {
    AOS.init();
  },
  router,
  render: h => h(App),
}).$mount('#app')
