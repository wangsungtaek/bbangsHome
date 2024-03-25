<template>
  <div id="about">
    <NavbarV2 />
    <div v-scroll-spy>
      <img v-if="width >= 750" src="@/assets/images/banner/aboutL.jpeg" />
      <img v-else src="@/assets/images/banner/aboutS.jpeg">

      
      <div id="content">
        <div class="row">
          <div class="col-lg-12">
            <img id="contentImg" src="@/assets/images/about/about.jpg" />
          </div> 
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
    }
  }
  
};
</script>

<style lang="scss" scoped>
#about {
  img {
    width: 100%;
    
  }
  #contentImg {
    height: auto;
  }
}
</style>