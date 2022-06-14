<script>


export default {
  components: {
  },
  created() {
    for (let i = 0; i < 2; i++) {
      this.imageList[i] = require(`@/assets/images/offlineMarketing/offlineMarketing_${i+1}.jpg`);
    }
  },
  data() {
    return {
      imageList: []
    };
  },
  
};
</script>

<template>
  <div id="offlineMarketing">
    <Navbar />
    <div v-scroll-spy>
      <section
        class="hero-8 bg-center position-relative"
        :style="{
          'background-image':
            'url(' + require('@/assets/images/offlineMarketing/offlineMarketing_0.jpg') + ')',
        }"
        id="offlineMarketingSection"
      >
        <div class="bg-overlay bg-dark"></div>
        <vue-particles
          class="particles-effect"
          color="#dedede"
          :moveSpeed="6"
          :particleSize="4"
        ></vue-particles>
      </section>

      <!-- Content -->
      <div class="row justify-content-center" v-for="imgPath in imageList" :key="imgPath" data-aos="zoom-in">
        <div class="col-lg-12">
          <img :src="imgPath" class="img-fluid d-block ms-auto rounded shadow" />
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>


<style lang="scss" scoped>
#offlineMarketing {
  .particles-effect {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
  }
  img {
    width: 100%;
  }
}
</style>