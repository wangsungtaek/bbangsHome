<template>
  <div id="winnowMarketing">
    <NavbarV2 />
    <div v-scroll-spy>
      <img v-if="width >= 750" src="@/assets/images/banner/winnowPlanningL.jpeg">
      <img v-else src="@/assets/images/banner/winnowPlanningS.jpeg">

      <div id="content">
        <div class="row">
          <router-link to="/winnowPlanning/detail?num=1" class="col-lg-3 imgCol">
            <img src="@/assets/images/winnowPlanning/01.jpg">
          </router-link>
          <router-link to="/winnowPlanning/detail?num=2" class="col-lg-3 imgCol">
            <img src="@/assets/images/winnowPlanning/02.jpg">
          </router-link>
          <router-link to="/winnowPlanning/detail?num=3" class="col-lg-3 imgCol">
            <img src="@/assets/images/winnowPlanning/03.jpg">
          </router-link>
          <router-link to="/winnowPlanning/detail?num=4" class="col-lg-3 imgCol">
            <img src="@/assets/images/winnowPlanning/04.jpg">
          </router-link>
          <router-link to="/winnowPlanning/detail?num=5" class="col-lg-3 imgCol">
            <img src="@/assets/images/winnowPlanning/05.jpg">
          </router-link>
          <router-link to="/winnowPlanning/detail?num=6" class="col-lg-3 imgCol">
            <img src="@/assets/images/winnowPlanning/06.jpg">
          </router-link>
          <router-link to="/winnowPlanning/detail?num=7" class="col-lg-3 imgCol">
            <img src="@/assets/images/winnowPlanning/07.jpg">
          </router-link>
          <router-link to="/winnowPlanning/detail?num=8" class="col-lg-3 imgCol">
            <img src="@/assets/images/winnowPlanning/08.jpg">
          </router-link>
         
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  created() {
  },
  data() {
    return {
      width: '',
      height: ''
    };
  },
  mounted() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    // 사이즈 조절시 이벤트 발생.
    window.addEventListener('resize', this.handleResiz);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResiz() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    },
    toDetail(num) {
      console.log(num);
      console.log(this.$route);
      this.$route.push({
        path: '/winnowPlanning/detail',
        params: {
          num: '1'
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
#winnowMarketing {
  img {
    width: 100%;
  }
  #content {
    img {
      width: 100%;
      // height: 500px;
      // filter: brightness(80%)
    }
    .imgCol {
      padding: 0px;
    }
    .imgCol:hover {
      cursor: pointer;
    }
  }
}
</style>