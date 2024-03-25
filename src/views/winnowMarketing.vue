<template>
  <div id="winnowMarketing">
    <NavbarV2 />
    <div v-scroll-spy>
      <img v-if="width >= 750" src="@/assets/images/banner/winnowMarketingL.jpeg">
      <img v-else src="@/assets/images/banner/winnowMarketingS.jpeg">

      <div id="content">
        <div class="row">
          <div 
            class="col-lg-3 imgCol"
            v-for="(imgPath, idx) in imgList"
            :key="imgPath"
          >
            <router-link :to="`/winnowMarketing/detail?num=${idx+1}`">
              <img :src="imgPath">
            </router-link>
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
    for(let i = 1; i <= 26; i++) {
      this.imgList[i-1] = require(`@/assets/images/winnowMarketing/${i}.jpg`);
    }
  },
  data() {
    return {
      imgList: [],
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
#winnowMarketing {
  img {
    width: 100%;
  }
  #content {
    img {
      width: 100%;
      // height: 500px;
      // filter: brightness(70%)
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