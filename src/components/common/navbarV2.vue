<template>
  <!--Navbar Start-->
  <nav class="navbar navbar-expand-lg fixed-top" id="navbar" :class="{'navbar-light': navcolor === 'light', 'navbar-light bg-white' : navcolor === 'light-white'}">
      <!-- LOGO -->
      <router-link class="navbar-brand logo" to="/">
        <img
          src="@/assets/images/logo/logo5.png"
          alt=""
          class="logo-light"
          height="32"
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
        >
          <!-- ## HOME -->
          <li class="nav-item">
            <router-link to="/home" class="nav-link">HOME</router-link>
          </li>

          <!-- ## ABOUT -->
          <li class="nav-item">
            <router-link to="/about" class="nav-link">ABOUT</router-link>
          </li>

          <!-- ## 위노우 기획 -->
          <li class="nav-item">
            <router-link to="/winnowPlanning" class="nav-link">위노우 기획</router-link>
          </li>
          
          <!-- ## 위노우 마케팅 -->
          <li class="nav-item">
            <router-link to="/winnowMarketing" class="nav-link">위노우 마케팅</router-link>
          </li>

          <!-- ## 위노우 디자인 -->
          <li class="nav-item">
            <router-link to="/winnowDesign" class="nav-link">위노우 디자인</router-link>
          </li>

        </ul>
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
    return {
    };
  },
  mounted() {
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


<style lang="scss" scoped>
ul {
  padding: 5px;
}
li {
  list-style: none;
}
.dropItem {
  color: gray !important;
}
.navbar {
  background-color: #c19a444a;
  padding-left: 30px;
  padding-right: 30px;
  
}
.router-link-active {
  color: #0d6efdd9 !important;
}

</style>