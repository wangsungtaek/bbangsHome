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
  },
};
</script>

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
          <li class="nav-item">
            <a
              href="/"
              class="nav-link"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="'#business'"
              href="javascript: void(0);"
              class="nav-link"
              >Business</a
            >
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="'#interview'"
              href="javascript: void(0);"
              class="nav-link"
              >Interview</a
            >
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="'#strongPoint'"
              href="javascript: void(0);"
              class="nav-link"
              >Strong Point</a
            >
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="'#partners'"
              href="javascript: void(0);"
              class="nav-link"
              >Partners</a
            >
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="'#contact'"
              href="javascript: void(0);"
              class="nav-link"
              >Contact</a
            >
          </li>
          <li class="list-inline-item">
            <b-nav-item-dropdown
              id="my-nav-dropdown"
              text="Marketing"
              toggle-class="nav-link-custom"
            >
              <ul>
                <li>
                  <router-link to="/onlineMarketing" class="dropItem">Online Marketing</router-link>
                </li>
                <li class="mt-2">
                  <router-link to="/offlineMarketing" class="dropItem">Offline Marketing</router-link>
                </li>
                <li class="mt-2">
                  <router-link to="/brandMarketing" class="dropItem">Brand Marketing</router-link>
                </li>
              </ul>
            </b-nav-item-dropdown>
          </li>
        </ul>
      </div>
    </div>
    <!-- end container -->
  </nav>
  <!-- Navbar End -->
</template>
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