<template>
  <!--Navbar Start-->
  <nav class="navbar navbar-expand-lg fixed-top" id="navbar" :class="{'navbar-light': navcolor === 'light', 'navbar-light bg-white' : navcolor === 'light-white'}">
    <div class="container">
      <!-- LOGO -->
      <router-link class="navbar-brand logo" to="/">
        <img
          src="@/assets/images/logo.png"
          alt=""
          class="logo-light"
          height="28"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleMenu()"
      >
        <menu-icon class=""></menu-icon>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul
          class="navbar-nav ms-auto navbar-center"
          id="navbar-navlist"
          v-scroll-spy-active="{
            selector: 'li a.nav-link',
            class: 'active',
          }"
        >
          <li class="list-inline-item" @click="move('/')">
            <b-nav-item-dropdown text="Home" toggle-class="nav-link-custom" >
              <ul>
                <li>
                  <a href="javascript: void(0);" class="dropItem nav-link" v-scroll-to="'#business'">Business</a>
                </li>
                <li class="mt-2">
                  <a href="javascript: void(0);" class="dropItem nav-link" v-scroll-to="'#interview'">Interview</a>
                </li>
                <li class="mt-2">
                  <a href="javascript: void(0);" class="dropItem nav-link" v-scroll-to="'#strongPoint'">Strong Point</a>
                </li>
                <li class="mt-2">
                  <a href="javascript: void(0);" class="dropItem nav-link" v-scroll-to="'#example'">Example</a>
                </li>
                <li class="mt-2">
                  <a href="javascript: void(0);" class="dropItem nav-link" v-scroll-to="'#partners'">Partners</a>
                </li>
              </ul>
            </b-nav-item-dropdown>
          </li>

          <li class="nav-item">
            <router-link to="/brandMarketing" class="nav-link">Brand Marketing</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/offlineMarketing" class="nav-link">Offline Marketing</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/onlineMarketing" class="nav-link">Online Marketing</router-link>
          </li>

          <li class="nav-item">
            <a href="/#contact" class="nav-link">Contact</a>
          </li>

        </ul>
      </div>
    </div>
    <!-- end container -->
  </nav>
  <!-- Navbar End -->
</template>
<script>
import { MenuIcon } from "vue-feather-icons";

export default {
  props: {
    navcolor: {
      type: String,
      default: null,
    },
  },
  components: { MenuIcon },
  data() {
    return {};
  },
  mounted: () => {
    window.onscroll = function () {
      onwindowScroll();
    };
    var navbar = document.getElementById("navbar");
    function onwindowScroll() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        navbar.classList.add("nav-sticky");
      } else {
        navbar.classList.remove("nav-sticky");
      }
    }
  },
  methods: {
    /**
     * Toggle menu
     */
    toggleMenu() {
      document.getElementById("navbarCollapse").classList.toggle("show");
    },
    move(to) {
      console.log(to);
      this.$router.push(to);
    }
  },
};
</script>


<style scoped>
ul {
  padding: 5px;
}
li {
  list-style: none;
}
.dropItem {
  color: gray !important;
}
</style>